import { ReactNode, createContext, useState } from "react";

type AuthContextType = {
  auth: AuthUserType | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthUserType | null>>;
};

type AuthUserType = {
  email: string;
  password: string;
  accesToken: string;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<AuthUserType | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
