import React from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../api/apiSlice";
import { authSelectors } from "../../containers/auth/selectors";

import {
  ProfileContainer,
  ProfileImage,
  ProfileHeading,
  DisplayName,
  FeedbackMessage,
  ErrorMessage
} from "./UserProfileStyles";

const defaultProfileImage = `${process.env.PUBLIC_URL}/default_user.png`;

function UserProfile() {
  const accessToken = useSelector(authSelectors.getAccessToken);
  const { data, error, isLoading } = useGetUserQuery(undefined, {
    skip: !accessToken
  });

  if (isLoading) return <FeedbackMessage>Loading...</FeedbackMessage>;
  if (error && "message" in error) return <ErrorMessage>Error: {error.message}</ErrorMessage>;

  const profileImageUrl = data?.images[0]?.url || defaultProfileImage;

  return (
    <ProfileContainer>
      <ProfileHeading>Welcome to Spotify!</ProfileHeading>
      <DisplayName>{data?.display_name}</DisplayName>
      <ProfileImage src={profileImageUrl} alt="User Profile" />
    </ProfileContainer>
  );
}

export default UserProfile;
