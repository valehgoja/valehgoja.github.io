import React from "react";
import bg from "../images/bg.jpg";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div>
      <img className="bgHome" src={bg} alt='ValehGoja' />
      <div className="homeText">
        <ReactTypingEffect
          text={[
            "Hi, I'm Valeh Gojayev. Welcome to my Portfolio.",
            "  I am a Web Developer.",
            " You can find my contact information from Contact.",
          ]}
          speed={50}
          eraseSpeed={50}
          eraseDelay={300}
          typingDelay={80}
        />

        <br />
      </div>
     <a href="https://drive.google.com/file/d/1odbow1j3z6_TpkAHJj91FTksXzE7k0l4/view?usp=sharing" target={"_blank"}> <div className="resume">Resume</div></a>
    </div>
  );
}
