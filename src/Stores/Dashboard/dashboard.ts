import { makeAutoObservable, runInAction } from "mobx";
import {
  GamingVideosApi,
  HomeVideosApi,
  TrendingVideosApi,
  VideoDetailsApi,
} from "../../Constants/Apis";
import { FetchDetails } from "../../Services/FetchingServices";

export type Video = {
  id: string;
  title: string;
  thumbnail_url: string;
  view_count: string;
  published_at: string;
  channel: {
    name: string;
    profile_image_url: string;
  };
};

export type VideoDetails = {
  id: string;
  title: string;
  description: string;
  video_url: string;
  view_count: string;
  published_at: string;
  channel: {
    name: string;
    profile_image_url: string;
    subscriber_count: string;
  };
};

class Dashboard {
  searchQuery: string = "";

  homeVideosArray: Video[] = [];
  trendingVideosArray: Video[] = [];
  gamingVideosArray: Video[] = [];
  savedVideosArray: VideoDetails[] = [];

  videoDetails: VideoDetails | null = null;

  isHomeLoading: boolean = false;
  isTrendingLoading: boolean = false;
  isGamingLoading: boolean = false;
  isDetailsLoading: boolean = false;

  homeError: string = "";
  trendingError: string = "";
  gamingError: string = "";
  videoDetailsError: string = "";

  constructor() {
    const saved = localStorage.getItem("saved_videos");
    this.savedVideosArray = saved ? JSON.parse(saved) : [];
    makeAutoObservable(this);
  }

  setSearchQuery(inputValue: string) {
    this.searchQuery = inputValue;
  }

  addSaved() {
    if (!this.videoDetails) return;

    const exists = this.savedVideosArray.some(
      (video) => video.id === this.videoDetails!.id
    );

    if (!exists) {
      this.savedVideosArray.push(this.videoDetails);
      localStorage.setItem(
        "saved_videos",
        JSON.stringify(this.savedVideosArray)
      );
    }
  }

  removeSaved(id: string) {
    this.savedVideosArray = this.savedVideosArray.filter(
      (video) => video.id !== id
    );
    localStorage.setItem("saved_videos", JSON.stringify(this.savedVideosArray));
  }

  isVideoSaved(id: string) {
    return this.savedVideosArray.some((video) => video.id === id);
  }

  async fetchHomeVideos(force = false) {
    if (this.homeVideosArray.length > 0 && !force) return;

    this.isHomeLoading = true;
    try {
      // throw Error
      const result = await FetchDetails(`${HomeVideosApi}${this.searchQuery}`);
      runInAction(() => {
        this.homeVideosArray = result.videos ?? [];
      });
    } catch (e) {
      this.homeError = "failed";
    } finally {
      runInAction(() => {
        this.isHomeLoading = false;
      });
    }
  }

  async fetchTrendingVideos(force = false) {
    if (this.trendingVideosArray.length > 0 && !force) return;

    this.isTrendingLoading = true;
    try {
      const result = await FetchDetails(TrendingVideosApi);
      runInAction(() => {
        this.trendingVideosArray = result.videos ?? [];
      });
    } catch (e) {
      this.trendingError = "failed";
    } finally {
      runInAction(() => {
        this.isTrendingLoading = false;
      });
    }
  }

  async fetchGamingVideos(force = false) {
    if (this.gamingVideosArray.length > 0 && !force) return;

    this.isGamingLoading = true;
    try {
      const result = await FetchDetails(GamingVideosApi);
      runInAction(() => {
        this.gamingVideosArray = result.videos ?? [];
      });
    } catch (e) {
      this.gamingError = "failed";
    } finally {
      runInAction(() => {
        this.isGamingLoading = false;
      });
    }
  }

  async fetchVideoDetails(id: string) {
    if (this.videoDetails?.id === id) return; 

    this.isDetailsLoading = true;
    try {
      const result = await FetchDetails(`${VideoDetailsApi}${id}`);
      runInAction(() => {
        this.videoDetails = result.video_details ?? null;
      });
    } catch (e) {
      this.videoDetailsError = "failed";
    } finally {
      runInAction(() => {
        this.isDetailsLoading = false;
      });
    }
  }
}

export const dashboard = new Dashboard();
