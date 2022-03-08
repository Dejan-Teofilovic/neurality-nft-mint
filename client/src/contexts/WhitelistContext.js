import React, { createContext, useContext, useEffect, useReducer } from 'react';
import api from '../utils/api';
import { ERROR } from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';

// ----------------------------------------------------------------------

const initialState = {
  activeWhitelist: null
};

const handlers = {
  SET_ACTIVE_WHITELIST: (state, action) => {
    return {
      ...state,
      activeWhitelist: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WhitelistContext = createContext({
  ...initialState,
  getActiveWhitelist: () => Promise.resolve(),
  addAddressToWhitelist: () => Promise.resolve()
});

//  Provider
function WhitelistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);

  //  Get active whitelist
  const getActiveWhitelist = () => {
    api.get('/whitelist/getActiveWhitelist')
      .then(response => {
        if (response.data.length > 0) {
          dispatch({
            type: 'SET_ACTIVE_WHITELIST',
            payload: response.data[0]
          });
        } else {
          dispatch({
            type: 'SET_ACTIVE_WHITELIST',
            payload: null
          });
        }
      })
      .catch(error => {
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
        dispatch({
          type: 'SET_ACTIVE_WHITELIST',
          payload: null
        });
      });
  };

  const addAddressToWhitelist = (address, whitelistId) => {

  };

  useEffect(() => {
    getActiveWhitelist();
  }, []);

  return (
    <WhitelistContext.Provider
      value={{
        ...state,
        getActiveWhitelist,
        addAddressToWhitelist
      }}
    >
      {children}
    </WhitelistContext.Provider>
  );
}

export { WhitelistContext, WhitelistProvider };