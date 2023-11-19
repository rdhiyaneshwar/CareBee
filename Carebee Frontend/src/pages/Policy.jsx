import React from 'react';
import '../assets/css/Terms.css';
import Navigation from './Navbar';
import Footer from './Footer';


const Privacy = () => {
  return (
    <>
      <Navigation />
      <main className="wrape">
        <section className="containerpolicy">
          <div className="container__heading">
            <h2 className='polinew'> Privacy Policy</h2>
          </div>
          <div className="container__content">
            <p>
              Effective Date: [23/09/2023]
              <br/><br/>
              Welcome to the CareBee Elder Care Network application, provided by CareBee. <br/>We are committed to protecting your privacy. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information. By accessing or using the App, you agree to the terms of this Privacy Policy.
              <br/><br/>
              <span className="iconpolicy1">Information We Collect</span> 
              <br/>
              <span className="iconpolicy1">Personal Information</span> 
              <br/>
              - Name: We collect your name to personalize your experience and for identification purposes.
              <br/>
              - Contact Information: This includes your email address, phone number, and mailing address to communicate with you and provide services.
              <br/>
              - Health Information: We may collect health-related information to provide specialized elder care services.
              <br/>
              - Payment Information: If you make payments through the App, we may collect payment card details and billing information.
              <br/>
              - User-generated Content: Any content you provide, such as reviews or feedback, will be collected.
              <br/>
              - Location Information: We may collect your location to provide location-based services with your consent.
              <br/><br/>
              <span className="iconpolicy1">Automatically Collected Information</span>
              <br/>
              - Device Information: We collect information about your device, including its type, operating system, and unique device identifiers.
              <br/>
              - Usage Information: We gather data about how you use the App, such as the pages you visit and actions you take.
              <br/>
              - Log Data: We collect server logs, which may include your IP address, browser type, and access times.
              <br/><br/>
              <span className="iconpolicy1"> How We Use Your Information</span> 
              <br/>
              <span className="iconpolicy1"> We use the collected information for the following purposes:</span> 
              <br/>
              - Providing Services: To offer and improve our elder care services.
              <br/>
              - Communications: To contact you regarding updates, promotions, and important information.
              <br/>
              - Payment Processing: To process payments and billing-related activities.
              <br/>
              - Analytics: To analyze usage patterns and improve the App functionality.
              <br/>
              - Legal Compliance: To comply with legal obligations.
              <br/><br/>
              <span className="iconpolicy1">Data Sharing and Disclosure</span> 
              <br/>
              <span className="iconpolicy1">We may share your information with:</span> 
              <br/>
              - Service Providers: Third-party service providers who assist us in delivering our services.
              <br/>
              - Legal Requirements: When required by law or in response to legal requests.
              <br/>
              - Business Transfers: In the event of a merger, acquisition, or sale of all or part of our assets.
              <br/><br/>
              <span className="iconpolicy1">Your Choices</span>
              <br/>
              - Access and Update: You can review and update your personal information through the App.
              <br/>
              - Communication Preferences: You can opt out of marketing communications.
              <br/>
              - Location Services: You can disable location services through your device settings.
              <br/><br/>
              <span className="iconpolicy1">Security</span> 
              <br/>
              We employ reasonable security measures to protect your information. However, no data transmission over the internet or method of electronic storage is entirely secure.
              <br/><br/>
              <span className="iconpolicy1">Children Privacy</span>
              <br/>
              The App is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children.
              <br/><br/>
              <span className="iconpolicy1">Changes to this Privacy Policy</span>
              <br/>
              We may update this Privacy Policy periodically. Please review it regularly for any changes.
              <br/><br/>
              <span className="iconpolicy1">Contact Us</span>
              <br/>
              If you have questions or concerns about this Privacy Policy, please contact us at caree@admin.com.
              <br/><br/>
              [End of Privacy Policy]
              <br/>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
