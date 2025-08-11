import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { runInAction } from 'mobx';
import Home, { RenderHomeVideos } from '../../Components/Home';
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
    dashboard.isHomeLoading = false;
    dashboard.homeError = '';
    dashboard.homeVideosArray = [mockVideo];
    dashboard.searchQuery = '';
  });
  dashboard.fetchHomeVideos = vi.fn();
  dashboard.setSearchQuery = vi.fn();
});

describe('Home Component', () => {
  it('renders Advertisement and Search', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByTestId('searchbutton')).toBeInTheDocument();
  });

  it('calls setSearchQuery on input change', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'test' } });
    expect(dashboard.setSearchQuery).toHaveBeenCalledWith('test');
  });

  it('calls fetchHomeVideos on search button click', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('searchbutton'));
    expect(dashboard.fetchHomeVideos).toHaveBeenCalledWith(true);
  });
});

describe('RenderHomeVideos', () => {
  it('shows Loader when loading', () => {
    runInAction(() => {
      dashboard.isHomeLoading = true;
    });
    render(
      <MemoryRouter>
        <RenderHomeVideos />
      </MemoryRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('shows FailurePage on error', () => {
    runInAction(() => {
      dashboard.isHomeLoading = false;
      dashboard.homeError = 'error';
    });
    render(
      <MemoryRouter>
        <RenderHomeVideos />
      </MemoryRouter>
    );
    expect(screen.getByText(/retry/i)).toBeInTheDocument();
  });

  it('shows NoVideosFound when no videos', () => {
    runInAction(() => {
      dashboard.homeError = '';
      dashboard.homeVideosArray = [];
    });
    render(
      <MemoryRouter>
        <RenderHomeVideos />
      </MemoryRouter>
    );
    expect(screen.getByText(/retry/i)).toBeInTheDocument();
  });

  it('renders HomeVideoCard for each video', () => {
    runInAction(() => {
      dashboard.homeVideosArray = [mockVideo];
    });
    render(
      <MemoryRouter>
        <RenderHomeVideos />
      </MemoryRouter>
    );
    expect(screen.getByTestId('homevideotitle')).toBeInTheDocument();
  });
});
