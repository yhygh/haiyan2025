import { Link } from "react-router-dom";

const AIfun = () => {
  return (
    <div>
      <h2>Huai Opera Genre Detection (in progress)</h2>
      <div className="intro">
        <p>
          I grew up with my hometown opera, a regional opera that has fewer and
          fewer audiences these days. I once uploaded a short audio clip to a
          few popular music websites. Not surprisingly, no website could
          recognize what it is. This made me think that maybe I could do
          something about it. I will work on it whenever I can.
        </p>
        <h4>Step one: create some audio clips to start</h4>
        <p>
          I have created some clips from various places. It is a really time
          consuming task. I need far more clips to make my AI program more
          reliable.
        </p>
        <h4>Step two: try the CNN algorithm</h4>
        <p>
          I have also written a very basic program to analyze the audio clips
          and create some models to predict the genre of another audio clip. I
          will upload the program soon.
        </p>

        <h4>More to come</h4>
      </div>
    </div>
  );
};

export default AIfun;
