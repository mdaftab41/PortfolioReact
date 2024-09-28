import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Bar() {
  return (
    <div className="">
      <div className="my-5">
        <p>HTML</p>
        <ProgressBar completed={80} bgColor="red" animateOnRender={true} />
      </div>
      <div className="my-5">
        <p>Bootstrap</p>
        <ProgressBar completed={70} bgColor="red" animateOnRender={true} />
      </div>
      <div className="my-5">
        <p>CSS</p>
        <ProgressBar completed={75} bgColor="red" animateOnRender={true} />
      </div>
      <div className="my-5">
        <p>Tailwind CSS</p>
        <ProgressBar completed={50} bgColor="red" animateOnRender={true} />
      </div>
      <div className="my-5">
        <p>JavaScript</p>
        <ProgressBar completed={70} bgColor="red" animateOnRender={true} />
      </div>
      <div className="my-5">
        <p>React-js</p>
        <ProgressBar completed={75} bgColor="red" animateOnRender={true} />
      </div>
      <div className="my-5">
        <p>Node-js</p>
        <ProgressBar completed={50} bgColor="red" animateOnRender={true} />
      </div>
      <div className="my-5">
        <p>C,C++</p>
        <ProgressBar completed={80} bgColor="red" animateOnRender={true} />
      </div>
    </div>
  );
}
export default Bar;
