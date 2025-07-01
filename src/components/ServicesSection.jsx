import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Table } from 'react-bootstrap';

const ServicesSection = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Data Scientist', 'ML Engineer', 'NLP Specialist', 'AI Analyst', 'Robotics Expert'];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section
      id="services"
      className="section content-section"
    >
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
        <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',maxWidth:'1350px' }}>
         
          <h1>List of AI Employees</h1>
          <p>Feature Comparison</p>
          <br></br>

          <Row>
            <Col md={4} className="mb-4">
              <Card
                className="h-100 shadow"
                style={{
                  borderRadius: '15px',
                  border: '1px solid #e0e0e0',
                  backgroundColor: '#f5f5f5',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <Card.Body>
                  <Card.Title><br></br>AI Development Team<br></br></Card.Title>
                 <br></br>

                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedOption(option)}
                      style={{
                        color: selectedOption === option ? 'white' : 'black',
                        padding: '10px 5px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                        cursor: 'pointer',
                        backgroundColor: selectedOption === option ? '#000305' : '#f8f9fa',
                        border: selectedOption === option ? '1px #111111' : '1px  solid #e0e0e0',
                        display: 'flex',
                        alignItems: 'left',
                        gap: '25px',
                        marginLeft: '25px',
                        marginRight: '25px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Form.Check
                        type="radio"
                        name="ai-role"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleChange}
                        label={option}
                        style={{
                          color: selectedOption === option ? 'white' : 'black',
                          margin: 0,
                          width: '100%',
                          marginLeft: '5px',
                          textAlign: 'left',
                          gap: '15px'
                        }}
                        className="d-flex align-items-center"
                        custom
                      />
                      <style>
                        {`
                          .form-check-input {
                            margin-right: 10px !important;
                          }
                          .form-check-label {
                            margin-left: 10px !important;
                          }
                        `}
                      </style>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            <Col md={8} className="mb-4 px-0">
              <Card
                className="h-100 shadow"
                style={{
                  borderRadius: '15px',
                  border: '1px solid #e0e0e0',
                  backgroundColor: '#f5f5f5',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  width: '98%',
                  marginLeft: '10px',
                  marginRight: '10px'
                }}
              >
                <Card.Body className="p-0"><br></br>
                  <Card.Title className="px-3 pt-3" style={{marginRight:'400px'}}>AI Implementation & Integration</Card.Title>
                  <br></br>
                  <Card.Text className="p-0">
                    <Table 
                      className="text-center mb-0" 
                      style={{ 
                        color: 'black', 
                        width: '100%',
                        fontSize: '14px',
                        marginBottom: '0',
                        
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={{ 
                            width: '33.33%', 
                            color: 'black', 
                            borderBottom: '2px solid #dee2e6', 
                            padding: '8px',
                           
                            
                          }}>Metric</th>
                          <th style={{ 
                            width: '33.33%', 
                            color: 'black', 
                            borderBottom: '2px solid #dee2e6', 
                            padding: '8px',
                         
                          }}>Human Employees</th>
                          <th style={{ 
                            width: '33.33%', 
                            color: 'black', 
                            borderBottom: '2px solid #dee2e6', 
                            padding: '8px',
                          
                          }}>AI Employees</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>Working Hours</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>40 hours/week</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>168 hours/week</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>Response Time</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>24 hours</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>0.5 seconds</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>Annual Cost</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>$85,000</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>$12,000</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>Error Rate</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>4.2%</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>0.01%</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>Sick Days</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>8-12 days/year</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>0 days/year</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>Learning Curve</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>3-6 months</td>
                          <td style={{ padding: '8px', borderBottom: '1px solid #dee2e6' }}>Instant</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ServicesSection;
