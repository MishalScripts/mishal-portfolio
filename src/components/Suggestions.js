import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './Suggestions.css';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    'General Feedback',
    'Bug Report',
    'Feature Request',
    'Collaboration',
    'Job Opportunity',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save to localStorage
    const suggestions = JSON.parse(localStorage.getItem('suggestions') || '[]');
    const newSuggestion = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    suggestions.push(newSuggestion);
    localStorage.setItem('suggestions', JSON.stringify(suggestions));

    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="suggestions-section" id="suggestions">
      <h2 className="section-title">💡 Suggestions & Feedback</h2>
      
      <div className="suggestions-container">
        <div className="suggestions-intro">
          <h3>Have an idea or feedback?</h3>
          <p>
            I'd love to hear from you! Whether it's a suggestion for improvement, 
            a bug you've found, a collaboration opportunity, or just general feedback, 
            your input is valuable.
          </p>
        </div>

        {submitted && (
          <div className="success-message">
            <FaCheckCircle />
            <p>Thank you! Your suggestion has been received successfully.</p>
          </div>
        )}

        <form className="suggestions-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? 'error' : ''}
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <span className="error-message">{errors.category}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Share your thoughts, ideas, or feedback..."
              rows="6"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            <FaPaperPlane /> Send Suggestion
          </button>
        </form>

        <div className="suggestions-note">
          <p>
            <strong>Note:</strong> Your suggestions are stored locally and help me improve. 
            For urgent matters, please use the contact section below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
