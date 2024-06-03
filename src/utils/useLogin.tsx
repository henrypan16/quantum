import { useState } from "react";
import { TorrClient } from "./TorrClient";

export const CredsLocalStorageKey = "iqbit_creds";
export const loginPOSTKey = "loginPOST";

export const useLogin = () => {
  const [formError, setFormError] = useState<string>("");

  const [localCreds, setLocalCreds] = useState({
    username: window.localStorage.getItem("username"),
    password: window.localStorage.getItem("password")
  });
  
  const handleLogin = async (username: string, password: string) => {
      await TorrClient.login({ username: username, password: password})
        .then((response) => response.text())
        .then(data => {
          if(data == 'Ok.') {
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("password", password);
            setLocalCreds({username: username, password: password});
          } else {
            setFormError("Invalid credentials");
          }
        });
 };

  return {
    handleLogin,
    formError,
    localCreds
  };
};
