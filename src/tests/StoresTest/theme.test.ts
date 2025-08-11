import { describe, it, expect, beforeEach } from 'vitest';
import { themeStore } from '../../Stores/ThemeStore/themeStore';

describe('ThemeStore', () => {
  beforeEach(() => {
    localStorage.clear();
    themeStore.theme = 'light';
  });

  it('toggles theme mode', () => {
    expect(themeStore.theme).toBe('light');
    themeStore.toggleMode();
    expect(themeStore.theme).toBe('dark');
    themeStore.toggleMode();
    expect(themeStore.theme).toBe('light');
  });

  it('isDark getter works', () => {
    themeStore.theme = 'dark';
    expect(themeStore.isDark).toBe(true);
    themeStore.theme = 'light';
    expect(themeStore.isDark).toBe(false);
  });

  it('themeMode getter works', () => {
    themeStore.theme = 'dark';
    expect(themeStore.themeMode).toBe('dark');
    themeStore.theme = 'light';
    expect(themeStore.themeMode).toBe('light');
  });
});
