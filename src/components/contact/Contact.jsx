import React from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm('xgegadae');

    return (
        <section className="contact-us">
            <h1 className="title flex">
                <span className="icon-envelope"></span>
                Contact us
            </h1>
            <p className="subtitle">
                Contact us for more information and get notified when i publish something new.
            </p>

            <div className="flex">
                <form className="" onSubmit={handleSubmit}>
                    <div className="flex">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            autoComplete="off"
                            type="email"
                            placeholder="Email Address"
                            id="email"
                            name="email"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="flex" style={{ marginTop: '24px' }}>
                        <label htmlFor="message">Your Message:</label>
                        <textarea
                            required
                            name="message"
                            id="message"
                            placeholder="Message"
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button type="submit" className="submit" disabled={state.submitting}>
                        {state.submitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {state.succeeded && (
                        <p style={{ fontSize: '18px', marginTop: '1.7rem' }}>
                            Your message has been sent successfully{' '}
                        </p>
                    )}
                </form>
                <div className="animation border">animation</div>
            </div>
        </section>
    );
}
