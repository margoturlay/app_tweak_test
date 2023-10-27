import React from "react";
import { useGetUserQuery } from "../../api/apiSlice";
import {
  ProfileContainer,
  ProfileImage,
  ProfileHeading,
  DisplayName,
  FeedbackMessage,
  ErrorMessage
} from "./UserProfileStyles";

function UserProfile() {
  const { data, error, isLoading } = useGetUserQuery();

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
