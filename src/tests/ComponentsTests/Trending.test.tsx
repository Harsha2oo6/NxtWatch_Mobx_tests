import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { runInAction } from 'mobx';
import Trending, { RenderTrendingVideos } from '../../Components/Trending';
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
    dashboard.isTrendingLoading = false;
    dashboard.trendingError = '';
    dashboard.trendingVideosArray = [mockVideo];
  });
  dashboard.fetchTrendingVideos = vi.fn();
});

describe('Trending Component', () => {
  it('renders RouteHeader and TrendingVideos', () => {
    render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>
    );
    expect(screen.getByText('Trending')).toBeInTheDocument();
    expect(screen.getByTestId('trending')).toBeInTheDocument();
  });
});

describe('RenderTrendingVideos', () => {
  it('shows Loader when loading', () => {
    runInAction(() => {
      dashboard.isTrendingLoading = true;
    });
    render(
      <MemoryRouter>
        <RenderTrendingVideos />
      </MemoryRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('shows FailurePage on error', () => {
    runInAction(() => {
      dashboard.isTrendingLoading = false;
      dashboard.trendingError = 'error';
    });
    render(
      <MemoryRouter>
        <RenderTrendingVideos />
      </MemoryRouter>
    );
    expect(screen.getByText(/retry/i)).toBeInTheDocument();
  });

  it('renders TrendingVideoCard for each video', () => {
    runInAction(() => {
      dashboard.trendingError = '';
      dashboard.trendingVideosArray = [mockVideo];
    });
    render(
      <MemoryRouter>
        <RenderTrendingVideos />
      </MemoryRouter>
    );
    expect(screen.getByTestId('trendingvideotitle')).toBeInTheDocument();
  });
});
