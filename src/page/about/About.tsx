import { RiDoubleQuotesL } from "react-icons/ri";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="head-about">
        <div>
          Who Am I? <span>and, How It All Started?</span>
        </div>
        <img width={120} src="/kid.jpg" alt="abolfazl" />
      </div>
      <p>
        Five years ago, I took my first steps into the world of programming.
        Without any mentor or guidance, I found myself quite lost at the
        beginning. I started learning several languages like C++, Python,
        Kotlin, and PHP, but since I didn’t know how to apply them, they didn’t
        serve me well. Then I discovered HTML, CSS, and JavaScript. The fact
        that I could see the results of my work instantly fascinated me, and
        that’s where my real journey began.
      </p>
      <p>
        Gradually, I expanded my knowledge of JavaScript, delving deeper into
        React, Next.js, Node, and Express. I eventually returned to PHP and
        Python, but this time with a clear goal in mind. I mastered WordPress
        and Django. Today, I work as a full-stack developer, and right now, I’m
        diving into the world of data science and artificial intelligence. I’ve
        successfully trained a few models for image and text processing, but I’m
        still at the beginning of this journey. I know there’s a long way to go,
        and I’m committed to putting in the effort to reach my goals.
      </p>
      <ul>
        <li>
          Personality Type:
          <span>INTJ</span>
        </li>
        <li>
          Age:
          <span>25</span>
        </li>
        <li>
          Hobbies:
          <span>
            Reading (novels), working out, and a passion for traveling
          </span>
        </li>
        <li>
          Interest outside of programming:
          <span>Art, Writing poetry</span>
        </li>
      </ul>
      <div className="head">Gallery</div>
      <div className="gallery">
        <img width={200} src="/haji.jpg" alt="" />
        <img width={200} src="/b.jpg" alt="" />
        <img width={200} src="/boat.jpg" alt="" />
        <img width={200} src="/faramouj.jpg" alt="" />
        <img width={200} src="/vibe.jpg" alt="" />
      </div>
      <div className="head">One of my poems</div>
      <div className="poem">
        <RiDoubleQuotesL />
        <p>
          If you've decided to leave, I won't ask you to stay.
          <br /> Go slowly,
          <br /> so I can gaze at you for just a little while longer.
        </p>
        <span>-abolfazl</span>
      </div>
    </div>
  );
}

export default About;
