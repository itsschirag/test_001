import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';
import { Card } from 'react-bootstrap';
import Footer from './Footer';

function Emp() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  

  return (
    <div className='container p-3 mb-2 top-50 start-50 end-50 translate-middle" maindiv position'>
        <div class="position-absolute top-0 end-0 .position">
             <img src="https://imagizer.imageshack.com/img924/8539/41CN9X.png" border="0" class="img-fluid" alt="Responsive image"/>

        </div>
    
      <ul style={{ listStyleType: 'none' }}>
        <li>
        <div>
           <img  src="https://imagizer.imageshack.com/img924/2219/Zwi0dK.png" border="0" class="img-fluid" alt="Responsive image"/>
        </div>
        </li>
        <li>
        
        <Form>
          <InputGroup className='my-3'>

            {}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search with Name' 
            />
          </InputGroup>
        </Form>

        </li>
        <li>
        <div className='grdiv'>
         {data
        .filter((item) => {
          return (
            search.toLowerCase() === '' ||
            item.name.toLowerCase().includes(search)
          );
        })
        .map((item, index) => (
            <Card key={index} className="mb-3">
              <Card.Body className='gr'>
              <Card.Text>
                  <strong className='itm'>ID :</strong> {item.id}
                </Card.Text>
                <Card.Text>
                  <strong>Name :</strong> {item.name}
                </Card.Text>
                <Card.Text>
                  <strong>Email :</strong> {item.email}
                </Card.Text>
                <Card.Text>
                  <strong>DOB :</strong> {item.dob}
                </Card.Text>
                <Card.Text>
                  <strong>Job Role :</strong> {item.role}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
    </div>

        </li>
     </ul>

      
     
        
        
     <Footer />
    </div>
  );
}

export default Emp;