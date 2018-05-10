import React from 'react';

import Header from './Header';

// Renders the "About" section
export default function About(props) {
  return (
    <div className="container-fluid" id="about">
      <Header text="About" icon={<i className="fas fa-user-circle"></i>} />
      <p>
        Hello, world! I am a <span>software developer</span> with an interest in
        <span> technology in health care</span>. I recently graduated from
        <span> Northeastern University</span> with a Bachelor of Science in
        computer science. Before pursuing a degree in CS, I was majoring in
        health science. While I am still driven to innovate this field, I wanted
        to make a difference doing what I enjoy: building <span>useful
        applications</span> that can make people's days that much better,
        whether that impact be big or small. I love how prevalent CS is in
        almost anything and the <span>self-empowered problem-solving </span>
        techniques that this field demands.
      </p>
    </div>
  );
}
