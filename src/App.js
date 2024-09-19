import { BiColor } from "react-icons/bi";
import "./App.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 id="text-header">Kimberly G. Manaloto</h1>
      <h2 id="text-header">Future Front-End Developer</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>CONTACT</h2>
      <p>manalotokimm@gmail.com <FaEnvelope /> <br></br> 09269129152 <FaPhone /> <br></br> Mexico, Pampanga <FaMapMarkerAlt /> <br></br>
      <a href="https://www.linkedin.com/in/kim-manaloto-19a17730a/" target="_blank"> Linked in <FaLinkedin /></a> <br></br>
      <a href="https://www.github.com/kiminamo" target="_blank"> Github <FaGithub /></a>
      </p>
      <h2> EDUCATION</h2>
      <p>Bachelor of Information <br></br> Technology,
        Computing and <br></br>Library Science <br></br><br></br> University of the Assumption<br></br> 2022 - Present <br></br> San Fernando, Pampanga </p>
      
      <h2>SKILLS</h2>
      <p>Python <br />
      MySQL <br />
      HTML <br />
      CSS <br />
      Java <br />
      Javascript</p>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h2>LEARNING EXPERIENCE</h2>
      <h2> <li>First Year College</li></h2>
      <p><ul>- In our first year, we used Python to develop a Tic-Tac-Toe game, which was a great introduction to coding and game development.</ul></p>
      <h2> <li>Second Year College</li></h2>
      <p><ul>- In our second year, we transitioned to using Java for more advanced projects, integrated MySQL for database management, and created a website using HTML, further expanding our skills in both backend and frontend development.</ul></p>
      <h2> <li>Third Year College (Present)</li></h2>
      <p><ul>- In our third year, we focused on web development using JavaScript and HTML, building dynamic websites and utilizing modern tools such as Vercel, Node.js, and React.js to create more responsive and interactive applications.</ul></p>
    </div>
  );
}
