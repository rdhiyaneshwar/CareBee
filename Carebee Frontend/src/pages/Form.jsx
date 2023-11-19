import React, { useState } from 'react';
import '../assets/css/Form.css';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../services/api';

function Form() {
  const [formData, setFormData] = useState({
    id:0,
    name: '',
    dob: '',
    gender: '',
    address: '',
    email: '',
    phone: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhone: '',
    emergencyContactAddress: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addProduct(formData); 
        
        console.log(res.data);

          navigate('/dash');

      
    } catch (error) {
      console.error("Error during registration:", error);
    }
  
  };

  return (
    <>
      <Navigation />
      <Social/>
      <div className='body1'>
        <main className='main1'>
          <div>
            <h1 className='formel'>Elderly Care Form</h1>
            <p id="description">Please provide the following information:</p>
          </div>
          
          <form onSubmit={handleSubmit} className='formjs'>

            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="gender" className="form-label">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="form-input"
            />
<label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <div>
              <h3 id="description">Emergency Contact</h3>
              <label htmlFor="emergencyContactName" className="form-label">Name</label>
              <input
                type="text"
                id="emergencyContactName"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                required
                className="form-input"
              />

              <label htmlFor="emergencyContactRelationship" className="form-label">Relationship</label>
              <input
                type="text"
                id="emergencyContactRelationship"
                name="emergencyContactRelationship"
                value={formData.emergencyContactRelationship}
                onChange={handleInputChange}
                required
                className="form-input"
              />

              <label htmlFor="emergencyContactPhone" className="form-label">Contact Phone</label>
              <input
                type="tel"
                id="emergencyContactPhone"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleInputChange}
                required
                className="form-input"
              />

              <label htmlFor="emergencyContactAddress" className="form-label">Contact Address</label>
              <input
                type="text"
                id="emergencyContactAddress"
                name="emergencyContactAddress"
                value={formData.emergencyContactAddress}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <label htmlFor="dropdownValue" className="form-label">Choose Service</label>
            <select
              id="dropdownValue"
              name="dropdownValue"
              value={formData.dropdownValue}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="option1">Eco-Haven</option>
              <option value="option2">Diet</option>
              <option value="option3">Sanitation</option>
              <option value="option4">Mobilizing</option>
            </select>

            <input
              type="submit"
              value="Submit"
              className="button-29"
            />
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Form;
