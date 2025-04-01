import { Link } from "react-router-dom";

const AIfun = () => {
  return (
    <div className="intro">
      <h2>Huai Opera Genre Detection (in progress)</h2>
      <div>
        <p>
          Watching Huai opera was one of my favorite activities in my childhood.
          Sadly, this kind of regional opera has fewer and fewer audiences these
          days. I once uploaded a short audio clip to a few popular music
          websites. Not surprisingly, no website could detect what it is. This
          made me think that I should do something about it.
        </p>
        <h4>Step one: data creation</h4>
        <p>
          I have created some clips from various sources. It is a really time
          consuming task, since nobody has worked on this. I need far more clips
          to improve the reliablility of my AI program.
        </p>
        <h4>Step two: try the Convolutional Neural Network (CNN) algorithm</h4>
        <p>
          I have written a very basic program to analyze the audio clips and
          create some models to predict the genre of another audio clip. I will
          upload the program soon.
        </p>

        <p>
          {" "}
          Honestly, I am learning AI too. I do not know if CNN is the best
          algorithm for this task. I have to experiment and see. But I will
          continue to work on this whenever I can, simply because of sweet
          memories Huai opera brought to me, which was invaluable for a child.
        </p>

        <h4>More to come ... </h4>
      </div>
    </div>
  );
};

export default AIfun;
