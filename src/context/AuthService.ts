const TOKEN_KEY = "FOR_TOKEN";

export const setAccessToken = (Token: string) => {
  localStorage.setItem(TOKEN_KEY, Token);
};

export const removeAccessToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};
