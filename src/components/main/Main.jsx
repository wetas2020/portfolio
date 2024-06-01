import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';

export default function Main() {
    const [currentActive, setCurrentActive] = useState('all');
    const [projects, setProjects] = useState(myProjects);

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <main className="flex">
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
                    className={currentActive === 'full-stack' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('full-stack');
                        const filteredProjects = myProjects.filter((item) =>
                            item.category.includes('full-stack')
                        );
                        setProjects(filteredProjects);
                    }}
                >
                    Full Stack
                </button>
                <button
                    className={currentActive === 'front-end' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('front-end');
                        const filteredProjects = myProjects.filter((item) =>
                            item.category.includes('front-end')
                        );
                        setProjects(filteredProjects);
                    }}
                >
                    Front-end
                </button>
                <button
                    className={currentActive === 'back-end' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('back-end');
                        const filteredProjects = myProjects.filter((item) =>
                            item.category.includes('back-end')
                        );
                        setProjects(filteredProjects);
                    }}
                >
                    Back-end
                </button>
                <button
                    className={currentActive === 'mobile' ? 'active' : null}
                    onClick={() => {
                        setCurrentActive('mobile');
                        const filteredProjects = myProjects.filter((item) =>
                            item.category.includes('mobile')
                        );
                        setProjects(filteredProjects);
                    }}
                >
                    Mobile
                </button>
            </section>
            <section className="right-section flex">
                {projects.map((item, index) => {
                    return (
                        <article key={index} className="card" onClick={() => openLink(item.link)}>
                            <img width={266} src={item.imgPath} alt={item.title} />
                            <div style={{ width: '266px' }} className="box">
                                <h1 className="title">{item.title}</h1>
                                <p className="subtitle">{item.description}</p>
                                <h4 style={{ marginBottom: '7px' }}>STACK: {item.stack}</h4>
                                <div className="icons flex">
                                    <a className="link flex" href={item.link} target="_blank" rel="noopener noreferrer">
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
