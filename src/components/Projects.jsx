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
            title: "EcoTrade Platform",
            description: "A revolutionary carbon credit trading platform built with microservices architecture. Features real-time price tracking, blockchain integration, and AI-powered market predictions.",
            longDescription: "Built a comprehensive carbon trading ecosystem serving 50,000+ users globally. Implemented sophisticated pricing algorithms, automated compliance checking, and seamless blockchain integration for transparent transactions.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            category: "fullstack",
            tags: ["React", "Node.js", "PostgreSQL", "AWS", "Blockchain"],
            github: "#",
            live: "#",
            metrics: { users: "50K+", transactions: "$2M+", uptime: "99.9%" },
            featured: true
        },
        {
            id: 2,
            title: "NeuroLink Analytics",
            description: "Advanced AI-powered analytics dashboard for healthcare data visualization. Processes millions of medical records with real-time insights and predictive modeling.",
            longDescription: "Developed a cutting-edge healthcare analytics platform that processes 10TB+ of medical data daily. Features include patient outcome predictions, resource optimization, and HIPAA-compliant data handling.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            category: "frontend",
            tags: ["Next.js", "TypeScript", "D3.js", "Python", "TensorFlow"],
            github: "#",
            live: "#",
            metrics: { accuracy: "94%", hospitals: "200+", saved: "$50M+" },
            featured: true
        },
        {
            id: 3,
            title: "Quantum Compute API",
            description: "High-performance API gateway for quantum computing resources. Handles 1M+ requests/day with sub-50ms latency and advanced rate limiting.",
            longDescription: "Architected a distributed API system that democratizes quantum computing access. Features include intelligent load balancing, quantum circuit optimization, and real-time resource allocation.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
            category: "backend",
            tags: ["Golang", "Redis", "Kubernetes", "gRPC", "PostgreSQL"],
            github: "#",
            live: "#",
            metrics: { requests: "1M+/day", latency: "<50ms", availability: "99.99%" },
            featured: false
        },
        {
            id: 4,
            title: "MetaVerse Social Hub",
            description: "Immersive 3D social platform with real-time voice/video chat, virtual economies, and cross-platform compatibility. Built for the future of social interaction.",
            longDescription: "Created a next-generation social platform combining WebRTC, 3D graphics, and blockchain technology. Supports 10,000+ concurrent users in shared virtual spaces with spatial audio and haptic feedback.",
            image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
            category: "fullstack",
            tags: ["Three.js", "WebRTC", "Socket.io", "Express", "MongoDB"],
            github: "#",
            live: "#",
            metrics: { users: "100K+", sessions: "10K concurrent", retention: "85%" },
            featured: true
        },
        {
            id: 5,
            title: "CyberShield SecOps",
            description: "Enterprise cybersecurity platform with AI threat detection, automated incident response, and comprehensive compliance reporting.",
            longDescription: "Developed an enterprise-grade security platform that protects 500+ organizations from cyber threats. Features machine learning-based anomaly detection and automated response systems.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
            category: "backend",
            tags: ["Python", "Apache Kafka", "Elasticsearch", "Docker", "AWS"],
            github: "#",
            live: "#",
            metrics: { threats: "99.8% blocked", response: "<30s", clients: "500+" },
            featured: false
        },
        {
            id: 6,
            title: "CreativeStudio Pro",
            description: "Professional design collaboration platform with real-time editing, version control, and AI-assisted design suggestions.",
            longDescription: "Built a comprehensive creative workflow platform used by 200+ design agencies worldwide. Includes advanced collaboration tools, automated asset optimization, and intelligent design recommendations.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
            category: "frontend",
            tags: ["React", "Canvas API", "WebGL", "Node.js", "Firebase"],
            github: "#",
            live: "#",
            metrics: { agencies: "200+", projects: "50K+", collaboration: "Real-time" },
            featured: false
        }
    ]

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
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeFilter === filter.id
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
                            className={`group relative bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-600/25 ${
                                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
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
                                    <p className="text-gray-400 text-sm leading-relaxed">
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

                                {/* Action Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-4 py-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/40 hover:to-purple-600/40 border border-violet-500/30 rounded-xl text-violet-300 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25"
                                >
                                    View Details
                                </motion.button>
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