import { Navigate } from 'react-router-dom';
import { useAuthen } from '../hooks/use-auth';

export default function Authenticated({children}){
    const { authStatus } = useAuthen();
    // console.log(authStatus);

    if (!authStatus) {
        return <Navigate to="/login"></Navigate>
    }


    return children;
}