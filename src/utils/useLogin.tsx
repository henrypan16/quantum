import { useState } from "react";
import { useMutation } from "react-query";
import { TorrClient } from "./TorrClient";

export const CredsLocalStorageKey = "iqbit_creds";
export const loginPOSTKey = "loginPOST";

export const useLogin = (props?: { onLogin?: () => void }) => {
  const [formError, setFormError] = useState<string>("");
  const [retryAttempt, setRetryAttempt] = useState(false);

  const [localCreds, setLocalCreds] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (username: string, password: string) => {
    try {
      const data = await TorrClient.login({ username, password });
      if (data === "Ok.") {
        setLocalCreds({
          username,
          password,
        });
        props?.onLogin && props?.onLogin();
      } else {
        setFormError("Login Unauthorized");
      }
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setFormError(e.message);
      if (!retryAttempt && localCreds.username && localCreds.password) {
        setRetryAttempt(true);
        handleLogin(localCreds.username, localCreds.password);
      }
    }
  };

  // const { mutate: handleLogin } = useMutation(
  //   loginPOSTKey,
  //   ({ username, password }: { username: string; password: string }) =>
  //     TorrClient.login({ username, password }),
  //   {
  //     onSuccess: ({ data }, { username, password }) => {
  //       if (data === "Ok.") {
  //         setLocalCreds({
  //           username,
  //           password,
  //         });
  //         props?.onLogin && props?.onLogin();
  //       } else {
  //         setFormError("Login Unauthorized");
  //       }
  //     },
  //     onError: ({ message }) => {
  //       setFormError(message);
  //       if (!retryAttempt && localCreds.username && localCreds.password) {
  //         setRetryAttempt(true);
  //         handleLogin({
  //           username: localCreds.username,
  //           password: localCreds.password,
  //         });
  //       }
  //     },
  //   }
  // );

  return {
    formError,
    localCreds,
    handleLogin,
  };
};
