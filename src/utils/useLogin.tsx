import { torrentApi } from "./torrentApi";
import { useMutation } from '@tanstack/react-query';
import { useState } from "react";

export const CredsLocalStorageKey = "iqbit_creds";
export const loginPOSTKey = "loginPOST";

export const useLogin = () => {
  const [localCreds, setLocalCreds] = useState({
    username: localStorage.getItem("username") ||'',
    password: localStorage.getItem("password") ||''
  })

  const mutation = useMutation({
    mutationFn: torrentApi.login,
    onSuccess: (data: Response) => {
      data.text().then((response) => {
        if(response === "Ok."){
          localStorage.setItem("username", localCreds.username);
          localStorage.setItem("password", localCreds.password);
        } else {
          localStorage.clear();
          
        }
      }).catch((error: unknown) => {
        console.log(error);
      })
    }})
  
  const handleLogin = (username: string, password: string) => {
      setLocalCreds({username, password});
      mutation.mutate({username: username, password: password});
  }

  return {
    handleLogin,
    localCreds
  }
}