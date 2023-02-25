import styled from '@emotion/styled';
import React, { memo } from 'react';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PhotoWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  overflow: hidden;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h1`
  color: #333;
  margin-bottom: 0;
  line-height: 2.6rem;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1.1rem;
  color: #304979;
  font-weight: 500;
`;

const Profile = memo((props: { picture: string, name: string, title: string }) => {
  const { picture, name, title } = props;
  return (
    <ProfileWrapper>
      <PhotoWrapper>
        <Photo src={picture} alt={name} />
      </PhotoWrapper>

      <Name>{name}</Name>

      <Title>{title}</Title>
    </ProfileWrapper>
  );
});

Profile.displayName = 'Profile';

export default Profile;
