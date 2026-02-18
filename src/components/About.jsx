import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-indigo-900/10 pointer-events-none" />

            <div className="container mx-auto flex px-6 sm:px-10 pt-28 pb-20 md:flex-row flex-col items-center relative z-10">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4 animate-fade-in">
                        Software Engineer
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Jay Froment-Rudder
                        </span>
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed text-gray-400 max-w-xl">
                        Full-stack engineer with professional experience building scalable web applications at NYU's BITS Lab and Phuc Labs. I specialize in React, Node.js, and cloud infrastructure, and I'm completing my B.S. in Computer Science at Oregon State University (expected Aug 2026).
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a
                            href="#contact"
                            className="inline-flex items-center text-white bg-cyan-600 py-3 px-8 rounded-lg font-medium hover:bg-cyan-500 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-600/25"
                        >
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center text-white bg-zinc-800 border border-zinc-700 py-3 px-8 rounded-lg font-medium hover:bg-zinc-700 transition-all duration-200"
                        >
                            See My Work
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/jfromentrudder"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jfromentrudder"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:jfromentrudder@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-sm lg:w-full md:w-1/2 w-3/4 flex justify-center">
                    <img
                        className="rounded-full w-72 h-72 object-cover object-center shadow-2xl ring-4 ring-zinc-800"
                        alt="Jay Froment-Rudder"
                        src="./jay_headshot.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
