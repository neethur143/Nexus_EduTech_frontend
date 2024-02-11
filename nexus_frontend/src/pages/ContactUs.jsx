import React from 'react'
import Footer from '../component/Footer'
export default function ContactUs() {
  return (
    <div>
        <div className="container">
              {/* <section id="scrollspyContact" classname="py-5 py-xl-8 bsb-section-py-xxl-1">
                  <div classname="container">
                      <div classname="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                          <div classname="col-12 col-lg-6">
                              <img classname="img-fluid rounded " loading="lazy" src="images/contactus.jpg" style= {{height:'400px',width:'800px',marginTop:'20px'}} />
                          </div>
                          
                          <div classname="col-12 col-lg-6">
                              <div classname="row justify-content-xl-center">
                                  <div classname="col-12 col-xl-11">
                                      <h2 classname="h1 mb-3">Get in touch</h2>
                                      <p classname="lead fs-4 text-secondary mb-5">We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.</p>
                                      <div classname="d-flex mb-4">
                                          <div classname="me-4 text-primary">
                                              
                                          </div>
                                          <div>
                                              <h4 classname="mb-3">Address</h4>
                                              <address classname="mb-0 text-secondary">8014 Edith Blvd NE, Albuquerque, New York, United States</address>
                                          </div>
                                      </div>
                                      <div classname="d-flex mb-4">
                                          <div classname="me-4 text-primary">
                                              
                                          </div>
                                          <div>
                                              <h4 classname="mb-3">Phone</h4>
                                              <p classname="mb-0">
                                                  <a classname="link-secondary text-decoration-none" href="tel:+15057922430">(505) 792-2430</a>
                                              </p>
                                          </div>
                                      </div>
                                      <div classname="d-flex">
                                          <div classname="me-4 text-primary">
                                              
                                          </div>
                                          <div>
                                              <h4 classname="mb-3">E-Mail</h4>
                                              <p>
                                                  <a classname="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">demo@yourdomain.com</a>
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section> */}
              <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Contact Form #03</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker" />
                </div>
                <div className="text">
                  <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone" />
                </div>
                <div className="text">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane" />
                </div>
                <div className="text">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe" />
                </div>
                <div className="text">
                  <p><span>Website</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Contact Us</h3>
                <div id="form-message-warning" className="mb-4" /> 
                <div id="form-message-success" className="mb-4">
                  Your message was sent, thank you!
                </div>
                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="name">Full Name</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6"> 
                      <div className="form-group">
                        <label className="label" htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="#">Message</label>
                        <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                        <div className="submitting" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 d-flex " >
              <div className="info-wrap w-100 pt-3 mt-5 img" >
                <img className="info-wrap w-100 p-5 img"  src='images/contactus.jpg'  style={{ height:'400px',width:'800px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

              

        </div>
        <Footer />
    </div>
  )
}
