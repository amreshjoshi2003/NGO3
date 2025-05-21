import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    pancard: "",
    address: "",
    amount: "",
    documentType: "",
    documentNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="donate-form-container">
      <h2>Donate Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>
              Mobile No. <span className="required">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Email (optional):</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Pancard No. (optional):</label>
            <input
              type="text"
              name="pancard"
              placeholder="Pancard Number"
              value={formData.pancard}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row single">
          <label>
            Address <span className="required">*</span>
          </label>
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div>
            <label>Photo (optional):</label>
            <input type="file" name="photo" onChange={handleChange} />
          </div>
          <div>
            <label>
              Amount <span className="required">*</span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>
              Document Type <span className="required">*</span>
            </label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
              <option value="dl">Driving License</option>
              <option value="voter">Voter ID</option>
              <option value="passport">Passport</option>
            </select>
          </div>
          <div>
            <label>
              Document Number <span className="required">*</span>
            </label>
            <input
              type="text"
              name="documentNumber"
              placeholder="Document Number"
              value={formData.documentNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>
              Document Front <span className="required">*</span>
            </label>
            <input type="file" name="docFront" onChange={handleChange} required />
          </div>
          <div>
            <label>
              Document Back <span className="required">*</span>
            </label>
            <input type="file" name="docBack" onChange={handleChange} required />
          </div>
        </div>

        <div className="submit-button">
          <button type="submit">DONATE</button>
        </div>
      </form>
    </div>
  );
};

export default Donate;
