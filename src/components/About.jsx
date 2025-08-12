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
        { name: "Golang", level: 97, color: "from-cyan-400 to-sky-500" },       // bright cyan → sky blue (eye-catching top)
        { name: "React", level: 96, color: "from-sky-400 to-blue-500" },        // sky → deep blue
        { name: "Next.js", level: 95, color: "from-blue-400 to-indigo-500" },   // cool blue → indigo for depth
        { name: "TypeScript", level: 94, color: "from-indigo-400 to-violet-500" }, // indigo → violet
        { name: "Python", level: 94, color: "from-yellow-300 to-amber-400" },   // bright yellow → amber for warmth
        { name: "C++", level: 92, color: "from-slate-400 to-blue-400" },        // subtle gray-blue for a techy feel
        { name: "PostgreSQL", level: 88, color: "from-purple-400 to-fuchsia-500" }, // purple → fuchsia pops nicely
        { name: "Redis", level: 86, color: "from-red-400 to-orange-500" },      // warm, aggressive tone
        { name: "AWS", level: 85, color: "from-amber-400 to-orange-500" },      // amber → orange (matches AWS theme)
        { name: "Docker", level: 84, color: "from-teal-400 to-cyan-500" },      // teal → cyan (matches Docker whale)
        { name: "Node.js", level: 83, color: "from-emerald-400 to-green-500" }, // emerald → green (matches Node theme)
    ];




    const stats = [
        { number: "10+", label: "Projects Completed", icon: "🚀" },
        { number: "1+", label: "Years Experience", icon: "⚡" },
        { number: "18+", label: "Technologies Mastered", icon: "🛠️" },
        { number: "97%", label: "Client Satisfaction", icon: "⭐" }
    ]

    return (
        <section id="About" ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-violet-900/20 to-black py-20 lg:px-24 px-10 relative overflow-hidden">
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
                                What began as a simple curiosity—wondering how websites and apps actually work—soon evolved into a deep passion for building scalable, high-performance systems that people can trust.
                                I spent countless hours learning how things work under the hood—first with static sites, then diving into programming languages, backend systems, and cloud infrastructure.

                                Today, I’m driven by the same curiosity, but now with a clear mission: to engineer systems that not only solve problems but scale with impact.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Today, I architect full-stack solutions that bridge the gap between complex backend logic and
                                stunning user experiences. My approach combines technical excellence with creative problem-solving,
                                ensuring every project delivers both functionality and delight.I truly love what I do, and that joy fuels everything I build.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/50 to-violet-900/30 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-violet-300">Philosophy</h3>
                            <p className="text-gray-300 leading-relaxed">
                                "Code is poetry in motion." I believe in writing clean, maintainable code that not only works
                                flawlessly but also tells a story. Every function, every component, every API endpoint is crafted
                                with intention, scalability, and user experience at its core. Because in the end, great software is more than logic and syntax — it’s a living narrative of ideas, problem-solving, and craftsmanship that grows and inspires with every line written.
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


            </div>
        </section>
    )
}

export default About