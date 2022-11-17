import React from "react";
import { useForm } from "@formcarry/react";

const FORMCARRY_ID = process.env.REACT_APP_FORMCARRY_FORM_ID;

export default function Contact() {
    const { state, submit } = useForm({
        id: FORMCARRY_ID
    });

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-3/4 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.8)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=New+York,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap w-2/3 py-6 rounded shadow-md">
                        <div className="lg:w-2/5 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                LOCATION
                            </h2>
                            <p className="mt-1">
                                New York, NY <br /> United States
                            </p>
                        </div>
                        <div className="lg:w-3/5 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a href="/" className="text-indigo-400 leading-relaxed">
                                jfromentrudder@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">917-889-4666</p>
                        </div>
                    </div>
                </div>
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
            </div>
        </section>
    );
}
