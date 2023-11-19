import React, {useState,useEffect} from 'react';
import '../assets/css/Home.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import ImageSlider from './Slider';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [is1Open, set1Open] = useState(false);
  const [is2Open, set2Open] = useState(false);
  const [is3Open, set3Open] = useState(false);
  const [is4Open, set4Open] = useState(false);
  useEffect(() => {
      // Simulate loading delay for demonstration purposes
      const timer = setTimeout(() => {
          setIsLoaded(true);
      }, 1); // Adjust the delay as needed

      return () => clearTimeout(timer);
  }, []);

    const open1 = () => {
        set1Open(true);
    };

    const close1 = () => {
        set1Open(false);
    };

    const open2 = () => {
      set2Open(true);
  };

  const close2 = () => {
      set2Open(false);
  };const open3 = () => {
    set3Open(true);
};

const close3 = () => {
    set3Open(false);
};const open4 = () => {
  set4Open(true);
};

const close4= () => {
  set4Open(false);
};
    
  return (
    <>
    <div className={`banner ${isLoaded ? 'fade-in' : ''}`}>
   <Navigation/>  
    
   <div className="banner1">
            <div className="navebar">
            </div>
            <div className="content1">
                <h1 className='hometitle'>CareBee</h1>
                <p className='hometitle'>Search for a variety of care services for your loved ones.</p>
                <div>
                        <button type="button" onClick={open1}><div className='span1'></div>Diet</button>
                        <button type="button" onClick={open2}> <div className='span1'></div>Eco-Haven</button>
                        <button type="button" onClick={open3}> <div className='span1'></div>Sanitation</button>
                        <button type="button" onClick={open4}><div className='span1'></div>Mobilizing</button>
                    </div>
            </div>
        </div>
        {is1Open && (
          <div className="modal">
          <div className="modal-content">
          <div className="card" key="img2">
<img src={img1} alt="Image 2" className="card-image" />
<div className="card-content">
<h2 className="card-title">Diet</h2>
<p className="card-description">Ageless melody of nourishment, eat healthy</p>
<Link to="/diet" className="read-more-link">
Read More
</Link>
</div>
</div>
          <button className='button-29' onClick={close1}>Close</button>
          </div>
      </div>
            )}
            {is2Open && (
              <div className="modal">
              <div className="modal-content">
              <div className="card" key="img2">
    <img src={img2} alt="Image 2" className="card-image" />
    <div className="card-content">
    <h2 className="card-title">Eco-Haven</h2>
    <p className="card-description">In embracing nature, seniors find well-being.</p>
    <Link to="/Eco" className="read-more-link">
    Read More
    </Link>
    </div>
    </div>
              <button className='button-29' onClick={close2}>Close</button>
              </div>
          </div>
                )}{is3Open && (
                  <div className="modal">
                  <div className="modal-content">
                  <div className="card" key="img2">
        <img src={img3} alt="Image 2" className="card-image" />
        <div className="card-content">
        <h2 className="card-title">Sanitation</h2>
        <p className="card-description">Cleanliness and hygiene for a healthy environment.</p>
        <Link to="/sanitation" className="read-more-link">
        Read More
        </Link>
        </div>
        </div>
                  <button className='button-29' onClick={close3}>Close</button>
                  </div>
              </div>
                    )}{is4Open && (
                      <div className="modal">
                      <div className="modal-content">
                      <div className="card" key="img2">
            <img src={img4} alt="Image 2" className="card-image" />
            <div className="card-content">
            <h2 className="card-title">Empowering</h2>
            <p className="card-description">Mobilizing senior citizens and reshaping life.</p>
            <Link to="/Physio" className="read-more-link">
            Read More
            </Link>
            </div>
            </div>
                      <button className='button-29' onClick={close4}>Close</button>
                      </div>
                  </div>
                        )}

            
     
    <Footer />
    </div>
    </>
  );
}

export default Home;