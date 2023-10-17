import axios from "../config/axios";
import { useEffect,useState,createContext} from "react";
import { setAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";

export const AuthenContext = createContext(); //create context

export default function AuthenContextProvider({children}) {
  const [authStatus, setAuthStatus] = useState(null); //not login

  const [loadingTime,setLoadingTime] = useState(true); //loading time


  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/authen/me")
        .then((res) => setAuthStatus(res.data.user))
        .catch((e) => console.log(e))
        .finally(() => {
          setLoadingTime(false);
        });
    } else {
      setLoadingTime(false);
    }
  }, []);

  const login = async (credential) => {
    const res = await axios.post("/authen/login", credential);
    setAccessToken(res.data.accessToken); //accessToken from back-end
    setAuthStatus(res.data.user);
  };

  const register = async(registerInputObj) => {
    const res = await axios.post("/authen/register",registerInputObj);

    setAccessToken(res.data.accessToken);
    setAuthStatus(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthStatus(null);
  }


  return (
    <AuthenContext.Provider value={{ authStatus,login,register,loadingTime,logout }}>
      {children}
    </AuthenContext.Provider>
  );
}
