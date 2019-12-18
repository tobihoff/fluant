import styled from '@emotion/styled';

const ProfileList = styled.article`
  display: grid;
  grid-template-areas:
    'Image Friend'
    'Image Score';
  grid-template-columns: auto 80%;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  width: 100%;
  height: 40px;
  background: white;
  max-width: 200px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  margin: 3px;
  padding: 3px;
  font-size: 15px;
`;

export default ProfileList;
