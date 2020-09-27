export const MAX_ROWS = 10;
export const MAX_COLS = 10;
export const ACCESS_TOKEN = "user";
export const ACCESS_INFO = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(ACCESS_TOKEN))));
// alert(JSON.stringify(localStorage.getItem(ACCESS_TOKEN)))
console.log(ACCESS_INFO)
export const USER_DATA = "userData";
export const USER_INFO = localStorage.getItem(USER_DATA) ? JSON.parse(localStorage.getItem(USER_DATA)||"") : undefined
