import React from "react";
import { useGetUserQuery } from "../../api/apiSlice";
import { authSelectors } from "../../containers/auth/selectors";
import { useSelector } from "react-redux";

import {
  ProfileContainer,
  ProfileImage,
  ProfileHeading,
  DisplayName,
  FeedbackMessage,
  ErrorMessage
} from "./UserProfileStyles";

function UserProfile() {
  const accessToken = useSelector(authSelectors.getAccessToken);
  const { data, error, isLoading } = useGetUserQuery(undefined, {
    skip: !accessToken
  });

  if (isLoading) return <FeedbackMessage>Loading...</FeedbackMessage>;
  if (error && "message" in error) return <ErrorMessage>Error: {error.message}</ErrorMessage>;

  return (
    <ProfileContainer>
      <ProfileHeading>Welcome to Spotify!</ProfileHeading>
      <DisplayName>{data?.display_name}</DisplayName>
      <ProfileImage src={data?.images[0]?.url} alt="User Profile" />
    </ProfileContainer>
  );
}

export default UserProfile;
