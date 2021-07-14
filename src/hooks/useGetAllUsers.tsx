import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../components/type/User";
import { useMessage } from "./useMessage";

export const UseGetAllUsers = () => {
  const [allUsers, SetAllUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const getAllUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.data) {
          SetAllUsers(res.data);
        }
      })
      .catch(() => {
        showMessage({ title: "データを取得できませんでした", status: "error" });
      })
      .finally(() => setLoading(false));
  }, []);

  return { getAllUsers, allUsers, loading };
};
