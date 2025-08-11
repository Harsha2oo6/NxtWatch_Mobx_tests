import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loginStore } from '../../Stores/LoginStore/loginstore';
import Cookies from 'js-cookie';

vi.mock('js-cookie');

beforeEach(() => {
  loginStore.token = '';
  loginStore.username = '';
  loginStore.error = '';
  loginStore.showPassword = false;
  (Cookies.set as any).mockClear();
  (Cookies.remove as any).mockClear();
});

describe('LoginStore', () => {
  it('toggles show password', () => {
    expect(loginStore.showPassword).toBe(false);
    loginStore.toggleShowPassword();
    expect(loginStore.showPassword).toBe(true);
  });

  it('sets and gets token', () => {
    loginStore.token = 'abc';
    expect(loginStore.getToken()).toBe('abc');
  });

  it('logout clears token and username', () => {
    loginStore.token = 'abc';
    loginStore.username = 'user';
    loginStore.logout();
    expect(loginStore.token).toBe('');
    expect(loginStore.username).toBe('');
    expect(Cookies.remove).toHaveBeenCalledWith('jwt_token');
    expect(Cookies.remove).toHaveBeenCalledWith('username');
  });
});
