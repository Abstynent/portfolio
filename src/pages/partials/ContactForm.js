import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        if (!name) {
            setErrors({ ...errors, name: 'Name is required' });
        }

        if (!email) {
            setErrors({ ...errors, email: 'Email is required' });
        } else if (!isValidEmail(email)) {
            setInvalidEmail(true);
        }

        if (!message) {
            setErrors({ ...errors, message: 'Message is required' });
        }

        // If there are no errors, you can proceed with form submission
        if (Object.keys(errors).length === 0 && !invalidEmail) {
            // Place for backend code to handle submission

            setName('');
            setEmail('');
            setMessage('');
        }
    };

    const isValidEmail = (email) => {
        // A simple email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setInvalidEmail(false);
                    }}
                    isInvalid={!!errors.email || invalidEmail}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.email || (invalidEmail && 'Invalid email address')}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as='textarea'
                    rows={3}
                    placeholder='Enter your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.message}
                </Form.Control.Feedback>
            </Form.Group>

            <button className='btn-custom' type='submit'>
                Submit
            </button>
        </Form>
    );
};

export default ContactForm;
