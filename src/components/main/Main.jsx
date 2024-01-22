import React from 'react';
import './main.css';
export default function Main() {
    return (
        <main className=" flex">
            <section className="left-section flex">
                <button className="active">All Projects</button>
                <button>HTML & CSS</button>
                <button>Javascript</button>
                <button>React & MUI</button>
                <button>Node & Express</button>
            </section>
            <section className="right-section flex">
                {['1', '2', '3', '4', '5'].map((item, index) => {
                    return (
                        <article key={index} className="card">
                            <img width={266} src="./1.jpg" alt="first-project" />
                            <div style={{ width: '266px' }} className="box">
                                <h1 className="title">Landing Page 2</h1>
                                <p className="subtitle">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nesciunt harum aliquid corporis, commodi rerum non laborum earum
                                    totam quae dicta
                                </p>
                                <div className="icons flex">
                                    <div style={{ gap: '11px' }} className="flex">
                                        <div className="icon-link"></div>
                                        <div className="icon-github"></div>
                                    </div>
                                    <a className="link flex" href="">
                                        more<span className="icon-arrow-right"></span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </main>
    );
}
