const AUTH_KEY = "HEY";

export const setEmail = (Email: string) => {
  localStorage.setItem(AUTH_KEY, Email);
};

export const removeEmail = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getEmail = (): string | null => {
  return localStorage.getItem(AUTH_KEY);
};
