import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHackerrank } from 'react-icons/fa';
import { FaHome, FaUser, FaFile, FaStar, FaTools, FaEnvelopeOpen } from 'react-icons/fa';
import { SiSololearn, SiLeetcode } from 'react-icons/si';
import './App.css';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import emailjs from 'emailjs-com';

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
    <button onClick={() => scrollToSection('education')} title="Education">
    <FaUser size={20} />
    </button>
    <button onClick={() => scrollToSection('experience')} title="Professional Experience">
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
                            "Cloud Architect",
                            "AI Enthusiast",
                            "ML Developer",
                            "Software Engineer",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                    <div className="hero-buttons">
                    <button
                        className="btn"
                        onClick={() =>
                            window.open('https://drive.google.com/file/d/17CWR88rBO_8lP54O5R7qBgLBdofaS_jz/view?usp=sharing', '_blank')
                        }
                        >
                        View Resume
                    </button>
                        <button className="btn" onClick={() => scrollToSection('contact')}>
                        Contact Me
                        </button>
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
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        About Me
    </motion.h2>
    <motion.div
        className="about-glass-card"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
    >
        <div className="about-glass-content">
            <div className="about-image-wrapper">
                <img src={require('./mypic.png')} alt="Mani Shankar" className="about-profile-image" />
            </div>
            <div className="about-text-wrapper">
                <div className="about-text">
                    <h3>Hello, I'm <span>Mani Shankar</span></h3>
                    <p>
                        Motivated and experienced Data Engineer with expertise in building and optimizing scalable data pipelines, ETL solutions, and cloud architectures. Proficient in AWS (Glue, Redshift, RDS, Step Functions), PySpark, and Terraform. Skilled in data analytics, machine learning, and visualization tools like Tableau and Power BI to deliver actionable insights. With a Master’s in Data Science and Analytics and hands-on project experience, I am committed to leveraging data-driven strategies to solve complex business challenges. I bring extensive expertise in data migration and transformation using AWS and PySpark. During my tenure, I have successfully developed and optimized large-scale data pipelines, including reducing data processing times by up to 90% through the implementation of parallel batch processing and distributed computing. Furthermore, I have hands-on experience implementing CI/CD pipelines and distributed processing workflows to enhance efficiency and automate system deployments. My proficiency in programming languages such as Python, SQL, and big data technologies allows me to design and execute innovative solutions that align with organizational goals.
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
</section>

{/* Education Section */}
<section id="education" className="education">
    <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        Education
    </motion.h2>
    <div className="education-content">
        <motion.div
            className="education-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h3>Masters in Data Science and Analytics</h3>
            <p>Florida Atlantic University, Boca Raton, FL</p>
            <p>August 2023 – April 2025</p>
        </motion.div>
        <motion.div
            className="education-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
            <p>Vignan’s Lara Institute of Technology & Science</p>
            <p>June 2017 – Aug 2021</p>
        </motion.div>
    </div>
</section>


{/* Professional Experience Section */}
<section id="experience" className="experience">
    <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        Professional Experience
    </motion.h2>
    <div className="experience-content">
        {/* Experience Item: Accenture */}
        <div className="experience-card">
            <h3>Accenture Solutions Pvt Ltd</h3>
            <div className="experience-role">
                <h4>Data Engineering Analyst (Dec 2022 – Jul 2023)</h4>
                <p>Chennai, India</p>
                <ul>
                    <li>Applied data engineering principles to develop reusable workflows for data ingestion, transformation, and quality checks.</li>
                    <li>Migrated data from legacy systems to cloud environments following cloud architecture principles.</li>
                    <li>Identified and resolved data irregularities, ensuring data accuracy and reliability.</li>
                    <li>Optimized workflows across diverse technologies, including Linux, Perl, UAC, ESP, and Mainframe.</li>
                </ul>
            </div>
            <div className="experience-role">
                <h4>Data Engineering Associate (Oct 2021 – Dec 2022)</h4>
                <p>Chennai, India</p>
                <ul>
                    <li>Designed, built, and configured applications to meet business process requirements using ETL tools like Informatica PowerCenter.</li>
                    <li>Collaborated with upstream teams to ensure accurate and timely delivery of data.</li>
                    <li>Monitored and managed workflows for mainframe jobs, Linux jobs, and Informatica jobs.</li>
                    <li>Gained expertise in Teradata, Oracle SQL, and SQL Server for data management.</li>
                </ul>
            </div>
        </div>
        {/* Experience Item: Salient Minds */}
        <div className="experience-card">
            <h3>Salient Minds Intern</h3>
            <h4>(Apr 2020 – Jul 2020)</h4>
            <ul>
                <li>Developed static and responsive web pages using HTML5, CSS, and JavaScript.</li>
                <li>Collaborated with cross-functional teams to design user-friendly interfaces and enhance user experience.</li>
                <li>Worked with back-end technologies like Java and Python to build server-side applications and APIs.</li>
                <li>Managed databases efficiently using SQL, ensuring seamless integration with front-end components.</li>
                <li>Delivered high-quality solutions within deadlines using agile methodologies.</li>
            </ul>
        </div>
    </div>
</section>

