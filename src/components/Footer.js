import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/dashboard');
    };

    const handleEmpClick = () => {
        navigate('/emp');
    };
  return (
    <footer style={{backgroundColor:'grey'}} className="fixed-bottom bg-light p-3 d-flex justify-content-around">
      <button className="btn btn-secondary" onClick={handleHomeClick}>
        <FontAwesomeIcon icon={faHome} />
      </button>
      <button className="btn btn-secondary" onClick={handleEmpClick}>
        <FontAwesomeIcon icon={faUser} />
      </button>
    </footer>
  );
};

export default Footer;
