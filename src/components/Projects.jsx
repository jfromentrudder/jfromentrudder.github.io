import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from 'react';
import { projects } from '../data'

const Projects = () => {
	return (
		<section id="projects" className="text-gray-400 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full mb-20">
					<CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						My Previous Work
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Here are some examples of the websites and applications I've worked on in both a professional and personal setting.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{projects.map((project) => (
						<a
							href={project.link}
							key={project.image}
							className="sm:w-1/2 w-100 p-4"
							target={project.link === "/" ? "_self" : "_blank"} rel="noreferrer"
						>
							<div className="flex relative">
								<img
									alt="gallery"
									className="absolute inset-0 w-full h-full object-cover object-center"
									src={project.image}
								/>
								<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
									<h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
										{project.subtitle}
									</h2>
									<h1 className="title-font text-2xl font-medium text-white mb-3">
										{project.title}
									</h1>
									<p className="leading-relaxed text-md">{project.description}</p>
								</div>
							</div>
						</a>
					))}
				</div>
				<div className="flex justify-center py-6">
					<a
						href="https://github.com/jfromentrudder"
						target="_blank"
						className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-xl" rel="noreferrer">
						Click to view more of my work on Github
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
