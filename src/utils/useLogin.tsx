import { useState } from "react";
import { TorrClient } from "./TorrClient";

export const CredsLocalStorageKey = "iqbit_creds";
export const loginPOSTKey = "loginPOST";

export const useLogin = () => {
  const [formError, setFormError] = useState<string>("");
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  

  const handleLogin = async (username: string, password: string) => {
      await TorrClient.login({ username: username, password: password})
      await TorrClient.getVersion().then((response) => {
          if(response.ok) 
            setIsLoggedin(true);
          else {
            setFormError("Invalid credentials");
          }
        });
 };

  return {
    handleLogin,
    formError,
    isLoggedin
  };
};
