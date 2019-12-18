import styled from '@emotion/styled';

const Profile = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16);
  grid-area: Image;
`;

export const FriendsProfile = styled(Profile)`
  border: 2px solid ${props => props.theme.secondary};
  box-shadow: none;
`;

export default Profile;
