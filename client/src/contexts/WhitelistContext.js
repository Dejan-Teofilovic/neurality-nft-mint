import React, { createContext, useContext, useEffect, useReducer } from 'react';
import api from '../utils/api';
import { ERROR, SUCCESS } from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';

// ----------------------------------------------------------------------

const initialState = {
  registerAvailableWhitelist: null,
  mintAvailableWhitelist: null,
  isWhitelisted: false,
  whitelists: []
};

const handlers = {
  SET_REGISTER_AVAILBLE_WHITELIST: (state, action) => {
    return {
      ...state,
      registerAvailableWhitelist: action.payload,
    };
  },
  SET_MINT_AVAILBLE_WHITELIST: (state, action) => {
    return {
      ...state,
      mintAvailableWhitelist: action.payload,
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
  getRegisterAvailableWhitelist: () => Promise.resolve(),
  getMintAvailableWhitelist: () => Promise.resolve(),
  addAddressToWhitelist: () => Promise.resolve(),
  checkAddressIsWhitelisted: () => Promise.resolve(),
  getAllWhitelists: () => Promise.resolve(),
  activeRegisterAvailableByWhitelistId: () => Promise.resolve(),
  activeMintAvailableByWhitelistId: () => Promise.resolve()
});

//  Provider
function WhitelistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);

  //  Get whitelist that is registerable
  const getRegisterAvailableWhitelist = () => {
    api.get('/whitelist/getRegisterAvailableWhitelist')
      .then(response => {
        if (response.data.length > 0) {
          dispatch({
            type: 'SET_REGISTER_AVAILBLE_WHITELIST',
            payload: response.data[0]
          });
        } else {
          dispatch({
            type: 'SET_REGISTER_AVAILBLE_WHITELIST',
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
          type: 'SET_REGISTER_AVAILBLE_WHITELIST',
          payload: null
        });
      });
  };

  //  Get whitelist that is mintable
  const getMintAvailableWhitelist = () => {
    api.get('/whitelist/getMintAvailableWhitelist')
      .then(response => {
        if (response.data.length > 0) {
          dispatch({
            type: 'SET_MINT_AVAILBLE_WHITELIST',
            payload: response.data[0]
          });
        } else {
          dispatch({
            type: 'SET_MINT_AVAILBLE_WHITELIST',
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
          type: 'SET_MINT_AVAILBLE_WHITELIST',
          payload: null
        });
      });
  };

  //  Add an address to the active whitelist
  const addAddressToWhitelist = (address, whitelistId) => {
    api.post('/whitelist/addAddressToWhitelist', { address, whitelistId })
      .then(response => {
        dispatch({
          type: 'SET_IS_WHITELISTED',
          payload: true
        });
        openAlert({
          severity: SUCCESS,
          message: response.data
        });
      })
      .catch(error => {
        if (error.response.status === 406 || error.response.status === 404) {
          dispatch({
            type: 'SET_REGISTER_AVAILBLE_WHITELIST',
            payload: null
          });
        }
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
      });
  };

  //  Check the current account is whitelisted
  const checkAddressIsWhitelisted = (address) => {
    api.post('/whitelist', { address })
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

  //  Make a whitelist registerable
  const activeRegisterAvailableByWhitelistId = (whitelistId = null) => {
    let uri = '/whitelist/activeRegisterAvailableByWhitelistId';

    if (whitelistId) {
      uri += `/${whitelistId}`;
    }

    api.put(uri)
      .then(response => {
        dispatch({
          type: 'SET_REGISTER_AVAILBLE_WHITELIST',
          payload: response.data
        });
        openAlert({
          severity: SUCCESS,
          message: 'Success!'
        });
      })
      .catch(error => {
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
        dispatch({
          type: 'SET_REGISTER_AVAILBLE_WHITELIST',
          payload: null
        });
      });
  };

  //  Make a whitelist mintable
  const activeMintAvailableByWhitelistId = (whitelistId = null) => {
    let uri = '/whitelist/activeMintAvailableByWhitelistId';

    if (whitelistId) {
      uri += `/${whitelistId}`;
    }

    api.put(uri)
      .then(response => {
        dispatch({
          type: 'SET_MINT_AVAILBLE_WHITELIST',
          payload: response.data
        });
        openAlert({
          severity: SUCCESS,
          message: 'Success!'
        });
      })
      .catch(error => {
        openAlert({
          severity: ERROR,
          message: error.response.data
        });
        dispatch({
          type: 'SET_MINT_AVAILBLE_WHITELIST',
          payload: null
        });
      });
  };

  useEffect(() => {
    getRegisterAvailableWhitelist();
    getMintAvailableWhitelist();
  }, []);

  return (
    <WhitelistContext.Provider
      value={{
        ...state,
        getRegisterAvailableWhitelist,
        getMintAvailableWhitelist,
        addAddressToWhitelist,
        checkAddressIsWhitelisted,
        getAllWhitelists,
        activeRegisterAvailableByWhitelistId,
        activeMintAvailableByWhitelistId
      }}
    >
      {children}
    </WhitelistContext.Provider>
  );
}

export { WhitelistContext, WhitelistProvider };