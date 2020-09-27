export const MAX_ROWS = 10;
export const MAX_COLS = 10;
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const USER_DATA = "userData";
export const USER_INFO = localStorage.getItem(USER_DATA) ? JSON.parse(localStorage.getItem(USER_DATA)||"") : undefined