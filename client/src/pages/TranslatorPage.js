import React from 'react';
import styled from '@emotion/styled';
import { Container, Header, Logo, Bookmark } from '../components/Header/Header';
import BookmarkIcon from '../icons/BookmarkIcon';
import fluant from '../resources/fluant.png';
import { BookmarkButton } from '../components/Buttons/Buttons';
import DictonaryList from '../components/Modals/Modal';
import Footer, { ProfileButtonContainer } from '../components/Footer/Footer';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import CircleIcon from '../icons/CircleIcon';
import TranslateIcon from '../icons/TranslateIcon';
import LogoutIcon from '../icons/LogoutIcon';
import Textarea, { TextareaDark } from '../components/Textarea/Textarea';
import { TextareaContainer } from '../components/Container/Container';

const LogoImage = styled.img`
  height: 200px;
  width: auto;
`;

export default function TranslatorPage() {
  const [translation, setTranslation] = React.useState({});

  async function loadVocabulary() {
    try {
      const res = await fetch('http://localhost:7100/api/translation');
      const data = await res.json();
      console.log(data);
      setTranslation({
        translation: data.vocabulary,
        language: data.language
      });
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(async () => {
    await loadVocabulary();
    console.log(translation);
  }, []);

  // const a = loadVocabulary();

  // function handleTranslation() {
  //   if (input === Auto) return;
  // }

  return (
    <>
      <Container>
        <Header>
          <Logo>
            <LogoImage src={fluant} alt="Logo" />
          </Logo>
          <Bookmark>
            <BookmarkButton>
              <BookmarkIcon />
            </BookmarkButton>
          </Bookmark>
        </Header>
      </Container>
      <TextareaContainer>
        <Textarea />
        <TextareaDark />
      </TextareaContainer>
      <Footer>
        <FooterButton>
          <CircleIcon />
        </FooterButton>
        <ProfileButtonContainer>
          <ProfileButton>
            <TranslateIcon />
          </ProfileButton>
        </ProfileButtonContainer>
        <FooterButton>
          <LogoutIcon />
        </FooterButton>
      </Footer>
    </>
  );
}
