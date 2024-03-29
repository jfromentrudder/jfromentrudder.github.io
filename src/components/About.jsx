import React from 'react';

const About = () => {
    return (
        <section id='about'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Nice to Meet You! I'm Jay Froment-Rudder,
                        <br className="hidden lg:inline-block" /> Software Engineer
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed">
                        I'm a Software Engineer with 1 year of professional Software Engineering experience and a further 5 years of experience programming as both a university student and Computer Science Instructor. I love to tackle new and challenging projects and am always excited to learn!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-xl">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-xl">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded w-auto"
                        alt="hero"
                        src="./jay_headshot.jpg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
