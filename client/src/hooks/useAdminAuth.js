import { useContext } from 'react';
import { AdminAuthContext } from '../contexts/AdminAuthContext';

const useAdminAuth = () => useContext(AdminAuthContext);

export default useAdminAuth;