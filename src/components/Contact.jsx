import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
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
                <ContactForm />
            </div>
        </section>
    );
}
