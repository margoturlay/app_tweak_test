import React, { useState, useEffect } from "react";
import { useGetSearchTrackResultQuery } from "../../api/apiSlice";
import {
  AppContainer,
  SearchBox,
  SearchResult,
  TrackItem,
  TrackDetails,
  TrackName,
  ArtistNames,
  TrackImage,
  TrackNameArtist,
  SearchResultsList
} from "./SearchCompnentStyles";

import { useSelector } from "react-redux";
import { authSelectors } from "../../containers/auth/selectors";

const debounce = (func: (...args: any[]) => void, delay: number): ((...args: any[]) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const SearchComponent: React.FC = () => {
  const accessToken = useSelector(authSelectors.getAccessToken);
  const [searchInput, setSearchInput] = useState<string>("");
  const { data: searchTrackData, isLoading } = useGetSearchTrackResultQuery(searchInput, {
    skip: !searchInput || !accessToken
  });

  useEffect(() => {
    console.log("searchInput has changed:", searchInput);
  }, [searchInput]);

  if (isLoading) return <p>Loading...</p>;

  const debouncedSearch = debounce((value) => {
    setSearchInput(value);
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSearch(value);
  };

  return (
    <AppContainer>
      <SearchBox>
        <input type="text" onChange={handleInputChange} placeholder="Search for a track..." />
        <SearchResultsList>
          {searchInput.length > 0 && (
            <SearchResult>
              {searchTrackData?.slice(0, 5).map(
                (trackItem) =>
                  (trackItem as any).name && (
                    <TrackItem key={(trackItem as any).id}>
                      <TrackDetails>
                        <TrackImage
                          src={(trackItem as any).album.images[0].url}
                          alt="Track Image"
                        />
                        <TrackNameArtist>
                          <TrackName>{(trackItem as any).name}</TrackName>
                          <ArtistNames>
                            {(trackItem as any).artists.map((artist: any, index: number) => (
                              <span key={artist.id}>
                                {artist.name}
                                {index !== (trackItem as any).artists.length - 1 && ", "}
                              </span>
                            ))}
                          </ArtistNames>
                        </TrackNameArtist>
                      </TrackDetails>
                    </TrackItem>
                  )
              )}
            </SearchResult>
          )}
        </SearchResultsList>
      </SearchBox>
    </AppContainer>
  );
};

export default SearchComponent;
