import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../components/type/User";
import { useMessage } from "../hooks/useMessage";
import { LoginUserContext } from "../provider/LoginUserProvider";

export const useLogin = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useContext(LoginUserContext);

  const getUser = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
            showMessage({ title: "ログインしました", status: "success" });
            const loginUser: User & { isAdmin: boolean } = {
              ...res.data,
              isAdmin: res.data.id === 10
            };
            setLoginUser(loginUser);
            console.log(loginUser.isAdmin);
          }
        })
        .catch(() =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    [history, setLoginUser]
  );

  return { getUser, loading };
};
