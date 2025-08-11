import { describe, it, expect, vi } from 'vitest';
import { FetchDetails } from '../../Services/FetchingServices';

global.fetch = vi.fn();

describe('FetchDetails', () => {
  it('returns response on ok', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: 123 }),
    });
    const result = await FetchDetails('url');
    expect(result).toEqual({ data: 123 });
  });

  it('throws error on not ok', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'fail' }),
    });
    await expect(FetchDetails('url')).rejects.toEqual({ error: 'fail' });
  });
});
