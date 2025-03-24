import { Link } from "react-router-dom";

const Dsa = () => {
  const tricks = [
    "Visualization",
    "Matching algorithms",
    "Pretending to be the interviewer",
    "Solid knowledge in various subjects",
    "Practice",
    "Learn from others",
  ];

  return (
    <div>
      <h2>Master Data Structures and Algorithms</h2>
      <div className="intro">
        <p>
          Practicing hundreds of{" "}
          <a href="https://leetcode.com/u/prac4ever/">
            <b>Leetcode</b>
          </a>{" "}
          problems have made me a much better engineer. I now constantly think
          about different approaches for a problem and choose the best in terms
          of time or space complexity. I care about how concise and readable my
          code is. I think about edge cases as much as possible. I really think
          Leetcode is a great platform to hone the skills of an engineer. Yet it
          is quite a journey to reach the stage of identifying a pattern and
          solving a problem correctly within minutes. I would like to share a
          few points with examples here.
        </p>
        <h4>Tips for learning to solve Leetcode problems</h4>
        <ul>
          {tricks.map((trick, i) => (
            <li key={i}>{trick}</li>
          ))}
        </ul>

        <h4>Details with examples coming soon ...</h4>
      </div>
    </div>
  );
};

export default Dsa;