{/* Projects Section */}
<section id="projects" className="projects">
  <motion.h2 className="section-title">Projects</motion.h2>
  <div className="projects-content">
    {/* First row */}
    <div className="project-card">
      <h3>Optimizing Data Migration and Processing from Oracle to AWS</h3>
      <ul>
        <li>Optimized data migration pipelines by implementing parallel batch processing with AWS Step Functions and PySpark, reducing processing time by 90%.</li>
        <li>Automated workflows using Terraform for infrastructure setup.</li>
      </ul>
      <p><strong>Tools and Methods:</strong> AWS (Glue, S3, Redshift, Athena, Amazon RDS, IAM), PySpark, Terraform, ETL.</p>
    </div>
    <div className="project-card">
      <h3>Prediction of Parkinson’s Disease Using Machine Learning</h3>
      <ul>
        <li>Developed machine learning models to detect early signs of Parkinson’s Disease using voice data.</li>
        <li>Achieved 92% accuracy using XGBoost, and created a user-friendly UI for single-patient predictions.</li>
      </ul>
      <p><strong>Tools and Methods:</strong> Python, Jupyter, XGBoost, SVM.</p>
    </div>
    <div className="project-card">
      <h3>Secure Data Hiding Using Image Steganography</h3>
      <ul>
        <li>Built a tool to securely hide text or images within other images by manipulating RGB pixel values, ensuring data security and encryption.</li>
      </ul>
      <p><strong>Tools and Methods:</strong> Python, APIs, Image Processing.</p>
    </div>
  </div>

  <div className="projects-content second-row">
    {/* Second row */}
    <div className="project-card">
      <h3>End-to-End Movie Analytics Pipeline with AWS</h3>
      <ul>
        <li>Designed and implemented a cloud-based data analysis pipeline to explore trends in a large movie dataset using AWS services and Tableau.</li>
        <li>Performed ETL with AWS Glue, queried data with Amazon Athena, and visualized insights using Tableau dashboards.</li>
      </ul>
      <p><strong>Tools and Methods:</strong> AWS (S3, Glue, Athena), Tableau, SQL.</p>
    </div>
    <div className="project-card">
      <h3>Spotify Song Popularity Analytics Using Audio Features</h3>
      <ul>
        <li>Conducted an in-depth analysis of audio features affecting song popularity using a custom dataset collected via the Spotify API.</li>
        <li>Applied exploratory data analysis and machine learning techniques.</li>
      </ul>
      <p><strong>Tools and Methods:</strong> Spotify API, Python, XGBoost.</p>
    </div>
  </div>
</section>

{/* Technical Skills Section */}



{/* Technical Skills Section */}
<section id="skills" className="skills">
  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Technical Skills
  </motion.h2>
  <div className="skills-content">
    <motion.div
      className="skills-category"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
    >
      <h3>Programming</h3>
      <ul>
        <li>C</li>
        <li>C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>R Programming</li>
        <li>Perl</li>
        <li>PHP</li>
      </ul>
    </motion.div>
    <motion.div
      className="skills-category"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
    >
      <h3>Web Development</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
      </ul>
    </motion.div>
    <motion.div
      className="skills-category"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
    >
      <h3>Databases</h3>
      <ul>
        <li>Amazon Redshift</li>
        <li>Teradata SQL</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Amazon RDS</li>
        <li>MySQL</li>
        <li>PL/SQL</li>
        <li>Oracle SQL</li>
      </ul>
    </motion.div>
    <motion.div
      className="skills-category"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
    >
      <h3>Domain Skills</h3>
      <ul>
        <li>Microservices</li>
        <li>Backend Development</li>
        <li>ETL Pipelines</li>
        <li>Distributed Systems</li>
        <li>Exploratory Data Analysis</li>
        <li>Distributed Parallel Processing</li>
        <li>API data extraction and processing</li>
      </ul>
    </motion.div>
    <motion.div
      className="skills-category"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
    >
      <h3>Visualization Tools</h3>
      <ul>
        <li>Tableau</li>
        <li>Power BI</li>
      </ul>
    </motion.div>
    <motion.div
      className="skills-category"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
    >
      <h3>Certifications</h3>
      <ul>
        <li>Google Certified Data Analytics Professional</li>
        <li>Google Certified Python Programmer</li>
        <li>AWS Certified Cloud Practitioner Essentials</li>
        <li>IBM Certified Data Engineer Professional</li>
        <li>Hackerramnk Certified Gold in Problem Solving</li>
      </ul>
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
    <form
        onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            emailjs
                .sendForm(
                    'service_yaucx7m', // Replace with your EmailJS Service ID
                    'template_pl4is6p', // Replace with your EmailJS Template ID
                    e.target, // Form element
                    'YnHFQ5TsUwzkjYefF'  // Replace with your EmailJS Public Key
                )
                .then(
                    (result) => {
                        alert('Message sent successfully!');
                        console.log(result.text);
                    },
                    (error) => {
                        alert('Failed to send message. Please try again later.');
                        console.error(error.text);
                    }
                );
            e.target.reset(); // Clear the form fields after submission
        }}
    >
        <div className="form-group">
            <input type="text" name="user_name" placeholder=" " required />
            <label>Your Name</label>
        </div>
        <div className="form-group">
            <input type="email" name="user_email" placeholder=" " required />
            <label>Your Email</label>
        </div>
        <div className="form-group">
            <textarea name="message" placeholder=" " rows="4" required></textarea>
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
