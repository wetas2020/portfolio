import React from 'react';
import './contact.css';
export default function Contact() {
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
                <form className="" action="">
                    <div className="flex">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" placeholder="Email Address" id="email" name="email" />
                    </div>
                    <div className="flex" style={{ marginTop: '24px' }}>
                        <label htmlFor="message">Your Message:</label>
                        <textarea
                            required
                            name="message"
                            id="message"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button className="submit">Submit</button>
                </form>
                <div className="animation border">animation</div>
            </div>
        </section>
    );
}
