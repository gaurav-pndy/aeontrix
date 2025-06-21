import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white px-4 md:px-6 py-16 pt-28 bg-[#0e001c] ">
      {/* Tag */}
      <div className="relative z-10 mb-4">
        <span className="text-sm px-4 py-1 rounded-full bg-purple-950/30 border border-purple-500 text-purple-300 backdrop-blur-md">
          Your AI Scheduling Assistant
        </span>
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-center !text-4xl sm:!text-5xl lg:!text-6xl !font-bold max-w-4xl ">
        Simplify Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Scheduling
        </span>
        <br />
        with AI-Powered Precision
      </h1>

      {/* Subheading */}
      <p className="relative z-10 mt-2 text-center text-lg text-purple-200 max-w-2xl">
        Effortlessly manage appointments, meetings, and tasks
        <br className="hidden sm:block" />
        with our intelligent scheduling assistant
      </p>

      {/* CTA Button */}
      <div className="relative z-10 mt-2">
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 !rounded-full shadow-lg transition-all duration-300">
          Get Started Free <FiArrowRight />
        </button>
      </div>

      {/* Calendar with glow */}
      <div className="relative z-10 mt-10 w-full max-w-6xl md:px-4">
        <div className="relative rounded-4xl overflow-hidden border-8 md:border-[12px] border-purple-900 shadow-[0_0_60px_20px_rgba(95,97,237,0.4)]">
          <div className="bg-white p-6 ">
            <h2 className="text-center text-black mb-3">
              Begin Your AI Transformation Journey
            </h2>
            <p className="text-center  text-muted">
              Take the first step toward a more efficient, cost-effective
              workforce. Tell us what you want to achieve with AI employees.
            </p>

            <div className=" ">
              <Row>
                <Col md={8}>
                  <Form>
                    <Form.Group controlId="aiDescription">
                      <Form.Label className="text-black">
                        Describe your ideal AI workforce
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        className="border border-black"
                      />
                      <Form.Text className="text-muted">
                        Be specific about your business needs, challenges, and
                        goals
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </Col>

                <Col md={4}>
                  <div className="mb-2 text-black" style={{}}>
                    <strong>Prompt suggestions:</strong>
                  </div>
                  <ul
                    className="list-unstyled text-sm text-muted"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <li className="d-flex align-items-start mb-2">
                      <span>💡 </span>
                      <span>
                        Replace our sales team with AI that can handle
                        international clients
                      </span>
                    </li>
                    <li className="d-flex align-items-start mb-2">
                      <span>💡</span>
                      <span>
                        Create AI marketing specialists that can generate
                        content in multiple languages
                      </span>
                    </li>
                    <li className="d-flex align-items-start mb-2">
                      <span>💡</span>
                      <span>
                        Build an AI HR department that handles recruitment and
                        onboarding
                      </span>
                    </li>
                  </ul>

                  <Button
                    variant="dark"
                    style={{
                      width: "250px",
                      textAlign: "center",
                      margin: "20px auto 20px 10px",
                      display: "block",
                    }}
                  >
                    Generate AI Employee Plan
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
