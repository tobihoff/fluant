import styled from '@emotion/styled';

const Profile = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border: none;
  border-radius: 50%;
  grid-area: Image;
  border: 2px solid ${props => props.theme.secondary};
`;

export const FriendsProfile = styled(Profile)`
  border: 2px solid ${props => props.theme.secondary};
  box-shadow: none;
`;

export default Profile;
