import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiCalendar, FiMapPin, FiTrendingUp, FiAward, FiUsers, FiCode } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const sectionRef = useRef(null)
    const timelineRef = useRef(null)
    const [activeTab, setActiveTab] = useState('experience')

    useEffect(() => {
        const timeline = timelineRef.current
        const items = timeline?.children

        if (items) {
            gsap.fromTo(items,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "power.out",
                    scrollTrigger: {
                        trigger: timeline,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )
        }
    }, [])

    const experiences = [
        {
            id: 1,
            company: "TechNova Solutions",
            position: "Senior Full-Stack Engineer",
            duration: "2023 - Present",
            location: "San Francisco, CA",
            type: "Full-time",
            description: "Leading development of next-generation fintech solutions serving 2M+ users globally. Architected microservices infrastructure that improved system performance by 300% while reducing operational costs by 40%.",
            achievements: [
                "Spearheaded migration to cloud-native architecture, resulting in 99.99% uptime",
                "Built real-time trading platform processing $50M+ daily transactions",
                "Mentored team of 8 developers, improving code quality metrics by 60%",
                "Implemented AI-driven fraud detection reducing false positives by 75%"
            ],
            technologies: ["React", "Node.js", "Kubernetes", "PostgreSQL", "AWS", "TypeScript"],
            logo: "🚀"
        },
        {
            id: 2,
            company: "DataSphere Analytics",
            position: "Lead Frontend Developer",
            duration: "2022 - 2023",
            location: "New York, NY",
            type: "Full-time",
            description: "Transformed data visualization experiences for Fortune 500 companies. Created interactive dashboards processing billions of data points with sub-second response times.",
            achievements: [
                "Developed award-winning dashboard used by 500+ enterprise clients",
                "Reduced initial load times by 85% through advanced optimization techniques",
                "Led UI/UX redesign increasing user engagement by 200%",
                "Established design system adopted across 15+ product teams"
            ],
            technologies: ["Next.js", "D3.js", "TypeScript", "Python", "Redis", "Docker"],
            logo: "📊"
        },
        {
            id: 3,
            company: "CloudVault Security",
            position: "Backend Developer",
            duration: "2021 - 2022",
            location: "Austin, TX",
            type: "Full-time",
            description: "Built enterprise-grade security solutions protecting critical infrastructure for government and healthcare sectors. Developed APIs handling millions of security events daily.",
            achievements: [
                "Designed distributed system processing 10M+ security events/day",
                "Achieved SOC 2 Type II compliance for entire platform",
                "Reduced API response time from 200ms to 15ms through optimization",
                "Implemented zero-downtime deployment pipeline"
            ],
            technologies: ["Golang", "Apache Kafka", "Elasticsearch", "MongoDB", "gRPC"],
            logo: "🔒"
        },
        {
            id: 4,
            company: "StartupLab Incubator",
            position: "Full-Stack Developer Intern",
            duration: "2020 - 2021",
            location: "Boston, MA",
            type: "Internship",
            description: "Rapid prototyping and MVP development for early-stage startups. Worked across diverse industries from e-commerce to healthcare, gaining invaluable cross-domain expertise.",
            achievements: [
                "Delivered 12+ MVPs with 95% client satisfaction rate",
                "Contributed to 3 startups that raised $5M+ in Series A funding",
                "Mastered rapid development cycles with 2-week sprint deliveries",
                "Built reusable component library used across multiple projects"
            ],
            technologies: ["React", "Express.js", "MongoDB", "Firebase", "Stripe API"],
            logo: "💡"
        }
    ]

    const education = [
        {
            id: 1,
            institution: "Massachusetts Institute of Technology",
            degree: "Master of Science in Computer Science",
            duration: "2019 - 2021",
            location: "Cambridge, MA",
            gpa: "3.9/4.0",
            description: "Specialized in Distributed Systems and Machine Learning. Thesis on 'Quantum-Resistant Cryptography for IoT Networks' received Distinguished Research Award.",
            achievements: [
                "Graduate Research Assistant - MIT CSAIL",
                "Published 3 papers in top-tier conferences (SOSP, OSDI)",
                "Winner - MIT TechCrunch Disrupt Competition 2020",
                "Teaching Assistant for Advanced Algorithms (6.046)"
            ],
            logo: "🎓"
        },
        {
            id: 2,
            institution: "University of California, Berkeley",
            degree: "Bachelor of Science in Computer Science",
            duration: "2015 - 2019",
            location: "Berkeley, CA",
            gpa: "3.8/4.0",
            description: "Magna Cum Laude graduate with focus on Software Engineering and Human-Computer Interaction. Active member of ACM and IEEE student chapters.",
            achievements: [
                "Dean's List - All 8 semesters",
                "President - Computer Science Student Association",
                "Hackathon Winner - Cal Hacks 2018 (Best Technical Implementation)",
                "Summer Research Intern - Google DeepMind"
            ],
            logo: "🐻"
        }
    ]

    const certifications = [
        {
            id: 1,
            name: "AWS Solutions Architect Professional",
            issuer: "Amazon Web Services",
            date: "2023",
            credentialId: "AWS-SAP-2023-AG001",
            logo: "☁️"
        },
        {
            id: 2,
            name: "Certified Kubernetes Administrator",
            issuer: "Cloud Native Computing Foundation",
            date: "2023",
            credentialId: "CKA-2023-AG002",
            logo: "⚙️"
        },
        {
            id: 3,
            name: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "2022",
            credentialId: "GCP-PD-2022-AG003",
            logo: "🌐"
        },
        {
            id: 4,
            name: "Meta React Developer Professional",
            issuer: "Meta (Facebook)",
            date: "2022",
            credentialId: "META-RD-2022-AG004",
            logo: "⚛️"
        }
    ]

    const tabs = [
        { id: 'experience', label: 'Experience', icon: FiTrendingUp },
        { id: 'education', label: 'Education', icon: FiAward },
        { id: 'certifications', label: 'Certifications', icon: FiCode }
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'experience':
                return (
                    <div ref={timelineRef} className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Timeline line */}
                                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 to-purple-600 group-last:hidden"></div>
                                
                                <div className="flex items-start space-x-6">
                                    {/* Timeline dot */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-violet-600/50 group-hover:scale-110 transition-transform duration-300">
                                        {exp.logo}
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-violet-600/25">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                                                <h4 className="text-violet-300 font-semibold mb-2">{exp.company}</h4>
                                            </div>
                                            <div className="flex flex-col lg:text-right space-y-1">
                                                <div className="flex items-center text-gray-400 text-sm">
                                                    <FiCalendar className="w-4 h-4 mr-2" />
                                                    {exp.duration}
                                                </div>
                                                <div className="flex items-center text-gray-400 text-sm">
                                                    <FiMapPin className="w-4 h-4 mr-2" />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                                        
                                        <div className="space-y-3 mb-4">
                                            <h5 className="text-violet-300 font-semibold">Key Achievements:</h5>
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-violet-600/20 text-violet-300 text-xs rounded-full border border-violet-500/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )
            
            case 'education':
                return (
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-600/25 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl">{edu.logo}</div>
                                    <div className="flex-1">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                                <h4 className="text-violet-300 font-semibold mb-2">{edu.institution}</h4>
                                            </div>
                                            <div className="flex flex-col lg:text-right space-y-1">
                                                <div className="flex items-center text-gray-400 text-sm">
                                                    <FiCalendar className="w-4 h-4 mr-2" />
                                                    {edu.duration}
                                                </div>
                                                <div className="text-violet-400 font-semibold text-sm">
                                                    GPA: {edu.gpa}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                                        
                                        <div className="space-y-3">
                                            <h5 className="text-violet-300 font-semibold">Highlights:</h5>
                                            <ul className="space-y-2">
                                                {edu.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )
                
            case 'certifications':
                return (
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-600/25 group hover:scale-105"
                            >
                                <div className="text-center space-y-4">
                                    <div className="text-5xl">{cert.logo}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                                        <p className="text-violet-300 font-medium mb-1">{cert.issuer}</p>
                                        <p className="text-gray-400 text-sm mb-3">Issued: {cert.date}</p>
                                        <p className="text-xs text-gray-500 font-mono bg-gray-800/50 px-3 py-1 rounded">
                                            {cert.credentialId}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )
        }
    }

    return (
        <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-violet-900/20 to-black py-20 lg:px-24 px-10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                        Experience & Education
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        A journey through innovation, learning, and technical excellence
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {tabs.map((tab) => {
                        const Icon = tab.icon
                        return (
                            <motion.button
                                key={tab.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab(tab.id)}
                                className={`cursor-none flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/30'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-violet-500/20'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </motion.button>
                        )
                    })}
                </motion.div>

                {/* Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {renderContent()}
                </motion.div>
            </div>
        </section>
    )
}

export default Experience