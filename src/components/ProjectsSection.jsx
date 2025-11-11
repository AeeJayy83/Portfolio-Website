import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "WanderStay",
        description: "A visually appealing project designed to simplify browsing and listing vacation accommodations.",
        image: "/projects/project1.png",
        tags: ["EJS", "BootStrap", "MongoDB"],
        demoUrl: "https://wanderstay-93af.onrender.com",
        githubUrl: "https://github.com/AeeJayy83/WanderStay"
    },
    {
        id: 2,
        title: "ChatVerse",
        description: "An AI-powered assistant, incorporating advanced features like image uploads and emoji-based responses.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://virtualchatbot-f3mg.onrender.com",
        githubUrl: "https://github.com/AeeJayy83/Virtual-Chatbot"
    },
    {
        id: 3,
        title: "Convo",
        description: "Convo is a real-time chat application that enables users to communicate instantly and seamlessly.",
        image: "/projects/project3.png",
        tags: ["ReactJS", "Tailwind", "Socket.IO"],
        demoUrl: "https://convo-lzv5.onrender.com/",
        githubUrl: "https://github.com/AeeJayy83/Convo"
    },
    {
        id: 4,
        title: "ComponentAI",
        description: "ComponentAI is an innovative tool designed to help developers quickly generate reusable UI components with ease.",
        image: "/projects/project4.png",
        tags: ["ReactJS", "Tailwind", "JavaScript"],
        demoUrl: "https://component-ai-k1ky.onrender.com/",
        githubUrl: "https://github.com/AeeJayy83/AI-Based-Component-Generator"
    },
    {
        id: 5,
        title: "MultiTask AI",
        description: "MultiTask AI is a versatile AI-powered SaaS application built to help users generate blog titles, articles, and review resume.",
        image: "/projects/project5.png",
        tags: ["ReactJS", "Tailwind", "Postgres", "NodeJS"],
        demoUrl: "https://multitask-ai.vercel.app",
        githubUrl: "https://github.com/AeeJayy83/AI-SaaS-App"
    },

]

export const ProjectsSection = () => {
    return (
        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt="project.title"
                                    className="w-full h-45 transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border border-primary text-secondary-foreground hover:bg-primary transition-colors duration-300 ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-5 mt-8">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/AeeJayy83" target="_blank" className="cosmic-button flex w-fit items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}