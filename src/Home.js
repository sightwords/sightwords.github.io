import React from 'react';
import { Link } from 'react-router-dom';
import './cayman.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <section className="page-header">
                    <h1 className="project-name">Sight Words</h1>

                    <h2 className="project-tagline">Sight words.</h2>
                    <Link className="btn" to="/flashcards">Flashcards</Link>
                </section>
                <section className="main-content">
                    <h1>Introduction</h1>

                    <p>
                        Spanish sightwords.
                    </p>

                    <h1>License</h1>

                    <p>
                        This work is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/"
                                                         target="_blank">Creative Commons Attribution 4.0 International</a> license.
                    </p>
                    <footer className="site-footer">
                        <span className="site-footer-credits">This page was generated by <a
                            href="https://pages.github.com" target="_blank">GitHub Pages</a> with <a
                            href="https://github.com/jasonlong/cayman-theme" target="_blank">Cayman</a> theme.
                        </span>
                    </footer>
                </section>
            </div>
        );
    }
}

export default Home;
