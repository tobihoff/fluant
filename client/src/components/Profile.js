import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  margin: 3rem auto;
  width: 100%;
  max-width: 240px;
  margin-bottom: 30px;
`;

export const Profile = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: none;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.secondary};
  box-shadow: 0 0 20px 5px ${props => props.theme.third};
`;

export const FriendsProfile = styled(Profile)`
  border: 2px solid ${props => props.theme.secondary};
  box-shadow: none;
  width: 40px;
  height: 40px;
`;

export const ProfileInfo = styled.p`
  font-size: 12px;
`;

export const ProfileScore = styled(ProfileInfo)`
  color: ${props => props.theme.third};
  font-size: 10px;
`;

export default Profile;
