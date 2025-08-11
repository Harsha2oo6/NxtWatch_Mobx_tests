import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { runInAction } from 'mobx';
import VideoDetails from '../../Components/VideoDetails';
import { dashboard } from '../../Stores/Dashboard/dashboard';

const videoDetailsMock = {
  id: 'vid1',
  thumbnail_url: 'https://example.com/video.mp4',
  video_url:"https://example.com/video.mp4",
  title: 'Test Video',
  description: 'A test video',
  published_at: '2023-01-01',
  view_count: "100",
  channel: {
    name: 'Test Channel',
    profile_image_url: 'https://example.com/profile.jpg',
    subscriber_count: "1234",
  },
};

describe('VideoDetails', () => {
  beforeEach(() => {
    runInAction(() => {
      dashboard.videoDetails = videoDetailsMock;
    });
    dashboard.fetchVideoDetails = vi.fn();
    dashboard.isVideoSaved = vi.fn(() => false);
    dashboard.addSaved = vi.fn();
    dashboard.removeSaved = vi.fn();
  });

  it('renders loader if details are not loaded', () => {
    runInAction(() => {
      dashboard.videoDetails = null;
    });
    render(
      <MemoryRouter initialEntries={["/videos/vid1"]}>
        <Routes>
          <Route path="/videos/:id" element={<VideoDetails />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders video details', () => {
    render(
      <MemoryRouter initialEntries={["/videos/vid1"]}>
        <Routes>
          <Route path="/videos/:id" element={<VideoDetails />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('videoDetails')).toBeInTheDocument();
    expect(screen.getByText('Test Video')).toBeInTheDocument();
    expect(screen.getByText('A test video')).toBeInTheDocument();
    expect(screen.getByText('Test Channel')).toBeInTheDocument();
    expect(screen.getByText(/1234 Subscribers/)).toBeInTheDocument();
  });

  it('like/dislike/save buttons work', () => {
    render(
      <MemoryRouter initialEntries={["/videos/vid1"]}>
        <Routes>
          <Route path="/videos/:id" element={<VideoDetails />} />
        </Routes>
      </MemoryRouter>
    );
    const likeBtn = screen.getByText('Like');
    const dislikeBtn = screen.getByText('Dislike');
    const saveBtn = screen.getByText('Save');
    fireEvent.click(likeBtn);
    expect(likeBtn.parentElement?.parentElement).toHaveClass(' sc-ggWZvA icBbHB');
    fireEvent.click(dislikeBtn);
    expect(dislikeBtn.parentElement?.parentElement).toHaveClass(' sc-ggWZvA icBbHB');
    fireEvent.click(saveBtn);
    expect(dashboard.addSaved).toHaveBeenCalled();
  });
});
