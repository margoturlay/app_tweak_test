import React, { useState, FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import UserProfile from "../../components/UserProfile/UserProfile";
import UserPlaylists from "../../components/Playlists/Playlists";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { authSelectors } from "../../containers/auth/selectors";
import {
  useGetUserQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery
} from "../../api/apiSlice";
import {
  AppContainer,
  PlaylistTrackItem,
  TrackDetails,
  TrackName,
  AlbumName,
  ReleaseDate,
  TrackImage
} from "./HomePageStyles";

const HomePage: FC = (): ReactElement => {
  const accessToken = useSelector(authSelectors.getAccessToken);

  useGetUserQuery(undefined, {
    skip: !accessToken
  });

  const { data: playlistsData } = useGetPlaylistsQuery();

  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

  const {
    data: tracksData,
    isLoading: tracksLoading,
    isError: tracksError
  } = useGetPlaylistTracksQuery(selectedPlaylistId || "", {
    skip: !selectedPlaylistId
  });

  const handlePlaylistSelect = (playlistId: string | null) => {
    if (selectedPlaylistId === playlistId) {
      setSelectedPlaylistId(null);
    } else {
      setSelectedPlaylistId(playlistId);
    }
  };

  return (
    <AppContainer>
      <UserProfile />
      <SearchComponent />
      <UserPlaylists
        playlists={(playlistsData as any)?.items || []}
        onSelect={handlePlaylistSelect}
      />
      {selectedPlaylistId && (
        <>
          {tracksData && !tracksError && (
            <div>
              <h2>Tracks in Playlist:</h2>
              {(tracksData as any).items.map((trackItem: any) => (
                <PlaylistTrackItem key={trackItem.track.id}>
                  <TrackImage
                    src={trackItem.track.album.images[0]?.url}
                    alt={`Cover of ${trackItem.track.name}`}
                  />
                  <TrackDetails>
                    <TrackName>{trackItem.track.name}</TrackName>
                    <AlbumName>Album: {trackItem.track.album.name}</AlbumName>
                    <ReleaseDate>{trackItem.track.album.release_date}</ReleaseDate>
                  </TrackDetails>
                </PlaylistTrackItem>
              ))}
            </div>
          )}
          {tracksLoading && <p>Loading tracks...</p>}
          {tracksError && <p>Error loading tracks.</p>}
        </>
      )}
    </AppContainer>
  );
};

export default HomePage;
