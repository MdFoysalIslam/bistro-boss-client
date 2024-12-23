// @flow strict

import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";



function useAuth() {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;