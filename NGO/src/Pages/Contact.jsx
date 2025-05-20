import React, { useState } from "react";
import "./Contact.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    topic: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData({ ...formData, description: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Row 1: Name and Mobile */}
        <div className="form-row">
          <div>
            <label>
              Name<span className="required">*</span>:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>
              Mobile No.<span className="required">*</span>:
            </label>
            <input
              type="text"
              name="mobile"
              placeholder="Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2: Email and Topic */}
        <div className="form-row">
          <div>
            <label>
              Email<span className="required">*</span>:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>
              Topic<span className="required">*</span>:
            </label>
            <input
              type="text"
              name="topic"
              placeholder="Topic"
              value={formData.topic}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 3: CKEditor */}
        <div className="form-row single">
          <label>
            Description<span className="required">*</span>:
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.description}
            onChange={handleEditorChange}
          />
        </div>

        {/* Submit Button */}
        <div className="submit-button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
