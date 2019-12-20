import styled from '@emotion/styled';

export const Container = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: 40px;
  top: 0;
`;

export const Header = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 240px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  height: auto;
  max-width: 50px;
`;

export const Bookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  max-width: 50px;
  right: 0;
`;
