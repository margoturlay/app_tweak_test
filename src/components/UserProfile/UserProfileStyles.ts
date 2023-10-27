import styled from "styled-components";

const COLORS = {
  primaryText: "#FFFFFF",
  secondaryText: "#B3B3B3",
  backgroundDark: "#121212",
  spotifyGreen: "#1DB954",
  error: "#E22134"
};

export const ProfileContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: ${COLORS.backgroundDark};
  border-radius: 8px;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: auto;
  border-radius: 50%;
  margin-top: 15px;
  border: 3px solid ${COLORS.spotifyGreen};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProfileHeading = styled.h1`
  color: ${COLORS.primaryText};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const DisplayName = styled.h2`
  color: ${COLORS.secondaryText};
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

export const FeedbackMessage = styled.div`
  padding: 10px;
  font-weight: 500;
  color: ${COLORS.secondaryText};
`;

export const ErrorMessage = styled(FeedbackMessage)`
  color: ${COLORS.error};
`;
