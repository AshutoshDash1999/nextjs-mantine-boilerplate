import Cookies from "js-cookie";

const TOKEN_KEY = "access_token";

/**
 * Retrieves the access token from cookies.
 *
 * @returns {string | undefined} The access token if it exists, otherwise undefined.
 */
export const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

/**
 * Securely sets the access token in cookies.
 * Sets the cookie with `SameSite=Strict` and `Secure` (based on environment).
 *
 * @param {string} token - The access token to be stored.
 * @param {number} [expires=7] - Optional expiration in days (default 7 days).
 */
export const setToken = (token: string, expires: number = 7): void => {
  Cookies.set(TOKEN_KEY, token, {
    expires: expires,
    secure: process.env.NODE_ENV === "production", // Ensure secure flag in production
    sameSite: "Strict",
  });
};

/**
 * Removes the access token from cookies.
 */
export const removeToken = (): void => {
  Cookies.remove(TOKEN_KEY);
};

/**
 * Clears all cookies associated with the current domain.
 */
export const clearAllCookies = (): void => {
  const allCookies = Cookies.get();
  Object.keys(allCookies).forEach((cookieName) => {
    Cookies.remove(cookieName);
  });
};
