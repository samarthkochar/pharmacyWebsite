import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Wrapper>
      <div>
        <img src="./Public/about/about-img.jpg"></img>
        <p>
          PharmaCare Online is a modern, secure, and user-friendly online
          pharmacy platform designed to provide customers with a seamless
          experience in purchasing medications, healthcare products, and
          wellness items. The website aims to make healthcare more accessible by
          offering prescription medications, over-the-counter (OTC) drugs,
          personal care items, and health-related services.
        </p>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  img{
  margin-top: 80px;
  margin-left: 140px;
  text-align:center;
  height: 400px;
  width: 80%;
  border-radius: 5px;
  }

  p{
  margin: 0 150px;}
`;
