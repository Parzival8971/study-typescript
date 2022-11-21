import React from 'react';

type Props = { title: string };

const About = ({ title }: Props) => {
  return (
    <div className='card card-body'>
      <h2>About {title}</h2>
    </div>
  );
};

export default About;
