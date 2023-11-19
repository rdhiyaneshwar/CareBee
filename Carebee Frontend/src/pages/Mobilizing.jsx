import React from 'react';
import '../assets/css/Physiotherapy.css';
import Navigation from './Navbar';
import Social from './Social';
import Footer from './Footer';

const Physiotherapy = () => {
  const physioSteps = [
    {
      title: 'Warm-up Exercises',
      description: 'Start with gentle warm-up exercises to prepare your muscles and joints.',
      video: 'videos/video3.mp4',
      image: 'https://media.istockphoto.com/id/457729193/vector/kids-doing-yoga.jpg?s=612x612&w=0&k=20&c=fJVZ_5_7F7slPhqpYdM6iQ09NRuN4lDvGs1JtTYA3Go=',
    },
    {
      title: 'Stretching Exercises',
      description: 'Follow up with stretching exercises to improve flexibility.',
      video: 'videos/video1.mp4',
      image: 'https://media.istockphoto.com/id/1412518373/vector/diverse-old-people-yoga-pose-set-isolated-cartoon.jpg?s=612x612&w=0&k=20&c=sX5Be4CeTamP-u2OUoMiVyNWUBJw12RrTb3cfobWCIg=',
    },
  ];

  return (
    <>
    <Navigation/>
    <Social/>
    <div className="physio-page">
      <section className="physio-content">
        {physioSteps.map((step, index) => (
          <div className="physio-step" key={index}>
            <h2 className="step-title">{step.title}</h2>
            <p className="step-description">{step.description}</p>
            <div className="physio-media">
              <video className="physio-video" controls>
                <source src={step.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img className="physio-image" src={step.image} alt={step.title} />
            </div>
          </div>
        ))}
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Physiotherapy;
