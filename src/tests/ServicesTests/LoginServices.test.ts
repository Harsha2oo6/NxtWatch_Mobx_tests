import { describe, it, expect, vi } from 'vitest';
import { LoginService } from '../../Services/LoginServices';

global.fetch = vi.fn();

describe('LoginService', () => {
  it('returns response on ok', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: 'abc' }),
    });
    const result = await LoginService({ username: 'u', password: 'p' });
    expect(result).toEqual({ token: 'abc' });
  });

  it('throws error on not ok', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'fail' }),
    });
    await expect(LoginService({ username: 'u', password: 'p' })).rejects.toEqual({ error: 'fail' });
  });
});
