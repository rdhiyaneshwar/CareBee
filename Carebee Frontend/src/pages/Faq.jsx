import React, { useState } from 'react';
import '../assets/css/Faq.css';
import Navigation from './Navbar';
import Footer from './Footer';
function FAQSection() {
  const [faqItems, setFaqItems] = useState([
    { id: 1, question: 'What is CareBee?', answer: 'CareBee is a platform designed to connect elderly individuals and their families with caregivers and various care services. It offers a user-friendly interface to access a wide range of caregiving solutions and support.', isOpen: false },
    { id: 2, question: 'Is the Application Free to Use?', answer: 'Yes, the application is free to download and use. However, some premium features and services may have associated costs, which will be clearly communicated to you.', isOpen: false },
    { id: 3, question: 'How Can I Find Care Services for My Elderly Loved Ones?', answer: 'To find care services, navigate to the navigation bar section within the website. You can browse through a variety of care options.', isOpen: false },
    { id: 4, question: 'What Types of Care Services are Available?', answer: 'Our application offers a wide range of care services, including diet plans, eco-haven, sanitation and mobilizing. You can explore these services in the "Services" section.', isOpen: false },
    { id: 5, question: 'What Devices and Platforms are Supported?', answer:'Our application is compatible with iOS and Android devices, as well as web browsers. You can access our services on smartphones, tablets, and computers.', isOpen: false },
  ]);

  const toggleAnswer = (id) => {
    setFaqItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <>
    <Navigation/>
    <section className="faq-section">
      <div className="containerer">
        <div className="rower">
          <div className="col-md-6 offset-md-3">
            <div className="faq-title text-center pb-3">
              <h2>Faq</h2>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <div className="faq" id="accordion">
              {faqItems.map((item) => (
                <div className="carder1" key={item.id}>
                  <div className="carder1-header" id={`faqHeading-${item.id}`}>
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        onClick={() => toggleAnswer(item.id)}
                        aria-expanded={item.isOpen}
                        aria-controls={`faqCollapse-${item.id}`}
                      >
                        <span className="badge">{item.id}</span> {item.question}
                      </h5>
                    </div>
                  </div>
                  <div
                    id={`faqCollapse-${item.id}`}
                    className={`collapse ${item.isOpen ? 'show' : ''}`}
                    aria-labelledby={`faqHeading-${item.id}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default FAQSection;
