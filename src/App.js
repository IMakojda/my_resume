import './App.css';
import About from "./components/about";
import Header from "./components/header";
import Nav from "./components/nav";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Education from "./components/education";

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contacts/>
    </>
  );
}

export default App;
