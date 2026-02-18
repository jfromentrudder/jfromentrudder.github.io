import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16 fade-section">
                    <CodeBracketIcon className="mx-auto w-10 mb-4 text-cyan-400" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the websites and applications I've worked on in both professional and personal settings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="fade-section bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10 group flex flex-col"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    alt={project.title}
                                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    src={project.image}
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-800/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                                    >
                                        View Project
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    <span className="text-gray-500 text-sm font-medium">
                                        Private Project
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 fade-section">
                    <a
                        href="https://github.com/jfromentrudder"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-white bg-zinc-800 border border-zinc-700 py-3 px-8 rounded-lg font-medium hover:bg-zinc-700 transition-all duration-200"
                    >
                        View More on GitHub
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
