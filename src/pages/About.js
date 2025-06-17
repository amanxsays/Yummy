import { About_URL } from "../utils/constants";

const About = () => (
  <div className="About">
    <img className="about-image" src={About_URL}></img>
    <div className="about-us-text">
      <h1>About Me</h1>
      <h3>Hi, I’m Aman Kumar Jha 👋</h3>
      <h3>a passionate and driven Electrical Engineering undergraduate at NIT Silchar,</h3>
      <h3>with a growing expertise in Web Development,</h3>
      <h3>Data Structures & Algorithms (DSA), and Problem Solving.</h3>
    </div>
  </div>
);


export default About;