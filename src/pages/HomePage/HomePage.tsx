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
  TrackImage,
  LoadingMessage,
  ContentContainer,
  DetailText,
  Heading
} from "./HomePageStyles";

const HomePage: FC = (): ReactElement => {
  const accessToken = useSelector(authSelectors.getAccessToken);

  const { data } = useGetUserQuery(undefined, {
    skip: !accessToken
  });

  const { data: playlistsData } = useGetPlaylistsQuery(undefined, {
    skip: !accessToken
  });
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

  const {
    data: tracksData,
    isLoading: tracksLoading,
    isError: tracksError
  } = useGetPlaylistTracksQuery(selectedPlaylistId || "", {
    skip: !selectedPlaylistId || !accessToken
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
            <ContentContainer>
              <Heading>Tracks in Playlist:</Heading>
              {(tracksData as any).items.map((trackItem: any) => (
                <PlaylistTrackItem key={trackItem.track.id}>
                  <TrackImage
                    src={trackItem.track.album.images[0]?.url}
                    alt={`Cover of ${trackItem.track.name}`}
                  />
                  <TrackDetails>
                    <TrackName>{trackItem.track.name}</TrackName>
                    <AlbumName>
                      Album: <DetailText>{trackItem.track.album.name}</DetailText>
                    </AlbumName>
                    <ReleaseDate>
                      Release Date: <DetailText>{trackItem.track.album.release_date}</DetailText>
                    </ReleaseDate>
                  </TrackDetails>
                </PlaylistTrackItem>
              ))}
            </ContentContainer>
          )}
          {tracksLoading && <LoadingMessage>Loading tracks...</LoadingMessage>}
          {tracksError && <LoadingMessage>Error loading tracks.</LoadingMessage>}
        </>
      )}
    </AppContainer>
  );
};
export default HomePage;
