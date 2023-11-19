import React, {useState}from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/SanitationPage.css';
import Navigation from './Navbar';
import Gallerymain from './Gallerymain';
import Footer from './Footer';
import Social from './Social';

const SanitationPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);
  const cleanlinessTips = [
    {
      title: 'Tip 1',
      description: 'Cleaning your body every day.',
    },
    {
      title: 'Tip 2',
      description: 'Brushing your teeth twice a day.',
    },
    {
      title: 'Tip 3',
      description: 'Increase the amount of fresh air by opening windows.',
    },
  ];

  const stepsnew = [
    {
      title: 'Wash Hands',
      description:'Washing hands is a simple yet effective hygiene practice that involves cleaning ones hands with soap and water to remove dirt, bacteria, viruses, and other harmful microorganisms. It is a crucial habit for maintaining good health and preventing the spread of diseases',
      iconClass: 'fas fa-hand-holding-water',
    },
    {
      title: 'Wear a Mask for Protection',
      description:'Wearing masks involves covering the nose and mouth with a protective barrier, reducing the spread of respiratory droplets, adhering to proper mask usage guidelines, maintaining hygiene, and following local health recommendations and minimizing the risk of disease transmission.',
      iconClass: 'fas fa-heart',
    },
    {
      title: 'Social Distance',
      description:'Social distancing, maintaining a safe physical distance from others, limiting gatherings, avoiding physical contact, promoting remote work and online learning, and implementing changes in public spaces to prevent disease transmission.',
      iconClass: 'fas fa-people-arrows',
    },
    {
      title: 'Disinfect Surfaces',
      description:'Disinfecting surfaces involves applying chemicals to kill germs, viruses, and bacteria, ensuring cleanliness, reducing disease transmission, and promoting a hygienic environment.',
      iconClass: 'fas fa-spray-can',
    },
    {
      title: 'Take Medicines',
      description:'Taking medicines involves following prescribed dosage and instructions, administering medication as directed by doctors, ensuring timely intake, understanding potential side effects, and seeking medical advice for any concerns, promoting effective treatment and overall well-being.',
      iconClass: 'fas fa-pills',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const showPopup = (index) => {
    setSelectedStep(index);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <Navigation />
      <Social/>
      <div className="bgf1"></div>
      <div className="bgf1 bgf2"></div>
      <div className="bgf1 bgf3"></div>
      <div className="sanitation-page">
        <h1 className="san">Cleanliness Tips</h1>

        <Slider {...settings}>
          {cleanlinessTips.map((tip, index) => (
            <div className="cleanliness-card" key={index}>
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </div>
          ))}
        </Slider>
        <Gallerymain/>
        <h2 className="san1">Steps for Sanitation</h2>

        <div className="step-cards">
        {stepsnew.map((step, index) => (
          <div className={`stepsnew ${popupVisible && selectedStep === index ? 'selected' : ''}`} key={index} onClick={() => showPopup(index)}>
            <i className={`iconnew ${step.iconClass}`}></i>
            <h3>{step.title}</h3>
          </div>
        ))}

        {popupVisible && selectedStep !== null && (
          <div className={`popup ${popupVisible ? 'visible' : ''}`}>
            <div className="popup-content">
              <h2>{stepsnew[selectedStep].title}</h2>
              <p className='sanpop'>{stepsnew[selectedStep].description}</p>
              <button className='button-29' onClick={hidePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default SanitationPage;
