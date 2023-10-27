import React from "react";
import { MainContainer, DropdownSelect, Header, NoPlaylistsMessage } from "./PlaylistsStyles";

interface Playlist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: { url: string }[];
}

interface UserPlaylistsProps {
  playlists: Playlist[];
  onSelect: (id: string | null) => void;
}

const UserPlaylists: React.FC<UserPlaylistsProps> = ({ playlists, onSelect }) => {
  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    onSelect(selectedId === "none" ? null : selectedId);
  };

  return (
    <MainContainer>
      <Header>Select Your Playlist:</Header>
      {playlists.length ? (
        <DropdownSelect onChange={handleSelectionChange} defaultValue="none">
          <option value="none" disabled hidden>
            Choose a playlist...
          </option>
          {playlists.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </DropdownSelect>
      ) : (
        <NoPlaylistsMessage>No playlists found. Please add some on Spotify!</NoPlaylistsMessage>
      )}
    </MainContainer>
  );
};

export default UserPlaylists;
