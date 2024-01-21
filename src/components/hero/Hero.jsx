import React from 'react';
import './hero.css';
export default function Hero() {
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <img src="./icon.png" className="avatar" alt="avatar" />
                    <div className="icon-verified"></div>
                </div>
                <h1 className="title">Software engineer, geek and musician.</h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit incidunt
                    necessitatibus exercitationem soluta consequuntur quos iusto? Nihil eveniet
                    recusandae vero voluptate fugiat, et consequuntur magnam modi eaque quisquam
                    sapiente aperiam.
                </p>
                <div className="all-icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>
            <div className="right-section animation border">animation</div>
        </section>
    );
}
