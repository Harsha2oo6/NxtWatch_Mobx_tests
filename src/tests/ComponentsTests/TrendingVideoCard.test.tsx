import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import TrendingVideoCard from '../../Components/TrendingVideoCard';
import { type Video } from '../../Types/videos';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe('TrendingVideoCard', () => {
  const video: Video = {
    id: 'trending-id',
    channel: { name: 'Trending Channel', profile_image_url: 'https://example.com/profile.jpg' },
    published_at: '2023-01-01',
    thumbnail_url: 'https://example.com/thumb.jpg',
    title: 'Trending Video',
    view_count: "2",
  };
  it('renders all video details', () => {
    render(
      <MemoryRouter>
        <TrendingVideoCard details={video} />
      </MemoryRouter>
    );
    expect(screen.getByText('Trending Video')).toBeInTheDocument();
    expect(screen.getByText('Trending Channel')).toBeInTheDocument();
    expect(screen.getByText(/2 Views/)).toBeInTheDocument();
    expect(screen.getByAltText('thumbnail')).toHaveAttribute('src', video.thumbnail_url);
    expect(screen.getByAltText('channel profile')).toHaveAttribute('src', video.channel.profile_image_url);
    expect(screen.getByTestId('trendingvideopublishedduration')).toBeInTheDocument();
  });

  it('navigates to video details page on click', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<TrendingVideoCard details={video} />} />
          <Route path="/videos/:id" element={<LocationDisplay />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('trendingVideoView'));
    expect(screen.getByTestId('location-display').textContent).toBe('/videos/trending-id');
  });
});
