import { torrentApi } from "./torrentApi";
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState, useEffect } from "react";


export const useAuth = () => {
  const [user, setUser] = useState({
    username: localStorage.getItem("username") ||'',
    password: localStorage.getItem("password") ||''
  })
  const [status, setStatus] = useState(false);
  
  useEffect(() => {
    mutation.mutate({username: user.username, password: user.password});
    setStatus(user.username !== '' && user.password !== '');
  }, [])


  const mutation = useMutation({
    mutationFn: torrentApi.login,
    onSuccess: (data: Response) => {
      data.text().then((response) => {
        if(response === "Ok."){
          localStorage.setItem("username", user.username);
          localStorage.setItem("password", user.password);
        } else {
          localStorage.clear();
        }
      }).catch((error: unknown) => {
        console.log(error);
      })
    }})

  const login = (username: string, password: string) => {
      setUser({username, password});
      mutation.mutate({username: username, password: password});
      if(mutation.isSuccess) {
        return true;
      }
  }

  return {
    login,
    user,
    status,
  }
}