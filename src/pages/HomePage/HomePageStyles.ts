import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #121212;
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 2.5rem;
  color: #ffffff;
`;

export const PlaylistTrackItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 12px 0;
  background-color: #181818;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`;
export const TrackDetails = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const TrackName = styled.span`
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
`;

export const AlbumName = styled.div`
  font-size: 15px;
  color: #b3b3b3;
  margin-top: 6px;
`;

export const ReleaseDate = styled(AlbumName)`
  font-style: italic;
`;

export const TrackImage = styled.img`
  max-width: 90px;
  border-radius: 6px;
`;

export const LoadingMessage = styled.p`
  text-align: center;
`;

export const ContentContainer = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const DetailText = styled.span`
  color: #a9a9a9;
  font-weight: 500;
`;

export const Heading = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 15px;
`;
