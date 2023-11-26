import { Children } from "react";
import profilePicture from "./Profile-pixel.png";

function App() {
  return (
    <div className="container">
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
    <div className="about section">
      <img src={profilePicture} alt="profile" style={{ width: "200px" }} />
      <p>
        Welcome to my React portfolio - <br />A culmination of my journey into
        web development over the past 12 months. With a newfound focus on React,
        I'm excited to showcase my evolving skills, creativity, and passion for
        crafting engaging web experiences
      </p>
    </div>
  );
}
function Projects() {
  return (
    <div className="projects section">
      <h1>Projects</h1>
      <p className="description">
        Each project reflects my dedication to creating dynamic, user-centered
        solutions, from web applications to intuitive interfaces. These works
        represent my evolving proficiency in crafting impactful digital
        experiences.
      </p>
      <div className="projectContainer">
        <Project
          title="Emoji-Library"
          description="The Emoji Library app is a user-friendly tool that lets you search and browse a collection of emojis. I've implemented a real-time search feature, allowing you to find emojis by keywords, and a copy-to-clipboard function for easy emoji sharing."
          link="https://emoji-library-3953b.web.app/"
          emoji="🤓"
        />
        <Project
          title="React-Racers"
          description="The React-Racers app is a simple web page that displays a list of products that the user can add to their basket, the total price is updated when a product is added or removed and conditional rendering is used to allow the user to display the basket or not."
          link="https://react-store-5fd57.web.app/"
          emoji="🏎️"
        />
        <Project />
      </div>
    </div>
  );
}

function Project({
  title = "Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in porttitor tortor, fringilla hendrerit augue. Phasellus vitae dapibus turpis, nec egestas sapien. Phasellus ac arcu lectus. Fusce ultrices, dui sit amet cursus ornare, mi leo commodo nulla, sed tempor orci justo ut justo.",
  link = "",
  emoji = "😶",
}) {
  return (
    <div className="project">
      <div
        className={title === "Title" ? "projectContent blur" : "projectContent"}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="blank">
          {title}
        </a>
        <div className="emoji">{emoji}</div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="section">
      <h1>Contact</h1>
    </div>
  );
}
