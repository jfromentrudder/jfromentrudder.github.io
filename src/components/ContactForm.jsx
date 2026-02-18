import React from "react";
import { useForm } from "@formcarry/react";

const FORMCARRY_ID = process.env.REACT_APP_FORMCARRY_FORM_ID;

export default function ContactForm() {
    const { state, submit } = useForm({
        id: FORMCARRY_ID,
    });

    if (state.submitted) {
        return (
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-900/30 border border-green-800/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <form
            name="contactForm"
            onSubmit={submit}
            className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-8"
        >
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-zinc-900/50 rounded-lg border border-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-base outline-none text-gray-100 py-3 px-4 transition-colors duration-200"
                    placeholder="Your name"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-zinc-900/50 rounded-lg border border-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-base outline-none text-gray-100 py-3 px-4 transition-colors duration-200"
                    placeholder="your@email.com"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-zinc-900/50 rounded-lg border border-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-base outline-none text-gray-100 py-3 px-4 resize-none transition-colors duration-200"
                    placeholder="What would you like to discuss?"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full text-white bg-cyan-600 py-3 px-6 rounded-lg font-medium hover:bg-cyan-500 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-600/25"
            >
                Send Message
            </button>
        </form>
    );
}
