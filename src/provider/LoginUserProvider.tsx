import {
  Dispatch,
  SetStateAction,
  createContext,
  VFC,
  memo,
  ReactNode,
  useState
} from "react";

import { User } from "../components/type/User";

type LoginUserContextType = {
  loginUser: (User & { isAdmin: boolean }) | null;
  setLoginUser: Dispatch<SetStateAction<(User & { isAdmin: boolean }) | null>>;
};

type Props = {
  children: ReactNode;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider: VFC<Props> = memo((props) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<
    (User & { isAdmin: boolean }) | null
  >(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
});
