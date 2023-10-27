import styled from "styled-components";

const COLORS = {
  primaryText: "#FFFFFF",
  secondaryText: "#B3B3B3",
  backgroundDark: "#121212",
  spotifyGreen: "#1DB954",
  cardBackground: "#181818",
  borderColor: "#282828"
};

export const AppContainer = styled.div<{ hasTracks?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.backgroundDark};
  font-family: "Roboto", sans-serif;
  padding: 0.2rem 1rem;
  min-height: ${(props) => (props.hasTracks ? "100vh" : "auto")};
`;

export const SearchBox = styled.div`
  max-width: 600px;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 0.8rem 1rem;
    padding-left: 2.5rem;
    border-radius: 20px;
    background-color: ${COLORS.cardBackground};
    border: 1px solid ${COLORS.borderColor};
    color: ${COLORS.primaryText};
    transition: box-shadow 0.2s;
    outline: none;
    font-size: 1rem;

    &:focus {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
  &:before {
    content: "🔍";
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: ${COLORS.secondaryText};
  }
`;

export const SearchResultsList = styled.div`
  position: absolute;
  width: 600px;
  background-color: ${COLORS.cardBackground};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
`;

export const SearchResult = styled.div`
  width: 600px;
`;

export const TrackItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: ${COLORS.cardBackground};
  border-radius: 10px;
  transition:
    box-shadow 0.2s,
    transform 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const TrackDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const TrackNameArtist = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
  color: ${COLORS.primaryText};
`;

export const ArtistNames = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: ${COLORS.secondaryText};
`;

export const TrackImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
