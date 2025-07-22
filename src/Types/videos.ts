 export type Channel = {
  name: string;
  profile_image_url: string;
};

 export type Video = {
  id: string;
  title: string;
  thumbnail_url: string;
  channel: Channel;
  view_count: string;
  published_at: string;
};