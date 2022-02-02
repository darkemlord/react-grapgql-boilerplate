import { TOKEN } from './constants';

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token)
}
