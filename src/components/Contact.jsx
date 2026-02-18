import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16 fade-section">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Interested in working together? Feel free to reach out through the form or any of the channels below.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                    {/* Contact info */}
                    <div className="md:w-2/5 fade-section">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 border border-cyan-800/30 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Location</h3>
                                    <p className="text-gray-400">Brooklyn, NY<br />United States</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 border border-cyan-800/30 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Email</h3>
                                    <a
                                        href="mailto:jfromentrudder@gmail.com"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        jfromentrudder@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 border border-cyan-800/30 flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                                    <p className="text-gray-400">917-889-4666</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="md:w-3/5 fade-section">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
