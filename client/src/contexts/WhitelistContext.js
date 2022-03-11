import React, { createContext, useContext, useEffect, useReducer } from 'react';
import api from '../utils/api';
import { ERROR, SUCCESS } from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';

// ----------------------------------------------------------------------

const initialState = {
  activeWhitelist: null,
  isWhitelisted: false,
  whitelists: []
};

const handlers = {
  SET_ACTIVE_WHITELIST: (state, action) => {
    return {
      ...state,
      activeWhitelist: action.payload,
    };
  },
  SET_IS_WHITELISTED: (state, action) => {
    return {
      ...state,
      isWhitelisted: action.payload
    };
  },
  SET_WHITELISTS: (state, action) => {
    return {
      ...state,
      whitelists: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WhitelistContext = createContext({
  ...initialState,
  getActiveWhitelist: () => Promise.resolve(),
  addAddressToWhitelist: () => Promise.resolve(),
  checkAddressIsWhitelisted: () => Promise.resolve(),
  getAllWhitelists: () => Promise.resolve()
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

  //  Add an address to the active whitelist
  const addAddressToWhitelist = (address, whitelistId) => {
    api.post('/whitelist/addAddressToWhitelist', { address, whitelistId })
      .then(response => {
        openAlert({
          severity: SUCCESS,
          message: response.data
        });
      })
      .catch(error => {
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
      });
  };

  //  Check the current account is whitelisted
  const checkAddressIsWhitelisted = (address) => {
    const whitelistId = state.activeWhitelist.id_whitelist;
    api.post('/whitelist/checkAddressIsWhitelisted', { address, whitelistId })
      .then(response => {
        dispatch({
          type: 'SET_IS_WHITELISTED',
          payload: response.data
        });
      })
      .catch(error => {
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
        dispatch({
          type: 'SET_IS_WHITELISTED',
          payload: false
        });
      });
  };

  //  Get all whitelists
  const getAllWhitelists = () => {
    api.get('/whitelist/getAllWhitelists')
      .then(response => {
        dispatch({
          type: 'SET_WHITELISTS',
          payload: response.data
        });
      })
      .catch(error => {
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
        dispatch({
          type: 'SET_WHITELISTS',
          payload: []
        });
      });
  };

  useEffect(() => {
    getActiveWhitelist();
  }, []);

  return (
    <WhitelistContext.Provider
      value={{
        ...state,
        getActiveWhitelist,
        addAddressToWhitelist,
        checkAddressIsWhitelisted,
        getAllWhitelists
      }}
    >
      {children}
    </WhitelistContext.Provider>
  );
}

export { WhitelistContext, WhitelistProvider };