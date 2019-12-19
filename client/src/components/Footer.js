import styled from '@emotion/styled';

export const Footer = styled.div`
  left: 0;
  right: 0;
  height: 70px;
  width: 100%;
  margin: 0 auto;
  top: 0;
  position: fixed;
  background: ${props => props.theme.primary};
  display: grid;
  grid-template-areas:
    '. Profile .'
    'Theme Profile Learn';
  grid-template-columns: 20% auto 20%;
  grid-template-rows: auto;
  justify-items: center;
`;

export const Profile = styled.img`
  grid-area: Profile;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border: 3px solid ${props => props.theme.border};
  border-radius: 50%;
`;
export const Theme = styled.button`
  display: grid;
  justify-content: center;
  grid-area: Theme;
  width: 50px;
  height: 50px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: white;
  border: none;
  outline: none;
`;

export const Study = styled(Theme)`
  grid-area: Learn;
  border-radius: 70% 30% 30% 70% / 30% 30% 70% 70%;
`;
