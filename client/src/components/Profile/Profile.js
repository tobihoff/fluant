import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  margin: 3rem auto;
  width: 100%;
  max-width: 240px;
  margin-bottom: -40px;
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
  border: 1.5px solid ${props => props.theme.primary};
  box-shadow: none;
  max-width: 40px;
  max-height: 40px;
  display: block;
`;

export const ProfileInfo = styled.p`
  font-size: 8px;
  text-transform: capitalize;
  color: ${props => props.theme.light.primary};
  margin-top: 58px;
  font-weight: bold;
`;

export const UserName = styled(ProfileInfo)`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: ${props => props.theme.light.border};
`;

export const ProfileScore = styled(ProfileInfo)`
  color: ${props => props.theme.third};
  font-size: 10px;
  margin-top: none;
`;

export default Profile;
