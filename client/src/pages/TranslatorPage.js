import React from 'react';
import Header from '../components/Header/Header';
import Footer, { ProfileButtonContainer } from '../components/Footer/Footer';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import CircleIcon from '../icons/CircleIcon';
import ProfileIcon from '../icons/ProfileIcon';
import LogoutIcon from '../icons/LogoutIcon';
import Textarea, { TextareaDark } from '../components/Textarea/Textarea';
import { ThemeProvider } from 'emotion-theming';
import theme from '../components/themes/theme';
import { UserContext } from '../context/user';
import { TextareaContainer } from '../components/Container/Container';
import { Link, useHistory } from 'react-router-dom';

export default function TranslatorPage() {
  const [translation, setTranslation] = React.useState([]);
  const [teleport, setTeleport] = React.useState(false);
  const [themeColor, setThemeColor] = React.useState(theme.light);
  const [user, setUser] = React.useContext(UserContext);
  const history = useHistory();

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
    setTeleport(true);
  }

  async function handleVocabulary(event) {
    setTeleport(true);
    if (teleport) {
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
    } else {
      return null;
    }
  }

  function handleThemeClick() {
    if (themeColor === theme.light) {
      setThemeColor(theme.dark);
    } else {
      setThemeColor(theme.light);
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setUser(false);
    history.push('/login');
  }

  return (
    <ThemeProvider theme={themeColor}>
      <Header />
      <TextareaContainer>
        <Textarea id="translator" onChange={handleTranslation} />
        <TextareaDark id="result" onMouseUp={handleVocabulary} />
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
        <FooterButton onClick={handleLogout}>
          <LogoutIcon />
        </FooterButton>
      </Footer>
    </ThemeProvider>
  );
}
