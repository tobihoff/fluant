import React from 'react';
import Header from '../components/Header/Header';
import Footer, { ProfileButtonContainer } from '../components/Footer/Footer';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import CircleIcon from '../icons/CircleIcon';
import ProfileIcon from '../icons/ProfileIcon';
import LogoutIcon from '../icons/LogoutIcon';
import Textarea, { TextareaDark } from '../components/Textarea/Textarea';
import { ThemeProvider } from 'emotion-theming';
import { TranslateText, TextBox } from '../components/Text/Text';
import { AddButton } from '../components/Buttons/Buttons';
import theme from '../components/themes/theme';
import { useLogout } from '../context/user';
import { TextareaContainer } from '../components/Container/Container';
import { Link } from 'react-router-dom';
import { UploadText } from '../components/Text/Text';
import { useSpring } from 'react-spring';

export default function TranslatorPage() {
  const [translation, setTranslation] = React.useState([]);
  const [themeColor, setThemeColor] = React.useState(theme.light);
  const [loading, setLoading] = React.useState(false);
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
    // eslint-disable-next-line
  }, []);

  function handleWordsChange(event) {
    const words = event.target.value;
    setWords(words);
  }

  React.useEffect(() => {
    const solution = translation.find(item => item.german === words);
    setResult(solution ? solution.english : '');
    // eslint-disable-next-line
  }, [words]);

  async function upload() {
    const auth = localStorage.getItem('token');
    setLoading(true);
    await fetch('/api/dictonary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
      },
      body: JSON.stringify({ vocabulary: result })
    });
    setTimeout(() => setLoading(false), 2000);
    setWords('');
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
        <Textarea value={words} onChange={handleWordsChange} autoFocus={true} />
        <TextareaDark value={result} readOnly />
        <br /> {loading && <UploadText>Is on his way to your Dictonary</UploadText>}
        <AddButton onClick={upload}>Into my dictionary</AddButton>
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
