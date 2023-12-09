import React from 'react';
import './Dashboard.css';

import Footer from './Footer';

const Dashboard = ({log}) => {
  return (
    
    <div className='p-3 mb-2 top-50 start-50 end-50 translate-middle" maindiv position'>
      <div class="position-absolute top-0 end-0">
      <img src="https://imagizer.imageshack.com/img924/8539/41CN9X.png" border="0" class="img-fluid" alt="Responsive image"/> 
      
      </div>
      <div>
      <img  src="https://imagizer.imageshack.com/img924/2219/Zwi0dK.png" border="0" class="img-fluid" alt="Responsive image"/>
      </div>
      <div class="card grdiv ">
      
        <h2>Employee Productivity Dashboard</h2>
      
      <div class="card-body floating grdiv">
        
      <p align="left" class="card-text">Productivity on Monday<span className='pernum'><p>4%</p></span> </p>
      <p align="left" class="card-text">Productivity on Tuesday<span className='pernum'><p>4%</p></span> </p>
      <p align="left" class="card-text">Productivity on Wednesday<span className='pernum'><p>4%</p></span> </p>
      <p align="left" class="card-text">Productivity on Thursday<span className='pernum'><p>4%</p></span> </p>
      <p align="left" class="card-text">Productivity on Friday<span className='pernum'><p>4%</p></span> </p>
      <p align="left" class="card-text">Productivity on Saturday<span className='pernum'><p>4%</p></span> </p>
      </div>
      </div> 

      <Footer />
    </div>
  );
};

export default Dashboard;
