import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomeVideoCard from '../../Components/HomeVideoCard';
import { type Video } from '../../Types/videos';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe('HomeVideoCard', () => {
  const video: Video = {
    id: 'test-id',
    channel: { name: 'Test Channel', profile_image_url: 'https://example.com/profile.jpg' },
    published_at: '2023-01-01',
    thumbnail_url: 'https://example.com/thumb.jpg',
    title: 'Test Video',
    view_count: "1",
  };
  it('renders all video details', () => {
    render(
      <MemoryRouter>
        <HomeVideoCard details={video} />
      </MemoryRouter>
    );
    expect(screen.getByTestId('homevideotitle')).toHaveTextContent('Test Video');
    expect(screen.getByTestId('homevideoname')).toHaveTextContent('Test Channel');
    expect(screen.getByTestId('homevideoviewcount')).toHaveTextContent('1');
    expect(screen.getByAltText('video thumbnail')).toHaveAttribute('src', video.thumbnail_url);
    expect(screen.getByAltText('channel profile')).toHaveAttribute('src', video.channel.profile_image_url);
  });

  it('navigates to video details page on click', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomeVideoCard details={video} />} />
          <Route path="/videos/:id" element={<LocationDisplay />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('homeVideoView'));
    expect(screen.getByTestId('location-display').textContent).toBe('/videos/test-id');
  });
});
