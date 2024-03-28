const EMAIL_KEY = "FOR_EMAIL";

export const setEmail = (Email: string) => {
  localStorage.setItem(EMAIL_KEY, Email);
};

export const removeEmail = () => {
  localStorage.removeItem(EMAIL_KEY);
};

export const getEmail = (): string | null => {
  return localStorage.getItem(EMAIL_KEY);
};

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
