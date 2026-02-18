import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skillCategories } from "../data";

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16 fade-section">
                    <CpuChipIcon className="w-10 inline-block mb-4 text-cyan-400" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A general overview of the skills and technologies I have experience with.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skillCategories.map((group) => (
                        <div
                            key={group.category}
                            className="fade-section bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-6"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-zinc-700/50">
                                {group.category}
                            </h3>
                            <ul className="space-y-3">
                                {group.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                                        <span className="text-sm font-medium">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
