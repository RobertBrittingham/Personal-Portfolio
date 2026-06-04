import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import contactImg from '../assets/images/getInTouch.png'

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt='Contact'
                />
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>

                  <form
                    action='https://formsubmit.co/robertbrittingham04@gmail.com'
                    method='POST'
                  >
                    {/* Hidden Settings */}
                    <input
                      type='hidden'
                      name='_subject'
                      value='New Portfolio Contact Form Submission'
                    />

                    <input
                      type='hidden'
                      name='_next'
                      value='https://robertbrittingham.github.io/Personal-Portfolio/'
                    />

                    <input type='hidden' name='_captcha' value='false' />

                    <Row>
                      <Col xs={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          name='First Name'
                          value={formDetails.firstName}
                          placeholder='First Name'
                          required
                          onChange={e =>
                            onFormUpdate('firstName', e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          name='Last Name'
                          value={formDetails.lastName}
                          placeholder='Last Name'
                          onChange={e =>
                            onFormUpdate('lastName', e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className='px-1'>
                        <input
                          type='email'
                          name='Email'
                          value={formDetails.email}
                          placeholder='Email Address'
                          required
                          onChange={e => onFormUpdate('email', e.target.value)}
                        />
                      </Col>

                      <Col xs={12} sm={6} className='px-1'>
                        <input
                          type='tel'
                          name='Phone'
                          value={formDetails.phone}
                          placeholder='Phone Number'
                          onChange={e => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>

                      <Col xs={12} className='px-1'>
                        <textarea
                          name='Message'
                          rows='6'
                          value={formDetails.message}
                          placeholder='Message'
                          required
                          onChange={e =>
                            onFormUpdate('message', e.target.value)
                          }
                        ></textarea>

                        <button type='submit'>
                          <span>Send Message</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
