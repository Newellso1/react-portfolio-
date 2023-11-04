import { Children } from "react";
import profilePicture from "./Profile-pixel.png";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

function Logo() {
  return (
    <div>
      <h1>I AM SAM</h1>
    </div>
  );
}

function Navigation() {
  return (
    <ul>
      <NavigationLink>About</NavigationLink>
      <NavigationLink>Projects</NavigationLink>
      <NavigationLink>Contact</NavigationLink>
    </ul>
  );
}

function NavigationLink({ children }) {
  return <li>{children}</li>;
}

function About() {
  return (
    <div>
      <img src={profilePicture} alt="profile" style={{ width: "200px" }} />
    </div>
  );
}
function Projects() {
  return <h1>Projects</h1>;
}
function Contact() {
  return <h1>Contact</h1>;
}
