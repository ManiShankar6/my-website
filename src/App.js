import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHackerrank } from 'react-icons/fa';
import { SiSololearn, SiLeetcode } from 'react-icons/si';
import './App.css';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';

function App() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            {/* Side Navigation */}
            <div className="side-nav">
                <button onClick={() => scrollToSection('about')} title="About">About</button>
                <button onClick={() => scrollToSection('experience')} title="Experience">Experience</button>
                <button onClick={() => scrollToSection('projects')} title="Projects">Projects</button>
                <button onClick={() => scrollToSection('contact')} title="Contact">Contact</button>
            </div>

            {/* Hero Section */}
            <header id="hero" className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hero-title">Mani Shankar Chamidisetty</h1>
                    <Typed
                        className="hero-typed"
                        strings={["Data Engineer", "Data Scientist", "AI Enthusiast", "ML Developer", "Software Engineer"]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                    <div className="social-icons">
                        <a href="https://linkedin.com/in/manishankar610" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.hackerrank.com/profile/manishankar610" target="_blank" rel="noopener noreferrer" title="HackerRank">
                            <FaHackerrank size={30} />
                        </a>
                        <a href="https://www.sololearn.com/en/profile/10177498" target="_blank" rel="noopener noreferrer" title="SoloLearn">
                            <SiSololearn size={30} />
                        </a>
                        <a href="https://leetcode.com/u/manishankar610/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                            <SiLeetcode size={30} />
                        </a>
                        <a href="mailto:chms0024@gmail.com" title="Email">
                            <FaEnvelope size={30} />
                        </a>
                    </div>
                </motion.div>
            </header>

            {/* About Section */}
            <section id="about" className="about">
                <div className="about-container">
                    <motion.img
                        className="about-image"
                        src="/path-to-your-profile-image.jpg"
                        alt="Profile"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2>About Me</h2>
                        <p>
                            Experienced Data Engineer skilled in designing, building, and optimizing scalable data pipelines.
                            Proficient in AWS services, ETL tools, and database management. Dedicated to solving complex problems
                            with data-driven solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience">
                <h2>Professional Experience</h2>
                <div className="timeline">
                    <motion.div
                        className="timeline-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3>Data Engineering Analyst</h3>
                        <p>Accenture (Dec 2022 – Jul 2023)</p>
                        <ul>
                            <li>Developed reusable workflows for cloud migration.</li>
                            <li>Improved data processing speed by 40%.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="timeline-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h3>Data Engineering Associate</h3>
                        <p>Accenture (Oct 2021 – Dec 2022)</p>
                        <ul>
                            <li>Designed and optimized ETL pipelines using SQL.</li>
                            <li>Streamlined large-scale data ingestion processes.</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-grid">
                    <motion.div
                        className="project-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Optimizing Data Migration</h3>
                        <p>Reduced processing time by 90% using PySpark and AWS Step Functions.</p>
                    </motion.div>
                    <motion.div
                        className="project-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Spotify Song Analytics</h3>
                        <p>Analyzed audio features to determine song popularity using the Spotify API.</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder=" " required />
                        <label>Your Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder=" " required />
                        <label>Your Email</label>
                    </div>
                    <div className="form-group">
                        <textarea placeholder=" " rows="4" required></textarea>
                        <label>Your Message</label>
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </section>
        </div>
    );
}

export default App;
