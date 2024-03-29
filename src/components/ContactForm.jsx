import React from 'react'
import { useForm } from "@formcarry/react";

const FORMCARRY_ID = process.env.REACT_APP_FORMCARRY_FORM_ID;

export default function ContactForm() {
    const { state, submit } = useForm({
        id: FORMCARRY_ID
    });
    return (
        <React.Fragment>
            {
                state.submitted ?
                    <div className="lg:w-1/3 md:w-1/2 h-96 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Hire Me
                        </h2>
                        <p className="leading-relaxed text-lg mb-5">
                            Thank you for contacting me, your message has been received. I will get back to you as soon as possible!
                        </p>
                    </div>
                    :
                    <form
                        name="contactForm"
                        onSubmit={submit}
                        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Hire Me
                        </h2>
                        <p className="leading-relaxed text-lg mb-5">
                            If you would like to work with or hire me please fill out the form below with your name, email, and reason for contacting me and I will get back to you as soon as possible!
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-md text-gray-400">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-md text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-md text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                placeholder="What is your reason for contacting me?"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xl">
                            Submit
                        </button>
                    </form>
            }
        </React.Fragment>
    )
}
