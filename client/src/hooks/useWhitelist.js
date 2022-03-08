import { useContext } from 'react';
import { WhitelistContext } from '../contexts/WhitelistContext';

const useWhitelist = () => useContext(WhitelistContext);

export default useWhitelist;