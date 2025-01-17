import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHackerrank, FaLaptopCode } from 'react-icons/fa';
import { FaHome, FaUser, FaFile, FaStar, FaTools, FaEnvelopeOpen } from 'react-icons/fa';
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
    <button onClick={() => scrollToSection('hero')} title="Home">
        <FaHome size={20} />
    </button>
    <button onClick={() => scrollToSection('about')} title="About">
        <FaUser size={20} />
    </button>
    <button onClick={() => scrollToSection('resume')} title="Resume">
        <FaFile size={20} />
    </button>
    <button onClick={() => scrollToSection('projects')} title="Projects">
        <FaStar size={20} />
    </button>
    <button onClick={() => scrollToSection('skills')} title="Skills">
        <FaTools size={20} />
    </button>
    <button onClick={() => scrollToSection('contact')} title="Contact">
        <FaEnvelopeOpen size={20} />
    </button>
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
                        strings={[
                            "Data Engineer",
                            "Data Scientist",
                            "AI Enthusiast",
                            "ML Developer",
                            "Software Engineer",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                    <div className="hero-buttons">
                        <button className="btn" onClick={() => scrollToSection('resume')}>View Resume</button>
                        <button className="btn" onClick={() => scrollToSection('contact')}>Contact Me</button>
                    </div>
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
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h2>
                <motion.ul
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <li>Experienced Data Engineer skilled in designing, building, and optimizing scalable data pipelines.</li>
                    <li>Proficient in AWS services like Redshift, Glue, RDS, IAM, and Step Functions.</li>
                    <li>Strong foundation in ETL tools (Informatica PowerCenter) and database management (Teradata, Oracle SQL).</li>
                    <li>Dedicated to solving complex problems with data-driven solutions and cloud expertise.</li>
                </motion.ul>
            </section>

            {/* Resume Section */}
            <section id="resume" className="resume">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Professional Experience
                </motion.h2>
                <div className="resume-content">
                    <motion.div
                        className="resume-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Data Engineering Analyst - Accenture (Dec 2022 – Jul 2023)</h3>
                        <ul>
                            <li>Developed reusable workflows for cloud migration, ensuring data accuracy and reducing manual effort.</li>
                            <li>Implemented efficient data pipelines, improving data processing speed by 40%.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="resume-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Data Engineering Associate - Accenture (Oct 2021 – Dec 2022)</h3>
                        <ul>
                            <li>Designed and optimized ETL pipelines using Informatica PowerCenter and SQL.</li>
                            <li>Streamlined data ingestion processes to handle large-scale enterprise datasets.</li>
                        </ul>
                    </motion.div>
                </div>
                <a href="/Mani Shankar Chamidisetty_DEngineer.pdf" download>
                    <button className="btn">Download Resume</button>
                </a>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Projects
                </motion.h2>
                <div className="project-content">
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
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Me
                </motion.h2>
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

            {/* Footer Section */}
            <footer className="footer">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    © All rights reserved by Mani Shankar Chamidisetty
                </motion.p>
                <motion.h2
                    className="footer-slogan"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                >
                    HAKUNA MATATA!
                </motion.h2>
            </footer>
        </div>
    );
}

export default App;
