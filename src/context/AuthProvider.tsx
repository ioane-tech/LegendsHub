import { ReactNode, createContext, useState } from "react";

type AuthContextType = {
  auth: string | null;
  setAuth: React.Dispatch<React.SetStateAction<string | null>>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
