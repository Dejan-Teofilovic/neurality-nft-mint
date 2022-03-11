import React, { createContext, useContext, useEffect, useReducer } from 'react';
import api from '../utils/api';
import { ERROR, INFO, SUCCESS } from '../utils/constants';
import setAuthToken from '../utils/setAuthToken';
import { AlertMessageContext } from './AlertMessageContext';
// ----------------------------------------------------------------------

const initialState = {
  accessToken: ''
};

const handlers = {
  SET_ACCESS_TOKEN: (state, action) => {
    return {
      ...state,
      accessToken: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const AdminAuthContext = createContext({
  ...initialState,
  adminSignIn: () => Promise.resolve(),
  adminSignOut: () => Promise.resolve()
});

//  Provider
function AdminAuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);

  //  Sign in
  const adminSignIn = (password) => {
    api.post('/admin/adminSignIn', { password })
      .then(response => {
        dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: response.data
        });
        localStorage.setItem('accessToken', response.data);
        setAuthToken(response.data);
        openAlert({
          severity: SUCCESS,
          message: 'You are signed!'
        });
      })
      .catch(error => {
        dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: ''
        });
        localStorage.removeItem('accessToken');
        setAuthToken(null);
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
      });
  };

  //  Sign out
  const adminSignOut = () => {
    dispatch({
      type: 'SET_ACCESS_TOKEN',
      payload: ''
    });
    localStorage.removeItem('accessToken');
    setAuthToken(null);
    console.log('# openAlert: ', openAlert);
    openAlert({
      severity: INFO,
      message: "You're signed out."
    });
  };

  useEffect(() => {
    const localAccessToken = localStorage.getItem('accessToken');
    if (localAccessToken) {
      dispatch({
        type: 'SET_ACCESS_TOKEN',
        payload: localAccessToken
      });
    } else {
      dispatch({
        type: 'SET_ACCESS_TOKEN',
        payload: ''
      });
    }
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{
        ...state,
        adminSignIn,
        adminSignOut
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export { AdminAuthContext, AdminAuthProvider };