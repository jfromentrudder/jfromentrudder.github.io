import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 py-8">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Jay Froment-Rudder
                </p>
                <div className="flex items-center gap-5">
                    <a
                        href="https://github.com/jfromentrudder"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jfromentrudder"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:jfromentrudder@gmail.com"
                        className="text-gray-500 hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <FaEnvelope className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
