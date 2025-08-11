import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import GamingView, {type Video} from '../../Components/GamingVideoCard'; 

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

const video: Video = {
  id: 'gaming-id',
  title: 'Gaming Video Title',
  thumbnail_url: 'https://example.com/game.jpg',
  view_count: '9999',
};

describe('GamingVideoCard', () => {
  it('renders all video details', () => {
    render(
      <MemoryRouter>
        <GamingView details={video} />
      </MemoryRouter>
    );
    expect(screen.getByText('Gaming Video Title')).toBeInTheDocument();
    expect(screen.getByText(/9999 Watching Worldwide/)).toBeInTheDocument();
    expect(screen.getByAltText('game')).toHaveAttribute('src', video.thumbnail_url);
  });

  it('navigates to video details page on click', () => {
    render(
      <MemoryRouter initialEntries={["/gaming"]}>
        <Routes>
          <Route path="/gaming" element={<GamingView details={video} />} />
          <Route path="/videos/:id" element={<LocationDisplay />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('gamingVideoView'));
    expect(screen.getByTestId('location-display').textContent).toBe('/videos/gaming-id');
  });
});
