
 
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import 'bootstrap/dist/css/bootstrap.min.css';
 
// const EmailForm = () => {
//   const form = useRef();
 
//   const sendEmail = (e) => {
//     e.preventDefault();
 
//     emailjs
//       .sendForm('service_ofrktg5', 'template_9lzti9b', form.current, {
//         publicKey: 'j5GB2pyEB82HIbWcw',
//       })
//       .then(
//         () => {
//           alert('Successfully Send !!');
//         },
//         (error) => {
//           alert('FAILED...', error.text);
//         },
//       );
//   };
 
//   return (
//     <form ref={form} onSubmit={sendEmail} className="container">
//       <div className="row">
//         <div className="col text-center mb-5">
//           <h2>Announcement</h2>
//         </div>
//       </div>
     
//       <div className="row">
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="user_email">Email</label>
//             <input type="email" className="form-control" id="user_email" name="user_email" />
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <div className="form-group">
//             <label >CC </label>
//             <input  className="form-control"  name="CC_email" />
//           </div>
//         </div>
//       </div>
     
//       <div className="row">
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea className="form-control" id="message" name="message" rows="3"></textarea>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <button type="submit" className="btn btn-primary btn-block">Send</button>
//         </div>
//       </div>
//     </form>
//   );
// };
 
// export default EmailForm;

import React, { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const EmailForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm('service_ofrktg5', 'template_9lzti9b', form.current, {
        publicKey: 'j5GB2pyEB82HIbWcw',
      })
      .then(
        () => {
          setSuccessMessage('Successfully Send !!');
          setTimeout(() => {
            setMessage('');
          }, 2000);
        },
        (error) => {
          setSuccessMessage('FAILED...', error.text);
          setTimeout(() => {
            setMessage('');
          }, 2000);
        },
      );
  };
 
  return (
    <form ref={form} onSubmit={sendEmail} className="container">
      <div className="row">
        <div className="col text-center mb-5">
          <h2>Announcement</h2>
        </div>
      </div>
     
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" className="form-control" id="user_email" name="user_email" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label >CC </label>
            <input  className="form-control"  name="CC_email" />
          </div>
        </div>
      </div>
     
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" rows="3"></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="submit" className="btn btn-primary btn-block">Send</button>
        </div>
      </div>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
    </form>
  );
};
 
export default EmailForm;