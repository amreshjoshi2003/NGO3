import React, { useState } from 'react';
import './IDCardDownload.css';

const IDCardDownload = () => {
  const [formData, setFormData] = useState({
    userId: '',
    dob: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.userId.trim()) {
      newErrors.userId = 'User ID is required.';
    }

    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (validate()) {
      alert(`${type} generated for ${formData.userId}`);
      // Handle logic here
    }
  };

  return (
    <div className="id-card-container">
      <button className="header-btn">Print ID Card</button>
      <form className="id-card-form">
        <label>
          User Id :
          <input
            name="userId"
            placeholder="User Id"
            value={formData.userId}
            onChange={handleChange}
          />
          <span className="error">{errors.userId}</span>
        </label>

        <label>
          Date Of Birth :
          <input
            type="date"
            name="dob"
            placeholder="dd-mm-yyyy"
            value={formData.dob}
            onChange={handleChange}
          />
          <span className="error">{errors.dob}</span>
        </label>

        <div className="button-group">
          <button onClick={(e) => handleSubmit(e, 'ID Card')} className="btn-primary">ID Card Download</button>
          <button onClick={(e) => handleSubmit(e, 'Appointment Letter')} className="btn-primary">Appointment Letter</button>
        </div>
      </form>
    </div>
  );
};

export default IDCardDownload;
