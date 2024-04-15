import { ReactNode, createContext, useState } from "react";

type AuthContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  userInfo: userType | null;
  setUserInfo: React.Dispatch<React.SetStateAction<userType | null>>;
  team: teamType | undefined;
  setTeam: React.Dispatch<React.SetStateAction<teamType | undefined>>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<userType | null>(null);
  const [team, setTeam] = useState<teamType | undefined>(undefined);
  return (
    <AuthContext.Provider
      value={{ token, setToken, userInfo, setUserInfo, team, setTeam }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
