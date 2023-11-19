  import '../assets/css/Ecohaven.css';
  import React from 'react';
  import Gallery from './Gallery';
  import Navigation from './Navbar';

  import Footer from './Footer';
import Social from './Social';

  const Ecohaven = () => {
      const mealSections = [
          {
            title: 'YOGIC AWAKENING',
            items: [
              'Energizing herbal tea for a mindful start',
              'Nourishing yoga bowl with fresh greens and antioxidants',
              
            ],
          },
          {
            title: 'NATURE AND NOURISHMENT',
            items: [
              'Harmonious herbal infusion to rejuvenate the senses',
              'Zen-like mango slices paired with probiotic yogurt',
            ],
          },
          {
            title: 'HEALING EVENING',
            items: [
              'Unwind with a calming cup of chamomile tea, perfect for relaxation.',
              'Enjoy apple slices with a touch of natural honey for a serene dessert.',
            ],
          },
        ];
        

    const howItWorksSteps = [
      'Nature Therapeutic Influence: Recognizing the therapeutic potential of nature.',
      'Addressing Root Causes: Identifying and treating the underlying causes of illnesses.',
      'Holistic Care: Providing comprehensive care that considers the entire well-being of the individual.',
      'Emphasis on Prevention: Prioritizing preventive measures to maintain health and well-being.',
    ];

    return (
      <>
      <Navigation/>
      <Social/>
    <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
    
            <h1 className="dd">Nature repairs everything!!</h1>
          
              <div className="meals">
                {mealSections.map((section, index) => (
                  <div className="meal" key={index}>
                    <h2>{section.title}</h2>
                    <ul className='kif'>
                      {section.items.map((item, itemIndex) => (
                        <li className='divii' key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Gallery/>
              <div className="how">
                <h1 className="words">Our treatment and How does it work??</h1>
                <div className="how-card">
                  <ol>
                    {howItWorksSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
        

      <Footer/>
      
  </>
    );
  };

  export default Ecohaven;
