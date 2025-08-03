import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)
    const skillsRef = useRef(null)
    const statsRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const skills = skillsRef.current.children
        const stats = statsRef.current.children

        // Skills animation
        gsap.fromTo(skills, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                }
            }
        )

        // Stats counter animation
        gsap.fromTo(stats,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 80%",
                }
            }
        )
    }, [])

    const skills = [
        { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Node.js/Golang", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "Python/C++", level: 88, color: "from-yellow-500 to-orange-500" },
        { name: "PostgreSQL/Oracle", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "AWS/DevOps", level: 82, color: "from-red-500 to-rose-500" },
        { name: "TypeScript", level: 92, color: "from-indigo-500 to-blue-500" }
    ]

    const stats = [
        { number: "50+", label: "Projects Completed", icon: "🚀" },
        { number: "3+", label: "Years Experience", icon: "⚡" },
        { number: "15+", label: "Technologies Mastered", icon: "🛠️" },
        { number: "99%", label: "Client Satisfaction", icon: "⭐" }
    ]

    return (
        <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-violet-900/20 to-black py-20 lg:px-24 px-10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    {/* Left Column - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-gray-900/50 to-violet-900/30 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-violet-300">My Journey</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Started my coding journey at 16, fascinated by the power of technology to solve real-world problems. 
                                What began as curiosity about how websites work evolved into a passion for building scalable, 
                                high-performance systems that millions can rely on.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Today, I architect full-stack solutions that bridge the gap between complex backend logic and 
                                stunning user experiences. My approach combines technical excellence with creative problem-solving, 
                                ensuring every project delivers both functionality and delight.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/50 to-violet-900/30 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-violet-300">Philosophy</h3>
                            <p className="text-gray-300 leading-relaxed">
                                "Code is poetry in motion." I believe in writing clean, maintainable code that not only works 
                                flawlessly but also tells a story. Every function, every component, every API endpoint is crafted 
                                with intention, scalability, and user experience at its core.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-gray-900/50 to-violet-900/30 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20">
                            <h3 className="text-2xl font-bold mb-6 text-violet-300">Technical Arsenal</h3>
                            <div ref={skillsRef} className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-violet-400 font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900/50 to-violet-900/30 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center text-violet-300">Impact & Achievements</h3>
                    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className="text-center group">
                                <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-xl p-6 border border-violet-500/30 hover:border-violet-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-600/25">
                                    <div className="text-4xl mb-3">{stat.icon}</div>
                                    <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-xl text-gray-300 mb-6">Ready to build something extraordinary together?</p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-none px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-violet-600/50"
                    >
                        Let's Connect
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default About