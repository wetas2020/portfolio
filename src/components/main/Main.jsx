import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';

export default function Main() {
    const [currentActive, setCurrentActive] = useState('all');
    const [projects, setProjects] = useState(myProjects);
    return (
        <main className=" flex">
            <section className="left-section flex">
                <button
                    className={currentActive === 'all' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('all');
                        setProjects(myProjects);
                    }}
                >
                    All Projects
                </button>
                <button
                    className={currentActive === 'css' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('css');
                        const filteredProjects = myProjects.filter((item) => {
                            const arr = item.category.filter((myItem) => {
                                return myItem === 'css';
                            });
                            return arr[0] === 'css';
                        });
                        setProjects(filteredProjects);
                    }}
                >
                    HTML & CSS
                </button>
                <button
                    className={currentActive === 'javascript' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('javascript');
                        const filteredProjects = myProjects.filter((item) => {
                            const arr = item.category.filter((myItem) => {
                                return myItem === 'javascript';
                            });
                            return arr[0] === 'javascript';
                        });
                        setProjects(filteredProjects);
                    }}
                >
                    Javascript
                </button>
                <button
                    className={currentActive === 'react' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('react');
                        const filteredProjects = myProjects.filter((item) => {
                            const arr = item.category.filter((myItem) => {
                                return myItem === 'react';
                            });
                            return arr[0] === 'react';
                        });
                        setProjects(filteredProjects);
                    }}
                >
                    React & MUI
                </button>
                <button
                    className={currentActive === 'node' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('node');
                        const filteredProjects = myProjects.filter((item) => {
                            const arr = item.category.filter((myItem) => {
                                return myItem === 'node';
                            });
                            return arr[0] === 'node';
                        });
                        setProjects(filteredProjects);
                    }}
                >
                    Node & Express
                </button>
            </section>
            <section className="right-section flex">
                {projects.map((item, index) => {
                    return (
                        <article key={index} className="card">
                            <img width={266} src={item.imgPath} alt="first-project" />
                            <div style={{ width: '266px' }} className="box">
                                <h1 className="title">{item.title}</h1>
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
