import React from "react";
import { experience, education } from "../data";

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16 fade-section">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Experience
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Professional software engineering roles and education.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-10">
                    {experience.map((job, idx) => (
                        <div
                            key={idx}
                            className="fade-section relative pl-8 border-l-2 border-cyan-800/40"
                        >
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-600 border-2 border-zinc-900" />
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                <h3 className="text-xl font-semibold text-white">
                                    {job.company}
                                </h3>
                                <span className="text-sm text-gray-500">
                                    {job.period}
                                </span>
                            </div>
                            <p className="text-cyan-400 text-sm font-medium mb-1">
                                {job.role}
                            </p>
                            <p className="text-gray-500 text-xs mb-3">{job.location}</p>
                            <ul className="space-y-2">
                                {job.bullets.map((bullet, bIdx) => (
                                    <li
                                        key={bIdx}
                                        className="text-gray-400 text-sm leading-relaxed flex gap-2"
                                    >
                                        <span className="text-cyan-600 mt-1.5 flex-shrink-0">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Education */}
                    <div className="fade-section relative pl-8 border-l-2 border-cyan-800/40">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-600 border-2 border-zinc-900" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h3 className="text-xl font-semibold text-white">
                                {education.school}
                            </h3>
                            <span className="text-sm text-gray-500">
                                Expected {education.expected}
                            </span>
                        </div>
                        <p className="text-cyan-400 text-sm font-medium mb-3">
                            {education.degree}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {education.coursework.map((course, cIdx) => (
                                <span
                                    key={cIdx}
                                    className="text-xs bg-zinc-800 text-gray-400 px-3 py-1 rounded-full border border-zinc-700/50"
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
