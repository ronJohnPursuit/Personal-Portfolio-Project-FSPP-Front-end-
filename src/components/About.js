import React from "react";

function About() {
  return (
    <div className="About">
      <div>
        <h1>About the Project</h1>
        <br />
        <h4>
          Hi, I'm Ron_John 🤖, a skilled web developer with a passion for making
          people's lives simpler. Along with the help of my sister tarez
          Johnson, I've Recently created a user-friendly notary website that
          makes it easy for customers to connect with certified notary publics
          in their area. My innovative approach to technology has made the
          notary process more accessible and convenient for everyone, and I'm
          thrilled to be able to help people streamline this important part of
          their lives.
        </h4>
      </div>
      <div>
        <h1>About my Team</h1>
        <div className="About_Devs">
          <h2>
            <img
              className="About_pfp"
              src={`https://avatars.githubusercontent.com/u/105737822?v=4`}
            ></img>
            <br />
            Ron John <br />
            <h6 className="about-me-bio">
              I am a full stack web developer from Brooklyn, New York, proficent
              in front end and back end Javascript. I've spent the last few
              months learning the fundementals of Javascript; the basics of
              front end tools like HTML and CSS and enjoying getting familar
              with different parts of the React Library. I've been working with
              functional components and hooks and its been very helpful in
              creating websites like these
              {/* As a full stack web developer from the vibrant city of Brooklyn, New York, I have mastered the art of creating seamless user experiences using both front end and back end JavaScript. In the past few months, I have dedicated my time to learning and understanding the fundamental concepts of JavaScript. My knowledge of front end tools such as HTML and CSS has expanded tremendously, and I am continually gaining a more in-depth understanding of the intricacies of the React library. It has been an enjoyable experience delving into the world of functional components and hooks as I am now able to create dynamic websites with ease.

My expertise has been particularly useful in designing and developing websites that incorporate unique features and functionality. With my proficiency in front end development, I have been able to create user interfaces that are not only visually appealing but also user-friendly. My familiarity with back end development has also been invaluable in ensuring that these websites run efficiently and have a solid foundation. As a full stack developer, I am confident that I can provide top-notch solutions for any project, no matter the complexity, and make sure that the end product is functional, visually appealing, and user-friendly.... <br /> Link to my{" "} */}
              <a href={"https://github.com/ronJohnPursuit"} target="_blank">
                GitHub
              </a>{" "}
              🏄🏿‍♂️
            </h6>
          </h2>
          <h2>
            <img className="About_pfp About_pfpTarez" src={``}></img>
            <br />
            Tarez Johnson <br />
            <h6 className="about-me-bio">
              Hey eveyone👋🏽Hi, I'm Tarez, a dedicated teacher for the NYC
              Department of Education with a passion for helping my students
              succeed. Alongside my full-time teaching job, I also run a side
              business as a tax preparer and notary. With years of experience in
              both fields, I take pride in being a trusted resource for my
              clients who appreciate my attention to detail, professionalism,
              and friendly demeanor. Whether I'm grading papers, helping a
              student with their homework, or guiding a client through the tax
              preparation process, my goal is always to make a positive impact
              in the lives of those I serve. I believe that by sharing my
              expertise and skills with others, I can help them achieve their
              goals and succeed in their endeavors. ... <br /> link to my{" "}
              <a href={"tarez.johnsonhenry@gmail.com"} target="_blank">
                Email
              </a>{" "}
              😎
            </h6>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
