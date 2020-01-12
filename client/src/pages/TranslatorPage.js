import React from 'react';
import styled from '@emotion/styled';
import { Container, Header, Logo, Bookmark } from '../components/Header/Header';
import BookmarkIcon from '../icons/BookmarkIcon';
import fluant from '../resources/fluant.png';
import { BookmarkButton } from '../components/Buttons/Buttons';
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
  const [translation, setTranslation] = React.useState([]);
  const [vocabualry, setVocabulary] = React.useState([]);

  async function loadVocabulary() {
    try {
      const res = await fetch('http://localhost:7100/api/translation');
      const data = await res.json();
      setTranslation(data[0].voca);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(async () => {
    await loadVocabulary();
  }, []);

  function handleTranslation() {
    let words = document.getElementById('translator').value;
    translation.find(item => {
      if (words === item.german) {
        return getResult();
      }
    });
  }

  function getResult() {
    let voc = document.getElementById('translator');
    let word = document.getElementById('translator').value;
    let solution = [];
    solution.push(translation.find(item => item.german === word));
    voc.onchange = () => {
      let res = document.getElementById('result');
      res.innerHTML = solution[0].english;
    };
  }

  async function handleVocabulary(event) {
    let location = event.target.value;
    const auth = localStorage.getItem('token');
    await fetch('http://localhost:7100/api/dictonary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
      },
      body: JSON.stringify({ vocabulary: location })
    });
  }

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
        <Textarea id="translator" onChange={handleTranslation} />
        <TextareaDark id="result" onMouseUp={handleVocabulary} />
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
