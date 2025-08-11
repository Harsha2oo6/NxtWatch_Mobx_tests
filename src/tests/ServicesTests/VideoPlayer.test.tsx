import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import VideoPlayer from '../../Services/VideoPlayer';

describe('VideoPlayer', () => {
  it('renders a video element with the correct src', () => {
    render(<VideoPlayer url="https://example.com/video.mp4" />);
    const videoEl = document.querySelector('video');
    expect(videoEl).toBeTruthy();
    expect(videoEl?.getAttribute('src')).toBe('https://example.com/video.mp4');
  });
});
