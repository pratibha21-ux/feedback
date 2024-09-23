"use client";
import React, { useState } from 'react';
import styles from '../styles/FeedbackForm.module.css';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState({
    experience: '',
    satisfaction: '',
    prices: '',
    support: '',
    recommendation: '',
    expectations: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Customer Feedback Form</h2>
      <p className={styles.formDescription}>
        Please take a few minutes to give us feedback about our service by filling in this short Customer Feedback Form.<br/>
        We thank you for your participation.
      </p>

      <form onSubmit={handleSubmit}>
        <table className={styles.feedbackTable}>
          <thead>
            <tr>
              <th></th>
              <th>Very Good</th>
              <th>Good</th>
              <th>Fair</th>
              <th>Poor</th>
              <th>Very Poor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>How would you rate your overall experience?</td>
              <td><input type="radio" name="experience" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="experience" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="experience" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="experience" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="experience" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>How satisfied are you with the service?</td>
              <td><input type="radio" name="satisfaction" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="satisfaction" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="satisfaction" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="satisfaction" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="satisfaction" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>How would you rate our prices?</td>
              <td><input type="radio" name="prices" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="prices" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="prices" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="prices" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="prices" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>How satisfied are you with our support?</td>
              <td><input type="radio" name="support" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="support" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="support" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="support" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="support" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>Would you recommend our product/service to others?</td>
              <td><input type="radio" name="recommendation" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>How would you rate the quality of customer support?</td>
              <td><input type="radio" name="recommendation" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>How satisfied are you with the variety of payment methods available?</td>
              <td><input type="radio" name="recommendation" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>How would you rate the quality of customer support?</td>
              <td><input type="radio" name="recommendation" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="very-poor" onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>How smooth was the checkout process?</td>
              <td><input type="radio" name="recommendation" value="very-good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="good" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="fair" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="poor" onChange={handleChange} /></td>
              <td><input type="radio" name="recommendation" value="very-poor" onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>

        <div className={styles.textAreaContainer}>
          <label htmlFor="expectations" className={styles.textLabel}>
          Do you have any additional feedback or suggestions for us?             </label>
          <textarea
            id="expectations"
            name="expectations"
            className={styles.textArea}
            value={feedback.expectations}
            onChange={handleChange}
            placeholder="Enter your feedback..."
          ></textarea>
        </div>

        <div className={styles.emailContainer}>
          <label htmlFor="email" className={styles.textLabel}>
            Email address
          </label>
          {/* <p className={styles.emailHint}>Only if you want to hear more from us.</p> */}
          <input
            type="email"
            id="email"
            name="email"
            className={styles.emailInput}
            value={feedback.email}
            onChange={handleChange}
            placeholder="Enter your email..."
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          SEND FEEDBACK
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;


// "use client";
// import React, { useState } from 'react';
// import styles from '../styles/FeedbackForm.module.css';
// import { table } from 'console';

// const FeedbackForm: React.FC = () => {
//   const [feedback, setFeedback] = useState({
//     experience: '',
//     satisfaction: '',
//     prices: '',
//     support: '',
//     recommendation: '',
//     expectations: '',
//     email: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFeedback({ ...feedback, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Feedback submitted:', feedback);
//   };

//   return (
//     <div className={styles.formContainer}>
//       <h2 className={styles.formTitle}>Customer Feedback Form</h2>
//       <p className={styles.formDescription}>
//         Please take a few minutes to give us feedback about our service by filling in this short Customer Feedback Form. 
//         We thank you for your participation.
//       </p>
      
//       <table className={styles.feedbackTable}>
//         <thead>
//           <tr>
//             <th></th>
//             <th>Very Good</th>
//             <th>Good</th>
//             <th>Fair</th>
//             <th>Poor</th>
//             <th>Very Poor</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>How would you rate your overall experience?</td>
//             <td><input type="radio" name="experience" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="experience" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="experience" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="experience" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="experience" value="very-poor" onChange={handleChange} /></td>
//           </tr>

//           <tr>
//             <td>How satisfied are you with the service?</td>
//             <td><input type="radio" name="satisfaction" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="satisfaction" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="satisfaction" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="satisfaction" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="satisfaction" value="very-poor" onChange={handleChange} /></td>
//           </tr>

//           <tr>
//             <td>How would you rate our prices?</td>
//             <td><input type="radio" name="prices" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="prices" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="prices" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="prices" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="prices" value="very-poor" onChange={handleChange} /></td>
//           </tr>

//           <tr>
//             <td>How satisfied are you with our support?</td>
//             <td><input type="radio" name="support" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="very-poor" onChange={handleChange} /></td>
//           </tr>
//           <tr>
//             <td>How satisfied are you with our support?</td>
//             <td><input type="radio" name="support" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="very-poor" onChange={handleChange} /></td>
//           </tr>
//           <tr>
//             <td>How satisfied are you with our support?</td>
//             <td><input type="radio" name="support" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="very-poor" onChange={handleChange} /></td>
//           </tr>
//           <tr>
//             <td>How satisfied are you with our support?</td>
//             <td><input type="radio" name="support" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="very-poor" onChange={handleChange} /></td>
//           </tr>
//           <tr>
//             <td>How satisfied are you with our support?</td>
//             <td><input type="radio" name="support" value="very-good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="good" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="fair" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="poor" onChange={handleChange} /></td>
//             <td><input type="radio" name="support" value="very-poor" onChange={handleChange} /></td>
//           </tr>
//           <tr>
//               <td>Would you recommend our product/service to others?</td>
//               <td><input type="radio" name="recommendation" value="very-good" onChange={handleChange} /></td>
//               <td><input type="radio" name="recommendation" value="good" onChange={handleChange} /></td>
//               <td><input type="radio" name="recommendation" value="fair" onChange={handleChange} /></td>
//               <td><input type="radio" name="recommendation" value="poor" onChange={handleChange} /></td>
//               <td><input type="radio" name="recommendation" value="very-poor" onChange={handleChange} /></td>
//             </tr>
//           </tbody>
//         </table>

//         <div className={styles.textAreaContainer}>
//           <label htmlFor="expectations" className={styles.textLabel}>
//             What should we change in order to live up to your expectations?
//           </label>
//           <textarea
//             id="expectations"
//             name="expectations"
//             className={styles.textArea}
//             value={feedback.expectations}
//             onChange={handleChange}
//             placeholder="Enter your feedback..."
//           ></textarea>
//         </div>

//         <div className={styles.emailContainer}>
//           <label htmlFor="email" className={styles.textLabel}>
//             Email address
//           </label>
//           <p className={styles.emailHint}>Only if you want to hear more from us.</p>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className={styles.emailInput}
//             value={feedback.email}
//             onChange={handleChange}
//             placeholder="Enter your email..."
//           />
//         </div>

//         <button type="submit" className={styles.submitButton}>
//           SEND FEEDBACK
//         </button>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FeedbackForm;
