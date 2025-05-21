import React, { useState } from 'react';
import './MemberApply.css';

const MemberApply = () => {
  const [formData, setFormData] = useState({
    name: '',
    middleName: '',
    surname: '',
    gender: '',
    dob: '',
    fatherName: '',
    motherName: '',
    husbandName: '',
    profession: '',
    bloodGroup: '',
    state: '',
    district: '',
    mobile: '',
    aadhar: '',
    address: '',
    pincode: '',
    email: '',
    photo: null,
    documentType: '',
    documentFile: null,
    declaration: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email.endsWith('@gmail.com')) {
      newErrors.email = 'Only Gmail addresses are allowed.';
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.photo) {
      newErrors.photo = 'Profile picture is required.';
    } else if (!['image/jpeg', 'image/png'].includes(formData.photo.type)) {
      newErrors.photo = 'Only JPG or PNG images are allowed.';
    } else if (formData.photo.size > 2 * 1024 * 1024) {
      newErrors.photo = 'Image must be less than 2MB.';
    }

    if (!formData.documentFile) {
      newErrors.documentFile = 'You must upload a valid ID document.';
    }

    ['name', 'dob', 'fatherName', 'motherName', 'bloodGroup', 'state', 'district', 'address', 'pincode', 'aadhar'].forEach(field => {
      if (!formData[field]) newErrors[field] = 'This field is required.';
    });

    if (!formData.declaration) {
      newErrors.declaration = 'You must accept the declaration to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // handle actual form submission logic here
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Registration Form (India Only)</h2>

      <label>
        First Name*:
        <input name="name" value={formData.name} onChange={handleChange} />
        <span>{errors.name}</span>
      </label>

      <label>
        Middle Name:
        <input name="middleName" value={formData.middleName} onChange={handleChange} />
      </label>

      <label>
        Surname:
        <input name="surname" value={formData.surname} onChange={handleChange} />
      </label>

      <label>
        Gender*:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <label>
        Date of Birth*:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        <span>{errors.dob}</span>
      </label>

      <label>
        Father's Name*:
        <input name="fatherName" value={formData.fatherName} onChange={handleChange} />
        <span>{errors.fatherName}</span>
      </label>

      <label>
        Mother's Name*:
        <input name="motherName" value={formData.motherName} onChange={handleChange} />
        <span>{errors.motherName}</span>
      </label>

      <label>
        Husband's Name:
        <input name="husbandName" value={formData.husbandName} onChange={handleChange} />
      </label>

      <label>
        Profession:
        <input name="profession" value={formData.profession} onChange={handleChange} />
      </label>

      <label>
        Blood Group*:
        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="O-">O-</option>
          <option value="AB-">AB-</option>
        </select>
        <span>{errors.bloodGroup}</span>
      </label>

      <label>
        Country:
        <input value="India" disabled />
      </label>

      <label>
        State*:
        <input name="state" value={formData.state} onChange={handleChange} />
        <span>{errors.state}</span>
      </label>

      <label>
        District*:
        <input name="district" value={formData.district} onChange={handleChange} />
        <span>{errors.district}</span>
      </label>

      <label>
        Mobile Number*:
        <input name="mobile" value={formData.mobile} onChange={handleChange} />
        <span>{errors.mobile}</span>
      </label>

      <label>
        Aadhar Number*:
        <input name="aadhar" value={formData.aadhar} onChange={handleChange} />
        <span>{errors.aadhar}</span>
      </label>

      <label>
        Address*:
        <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        <span>{errors.address}</span>
      </label>

      <label>
        Pin Code*:
        <input name="pincode" value={formData.pincode} onChange={handleChange} />
        <span>{errors.pincode}</span>
      </label>

      <label>
        Email*:
        <input name="email" value={formData.email} onChange={handleChange} />
        <span>{errors.email}</span>
      </label>

      <label>
        Profile Photo*:
        <input type="file" name="photo" accept="image/png, image/jpeg" onChange={handleChange} />
        <span>{errors.photo}</span>
      </label>

      <label>
        Upload Document (Aadhar / PAN / DL / Voter ID / Passport)*:
        <select name="documentType" value={formData.documentType} onChange={handleChange}>
          <option value="">Select Document Type</option>
          <option value="Aadhar">Aadhar Card</option>
          <option value="PAN">PAN Card</option>
          <option value="DL">Driving License</option>
          <option value="Voter">Voter ID</option>
          <option value="Passport">Passport</option>
        </select>
        <input type="file" name="documentFile" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
        <span>{errors.documentFile}</span>
      </label>

      <label className="declaration">
        <input
          type="checkbox"
          name="declaration"
          checked={formData.declaration}
          onChange={handleChange}
        />
        <div className="declaration-text">
          <p>I accept the declaration:</p>
          <ul>
            <li>1. The information provided by me is true and accurate.</li>
            <li>2. I want to join Jan Sahyog Yuva Vahini and actively participate in its activities.</li>
            <li>3. I have not been convicted of any criminal offense and am not involved in any illegal activities.</li>
            <li>4. I will abide by the rules and regulations of Jan Sahyog Yuva Vahini and will not engage in any activity detrimental to the organization.</li>
          </ul>
          <span className="error-text">{errors.declaration}</span>
        </div>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MemberApply;
