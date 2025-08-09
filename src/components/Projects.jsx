import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCloud, FiTrendingUp } from "react-icons/fi"
gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)
    const [activeFilter, setActiveFilter] = useState('all')
    useEffect(() => {
        const cards = cardsRef.current.children
        gsap.fromTo(cards,
            { opacity: 0, y: 100, rotationX: 45 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                }
            }
        )
    }, [])
    const projects = [
        {
            id: 1,
            title: "NX - Notification Exchange",
            description: "End-to-end system enabling businesses to create, trigger, and monitor bulk Email, WhatsApp, SMS, APIs communications via a flow-driven interface, template editor, campaigns and event dashboards. This platform is being used by AMCs for thier communication.",
            image: "src/assets/NX.png",
            category: "fullstack",
            tags: ["Golang", "Typescript", "RabbitMQ", "Postgresql", "Cedar", "Zustand", "AWS", "Framer", "Tailwind", , "Redis", "Tanstack"],
            github: "https://github.com/Galvan7/Notification-Xchange",
            live: "https://demo.notificationxchange.app/",
            metrics: { AMCs: "20+", messages: "5M+/mo", uptime: "99.9%" },
            featured: true
        },
        {
            id: 2,
            title: "AlgoDraft",
            description: "AlgoDraft is a modern, full-featured blogging platform designed for scalability and an excellent author-reader experience. Built with Next.js, Prisma, and PostgreSQL, it features secure authentication via Clerk, a powerful rich-text and markdown editor, image and media uploads, category and tag-based content organization, and fast server-side rendering for SEO.",
            longDescription: "Developed a modern blogging platform with Next.js, Prisma, and PostgreSQL. Implemented secure authentication via Clerk, rich-text editor with markdown support, category-based content filtering, and SEO optimization. Includes author dashboards for analytics, draft saving, and publishing workflows.",
            image: "src/assets/Blog.jpg",
            category: "fullstack",
            tags: ["Next.js", "Typescript", "Prisma", "Clerk"],
            github: "#",
            live: "#",
            metrics: { posts: "500+", users: "1K+", avgReadTime: "4 min" },
            featured: true
        },
        {
            id: 3,
            title: "Personal Portfolio",
            description: "Built a visually immersive portfolio with React, Next.js, Tailwind CSS, Framer Motion, GSAP, and Spline 3D. Features include smooth animations, scroll-triggered effects, 3D hero section, custom cursor interactions, and responsive glassmorphism design. Optimized for performance and accessibility while highlighting technical expertise with interactive skill showcases.",
            longDescription: "Built a visually immersive portfolio with React, Next.js, Tailwind CSS, Framer Motion, GSAP, and Spline 3D. Features include smooth animations, scroll-triggered effects, 3D hero section, custom cursor interactions, and responsive glassmorphism design. Optimized for performance and accessibility while highlighting technical expertise with interactive skill showcases.",
            image: "src/assets/Portfolio.png",
            category: "frontend",
            tags: ["React", "Tailwind CSS", "GSAP", "Spline"],
            github: "https://github.com/Galvan7/Professional-Portfolio-GSAP-Frmer",
            live: "#",
            metrics: { visitors: "5K+/mo", bounceRate: "35%", loadTime: "<1.5s" },
            featured: false
        },
    ];

    const filters = [
        { id: 'all', label: 'All Projects', icon: FiCode },
        { id: 'fullstack', label: 'Full Stack', icon: FiDatabase },
        { id: 'frontend', label: 'Frontend', icon: FiTrendingUp },
        { id: 'backend', label: 'Backend', icon: FiCloud }
    ]
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)
    return (
        <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-violet-900/20 to-black py-20 lg:px-24 px-10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
            <div className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        A showcase of cutting-edge solutions that push the boundaries of technology and user experience
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>
                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {filters.map((filter) => {
                        const Icon = filter.icon
                        return (
                            <motion.button
                                key={filter.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/30'
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-violet-500/20'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{filter.label}</span>
                            </motion.button>
                        )
                    })}
                </motion.div>
                {/* Projects Grid */}
                <div ref={cardsRef} className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-600/25 ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                                }`}
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                                    FEATURED
                                </div>
                            )}
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.github}
                                        className="bg-black/70 backdrop-blur-sm p-3 rounded-full text-white hover:bg-violet-600 transition-colors duration-300"
                                    >
                                        <FiGithub className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.live}
                                        className="bg-black/70 backdrop-blur-sm p-3 rounded-full text-white hover:bg-violet-600 transition-colors duration-300"
                                    >
                                        <FiExternalLink className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </div>
                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-justify text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-violet-600/20 text-violet-300 text-xs rounded-full border border-violet-500/30 hover:bg-violet-600/30 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-violet-500/20">
                                    {Object.entries(project.metrics).map(([key, value]) => (
                                        <div key={key} className="text-center">
                                            <div className="text-violet-400 font-bold text-sm">{value}</div>
                                            <div className="text-gray-500 text-xs capitalize">{key}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-4">
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.github}
                                        className="flex-1 py-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/40 hover:to-purple-600/40 border border-violet-500/30 rounded-xl text-violet-300 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25 text-center"
                                    >
                                        <FiGithub className="inline-block mr-2 w-4 h-4" />
                                        Repo
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.live}
                                        className="flex-1 py-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/40 hover:to-purple-600/40 border border-violet-500/30 rounded-xl text-violet-300 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25 text-center"
                                    >
                                        <FiExternalLink className="inline-block mr-2 w-4 h-4" />
                                        Live
                                    </motion.a>
                                </div>

                            </div>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-br from-gray-900/50 to-violet-900/30 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20">
                        <h3 className="text-2xl font-bold mb-4 text-violet-300">Have a Project in Mind?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Let's collaborate to bring your vision to life with cutting-edge technology and exceptional user experience.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('https://github.com/Galvan7', '_blank')}
                            className="cursor-none px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-violet-600/50"
                        >
                            Start a Project
                        </motion.button>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Projects