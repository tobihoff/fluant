import React from 'react';
import Header from '../components/Header/Header';
import Footer, { ProfileButtonContainer } from '../components/Footer/Footer';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import CircleIcon from '../icons/CircleIcon';
import ProfileIcon from '../icons/ProfileIcon';
import LogoutIcon from '../icons/LogoutIcon';
import Textarea, { TextareaDark } from '../components/Textarea/Textarea';
import { ThemeProvider } from 'emotion-theming';
import { TranslateText, TranslateBox, TextBox } from '../components/Text/Text';
import theme from '../components/themes/theme';
import { useLogout } from '../context/user';
import { TextareaContainer } from '../components/Container/Container';
import { Link } from 'react-router-dom';
import { useSpring } from 'react-spring';

export default function TranslatorPage() {
  const [translation, setTranslation] = React.useState([]);
  const [themeColor, setThemeColor] = React.useState(theme.light);
  const logout = useLogout();
  const [words, setWords] = React.useState('');
  const [result, setResult] = React.useState('');
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  async function loadVocabulary() {
    try {
      const response = await fetch('/api/translation');
      const translations = await response.json();
      setTranslation(translations);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    loadVocabulary();
  }, []);

  function handleWordsChange(event) {
    const words = event.target.value;
    setWords(words);
  }

  React.useEffect(() => {
    const solution = translation.find(item => item.german === words);
    setResult(solution ? solution.english : '');
  }, [words]);

  async function handleVocabulary() {
    const auth = localStorage.getItem('token');
    await fetch('/api/dictonary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
      },
      body: JSON.stringify({ vocabulary: result })
    });
  }

  function handleThemeClick() {
    if (themeColor === theme.light) {
      setThemeColor(theme.dark);
    } else {
      setThemeColor(theme.light);
    }
  }

  return (
    <ThemeProvider theme={themeColor}>
      <Header />
      <TextareaContainer>
        <TextBox>
          <TranslateText style={animation}>Übersetze Deutsch</TranslateText>
        </TextBox>
        <Textarea value={words} onChange={handleWordsChange} />
        <TextareaDark value={result} onMouseUp={handleVocabulary} />
      </TextareaContainer>
      <Footer>
        <FooterButton onClick={handleThemeClick}>
          <CircleIcon />
        </FooterButton>
        <ProfileButtonContainer>
          <ProfileButton as={Link} to="/profile">
            <ProfileIcon />
          </ProfileButton>
        </ProfileButtonContainer>
        <FooterButton onClick={logout}>
          <LogoutIcon />
        </FooterButton>
      </Footer>
    </ThemeProvider>
  );
}
