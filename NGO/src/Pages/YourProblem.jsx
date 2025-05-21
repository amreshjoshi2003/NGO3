import React, { useState } from 'react';
import './ComplaintForm.css';

const YourProblem = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    message: '',
    description: '',
    videoUrl: '',
    document1: null,
    document2: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send this data to a backend server using Axios or Fetch
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Complain / Suggestion</h2>

      <div className="form-group two-column">
        <div>
          <label htmlFor="name">Name<span className="required">*</span>:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mobile">Mobile No.<span className="required">*</span>:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Mobile No."
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="city">City<span className="required">*</span>:</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message<span className="required">*</span>:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write a message...."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description<span className="required">*</span>:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="videoUrl">Video Url<span className="required">*</span>:</label>
        <textarea
          id="videoUrl"
          name="videoUrl"
          placeholder="Video URL"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group upload-wrapper">
        <label>Upload Documents<span className="required">*</span>:</label>
        <div className="upload-grid">
          <label htmlFor="document1" className="upload-box">
            <span className="upload-icon">+</span>
            <span className="upload-text">Upload</span>
            <input
              type="file"
              id="document1"
              name="document1"
              className="file-input"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="document2" className="upload-box">
            <span className="upload-icon">+</span>
            <span className="upload-text">Upload</span>
            <input
              type="file"
              id="document2"
              name="document2"
              className="file-input"
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>

      <div className="submit-wrapper">
        <button type="submit" className="submit-button">SUBMIT</button>
      </div>
    </form>
  );
};

export default YourProblem;
