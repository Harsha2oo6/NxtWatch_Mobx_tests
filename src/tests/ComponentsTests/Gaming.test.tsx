import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { runInAction } from 'mobx';
import Gaming, {RenderGamingVideos} from '../../Components/Gaming';
import { dashboard } from '../../Stores/Dashboard/dashboard';

const mockVideo = {
  id: '1',
  channel: { name: 'Channel', profile_image_url: 'https://example.com/profile.jpg' },
  published_at: '2023-01-01',
  thumbnail_url: 'https://example.com/thumb.jpg',
  title: 'Title',
  view_count: "1"
};

beforeEach(() => {
  runInAction(() => {
    dashboard.isGamingLoading = false;
    dashboard.gamingError = '';
    dashboard.gamingVideosArray = [mockVideo];
  });
  dashboard.fetchGamingVideos = vi.fn();
});

describe('Gaming Component', () => {
  it('renders RouteHeader and GamingVideos', () => {
    render(
      <MemoryRouter>
        <Gaming />
      </MemoryRouter>
    );
    expect(screen.getByText('Gaming')).toBeInTheDocument();
    expect(screen.getByTestId('gaming')).toBeInTheDocument();
  });
});

describe('RenderGamingVideos', () => {
  it('shows Loader when loading', () => {
    runInAction(() => {
      dashboard.isGamingLoading = true;
    });
    render(
      <MemoryRouter>
        <RenderGamingVideos />
      </MemoryRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('shows FailurePage on error', () => {
    runInAction(() => {
      dashboard.isGamingLoading = false;
      dashboard.gamingError = 'error';
    });
    render(
      <MemoryRouter>
        <RenderGamingVideos />
      </MemoryRouter>
    );
    expect(screen.getByText(/retry/i)).toBeInTheDocument();
  });

  it('renders GamingVideoCard for each video', () => {
    runInAction(() => {
      dashboard.gamingError = '';
      dashboard.gamingVideosArray = [mockVideo];
    });
    render(
      <MemoryRouter>
        <RenderGamingVideos />
      </MemoryRouter>
    );
    expect(screen.getByTestId('gamingvideotitle')).toBeInTheDocument();
  });
});
