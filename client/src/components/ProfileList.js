import styled from '@emotion/styled';

const ProfileList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 10px;
  border-radius: 10px;
  text-align: center;
  transition: 0.15s transform ease;
  cursor: pointer;
  width: 140px;
  position: relative;
  background-color: ${props => props.theme.secondary};
  height: 65px;
  width: 65px;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProfileImageContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
`;

export const UserProfileStatus = styled(ProfileImageContainer)`
  width: 6px;
  height: 6px;
  background-color: green;
  border-radius: 10px;
  left: 6px;
  top: 6px;
`;

export default ProfileList;
