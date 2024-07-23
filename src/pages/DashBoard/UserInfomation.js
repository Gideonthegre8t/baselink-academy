import React, { useState } from 'react';
import "../../pages/DashBoard/index.css"
import profile from "../../../src/assets/images/profile.png"

const countries = [
  { name: 'Nigeria', cities: ['Lagos', 'Abuja', 'Kano'] },
  { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago'] },
  // Add more countries and cities as needed
];

function UserInformation() {
  const [userData, setUserData] = useState({
    fullName: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    homeAddress: '',
    country: 'Nigeria',
    city: 'Lagos'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const selectedCity = countries.find(country => country.name === selectedCountry).cities[0];
    setUserData({ ...userData, country: selectedCountry, city: selectedCity });
  };

  const handleSubmit = () => {
    // Save the data (e.g., send it to a server or update the dashboard)
    console.log('User data saved:', userData);
  };

  return (
    <section id="user-information">
    
<div className="overview-prefix prefix">
  <img src={profile} alt="/" />
<h4>Profile</h4>
</div>

        <div className='user-info-wrapper'>               <h2 className='user-info-header'>Personal Information</h2><div className="personal-information">

        <div className='user-info-label'> 
          <label>
            Full Name:
            <input type="text" name="fullName" value={userData.fullName} onChange={handleChange} />
          </label>
        </div>
        <div className='user-info-label'>
          <label>
            Username:
            <input type="text" name="username" value={userData.username} onChange={handleChange} />
          </label>
        </div>
        <div className='user-info-label'>
          <label >
            Password:
            <input type="password" name="password" value={userData.password} onChange={handleChange} />
          </label>
        </div>
        <div className='user-info-label'>
          <label>
            Email:
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
          </label>
        </div>
      </div>

      <h2 className='user-info-header contact-information-header'>Contact Information</h2>
      <div className="contact-information">
        <div className='user-info-label'>
          <label>
            Phone:
            <input type="tel" name="phone" value={userData.phone} onChange={handleChange} />
          </label>
        </div>
        <div className='user-info-label'>
          <label>
            Home Address (optional):
            <input type="text" name="homeAddress" value={userData.homeAddress} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label className='country'>
            Country:
            <select name="country" value={userData.country} onChange={handleCountryChange}>
              {countries.map(country => (
                <option key={country.name} value={country.name}>{country.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className='user-info-label'>
          <label className='city'>
            City:
            <select name="city" value={userData.city} onChange={handleChange}>
              {countries.find(country => country.name === userData.country).cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <button className="save-changes" onClick={handleSubmit}>Save Information</button>

      </div>

    </section>
  );
}

export default UserInformation;
