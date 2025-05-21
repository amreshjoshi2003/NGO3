import React,{ useState } from 'react';
import "./Header.css"; // ✅ CORRECT
import websitelogo from '../assets/Websitelogo.jpeg'; // Adjust if your image is in src/assets




export default function Header() {
  // State to manage showing the enquiry form, form data, and submission status
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    aadhar: '',
    address: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status
  const [errors, setErrors] = useState({}); // For storing error messages

  // Validate Name and Aadhar Number
  const validate = () => {
    let valid = true;
    let errorMessages = {};

    // Validate Name: Only alphabets, spaces, hyphens, and apostrophes allowed
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(formData.name)) {
      errorMessages.name = 'Invalid Name: Only alphabets and spaces are allowed.';
      valid = false;
    }

    // Validate Aadhar: Must be exactly 12 digits
    const aadharRegex = /^\d{12}$/;
    if (!aadharRegex.test(formData.aadhar)) {
      errorMessages.aadhar = 'Invalid Aadhar Number: It must be exactly 12 digits.';
      valid = false;
    }

    setErrors(errorMessages); // Set the errors
    return valid;
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Validate before submission
    if (validate()) {
      // Log the form data (You can replace this with a real API call to submit data)
      console.log('Form Submitted:', formData);

      // Reset the form (optional)
      setFormData({
        name: '',
        email: '',
        aadhar: '',
        address: '',
        message: ''
      });

      // Set form submission status to true to display the success message
      setIsSubmitted(true);

      // Optionally close the form after submission
      setShowForm(false);
    }
  };

  // Toggle form visibility
  const handleEnquiryButtonClick = () => {
    setShowForm(!showForm); // Toggle form visibility
    setIsSubmitted(false); // Reset submission status if user opens the form again
  };

  return (
    <div className="main_navbar">
      <div className="navbar_relative">
        <i
          className="fa fa-bars"
          id="menu_toggle_btn"
          onClick={() => console.log('Menu toggled!')}
          aria-hidden="true"
        ></i>

        <div className="website_logo">
          <a href="/">
            <img src={websitelogo} alt="Website Logo" />
          </a>
        </div>

        <div className="website_title">जन सहयोग युवा वाहिनी</div>

        <div className="website_social_icon">
          <a
            href="https://www.facebook.com/profile.php?id=100075418586033"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?igsh=1artucp2c6ys0&utm_content=nbdkgn0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </div>

        <div className="donate-btn">
          <button onClick={handleEnquiryButtonClick}>
            {showForm ? 'Close Enquiry Form' : 'Enquiry Now'}
          </button>
        </div>
      </div>

      {/* Conditionally Render Enquiry Form */}
      {showForm && !isSubmitted && (
        <div className="enquiry_form">
          <h2>Enquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Aadhar Number:</label>
              <input
                type="text"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                maxLength="12"
                required
              />
              {errors.aadhar && <p className="error">{errors.aadhar}</p>}
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {/* Display Success Message After Submission */}
      {isSubmitted && (
        <div className="success_message">
          <h3>Thank you! Your enquiry has been submitted successfully.</h3>
        </div>
      )}
    </div>
  );
}
