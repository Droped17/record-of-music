import axios from "../config/axios";
import { useEffect,useState,createContext} from "react";
import { setAccessToken, getAccessToken } from "../utils/local-storage";

export const AuthenContext = createContext(); //create context

export default function AuthenContextProvider({children}) {
  const [authStatus, setAuthStatus] = useState(null); //not login

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/authen/me")
        .then((res) => setAuthStatus(res.data.user))
        .catch((e) => console.log(e))
        .finally(() => {
          console.log("loading");
        });
    } else {
      console.log("loading");
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


  return (
    <AuthenContext.Provider value={{ authStatus,login,register }}>
      {children}
    </AuthenContext.Provider>
  );
}
