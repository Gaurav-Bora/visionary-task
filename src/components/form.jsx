import { useState } from 'react';
import '../style/form.css';
import Form from '../assets/images/form.png'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        currentClass: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        mobile: '',
        email: '',
        currentClass: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' }); // Clear previous error message when user starts typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.mobile.trim()) {
            errors.mobile = 'Mobile is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.currentClass.trim()) {
            errors.currentClass = 'Current Class is required';
            isValid = false;
        }

        // You can add more validations as needed

        if (!isValid) {
            setFormErrors(errors);
            return;
        }

        // If form is valid, proceed with form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-3xl mx-auto my-7 px-4 py-8 bg-cardColorr shadowing rounded-lg relative">
            <h2 className="text-2xl font-semibold text-center mb-4 fonting">Get In Touch</h2>
            <img src={Form} className='absolute top-0 right-10 m-2 w-24 h-24' />
            <form className="space-y-4 p-5" onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="name" className="block label fonting">Name *</label>
                    <input type="text" id="name" name="name" className="form-input fonting" value={formData.name} onChange={handleChange} required />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                    <label htmlFor="mobile" className="block label fonting">Mobile *</label>
                    <input type="tel" id="mobile" name="mobile" className="form-input fonting" value={formData.mobile} onChange={handleChange} required />
                    {formErrors.mobile && <p className="text-red-500 text-sm mt-1">{formErrors.mobile}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block label fonting">Email *</label>
                    <input type="email" id="email" name="email" className="form-input fonting" value={formData.email} onChange={handleChange} required />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                    <label htmlFor="current-class" className="block label fonting">Current Class *</label>
                    <input type="text" id="current-class" name="currentClass" className="form-input fonting" value={formData.currentClass} onChange={handleChange} required />
                    {formErrors.currentClass && <p className="text-red-500 text-sm mt-1">{formErrors.currentClass}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="block label fonting">Message</label>
                    <textarea id="message" name="message" rows="4" className="form-textarea fonting" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div>
                    <button type="submit" className="btn-primary fonting">SEND</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
