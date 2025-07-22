import { GamingIcon, HomeIcon, SavedIcon, TrendingIcon } from "../Common/Icons";
import Gaming from "../Components/Gaming";
import Home from "../Components/Home";
import NopageFound from "../Common/NoPageFound";
import SavedVideos from "../Components/SavedVideos";
import Trending from "../Components/Trending";
import VideoDetails from "../Components/VideoDetails";

export const HomePath = "/";
export const LoginPath = "/login";
export const TrendingPath = "/trending";
export const GamingPath = "/gaming";
export const SavedPath = "/saved";
export const VideoDetailsPath = "/videos/:id";
export const NopageFoundPath='*';

import type { ReactNode } from "react";

export const PathArray = [
  {
    path: HomePath,
    name:"Home",
    component: <Home />,
    icon:<HomeIcon/>
  },
  {
    path: TrendingPath,
    name:"Trending",
    component: <Trending />,
    icon:<TrendingIcon/>
  },
  {
    path: GamingPath,
    name:"Gaming",
    component: <Gaming />,
    icon:<GamingIcon/>
  },
  {
    path: SavedPath,
    name:"Saved Videos",
    component: <SavedVideos />,
    icon:<SavedIcon/>
  },
  {
    path: VideoDetailsPath,
    name:"VideoDetails",
    component: <VideoDetails />,
    icon:null
  },
  {
    path:NopageFoundPath,
    name:"Nopagefound",
    component:<NopageFound/>,
    icon:null
  }
];
export type NavItem = {
  path: string;
  name: string;
  component: ReactNode;
  icon: ReactNode;
};
export const navItems = PathArray.filter(item => item.icon);
