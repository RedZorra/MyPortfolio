import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
// import Footer from './views/Footer.jsx'
// import Header from './views/Header.jsx'
import Layout from './views/Layout.jsx';
import About from './components/About.jsx';
import MainContent from './components/MainContent.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css';



function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
