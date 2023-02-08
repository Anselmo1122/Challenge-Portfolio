import Blogs from './components/Blogs';
import Experiences from './components/Experiences';
import Hobbies from './components/Hobbies';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.scss';

function App() {
  return (
    <div className="App">
      <section className='App__grid'>
        <Profile />
        <Skills />
        <Projects />
        <Experiences />
        <Hobbies />
        <Blogs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
