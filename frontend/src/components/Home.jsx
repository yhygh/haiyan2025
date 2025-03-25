import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    "JavaScript",
    "Python",
    "Data Structures and Algorithms",
    "NodeJS",
    "Express",
    "Database",
    "MongoDB",
    "PostgreSQL",
    "ReactJS",
    "React-redux",
    "Responsive Design",
    "HTML",
    "CSS",
    "JSON",
    "Letsencrypt",
    "JWT",
  ];

  return (
    <div>
      <h2>Welcome to Haiyan's Techland</h2>
      <div className="intro">
        <h4>Introduction</h4>
        <p>
          This is a <strong>responsive full stack website</strong>. You can view
          it on a <strong>mobile phone</strong> as well. From creating a favicon
          image, designing the look and feel, architecing the backend and
          frontend, writing every line of code, to generating a SSL certificate
          and deploying to a digital ocean droplet, I did everything from
          scratch. Here is the{" "}
          <a href="https://github.com/yhygh/haiyan2025">
            <b>source code</b>
          </a>
          . This website is a place for me to practice, improve and demonstrate
          my full stack development skills. It is also a lot of fun to work on
          it.
        </p>
        <h4>About me</h4>
        <p>
          I have been a full stack engineer since 2020. Prior to that, I had
          been a software testing engineer for a number of years. Since 2020, I
          have spent very possible minute I could spare to learn and sharpen my
          skills. Numerous evenings and weekends rather than watch a movie or
          something else I was either taking a course or working on a project.
          It has been a very rewarding journey.
        </p>
        <p>
          My learning journey includes Udemy courses, Youtube videos, React Dev{" "}
          <a href="https://react.dv">
            <b>official website</b>
          </a>
          . I started by bookmarking these resources and then quickly realized
          that a typical bookmark feature cannot meet my needs. So I decided to
          make my own website to store valuable resources that I discovered
          dynamically. That is where the Tech Warehouse tab is from.
        </p>

        <div>Some of my skills include:</div>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
