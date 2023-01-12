import Blogs from './components/Blogs';
import Experiences from './components/Experiences';
import Hobbies from './components/Hobbies';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Profile />
      <Skills />
      <Projects />
      <Experiences />
      <Hobbies />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
