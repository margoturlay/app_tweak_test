export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export type User = {
  display_name: string;
  email: string;
  id: string;
  images: SpotifyImage[];
  type: string;
  uri: string;
};

export type SpotifyArtist = {
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type SpotifyAlbum = {
  album_type: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  artists: SpotifyArtist[];
};

export type SpotifyTrack = {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  duration_ms: number;
  explicit: boolean;
  id: string;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type SpotifyTrackItem = {
  added_at: Date;
  track: SpotifyTrack;
};

export type SpotifyPlaylist = {
  id: string;
  name: string;
  description: string;
  images: SpotifyImage[];
  owner: User;
  tracks: {
    total: number;
    items: SpotifyTrackItem[];
  };
  public: boolean;
};
