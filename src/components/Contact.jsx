import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiClock, FiGlobe } from "react-icons/fi"
import { BiBookBookmark } from "react-icons/bi"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    useEffect(() => {
        const cards = cardsRef.current?.children

        if (cards) {
            gsap.fromTo(cards,
                { opacity: 0, y: 50, rotationX: 15 },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )
        }
    }, [])

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const [rating, setRating] = useState(0);
    const [averageRating, setAverageRating] = useState(4.6); // mock average


    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({ name: '', email: '', message: '' })
    }

    const contactInfo = [
        {
            icon: FiMail,
            label: "Email",
            value: "aman.goswami@techmail.com",
            href: "mailto:aman.goswami@techmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: FiPhone,
            label: "Phone",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: FiMapPin,
            label: "Location",
            value: "San Francisco, CA",
            href: "#",
            color: "from-red-500 to-pink-500"
        },
        {
            icon: FiGlobe,
            label: "Website",
            value: "www.amangoswami.dev",
            href: "https://www.amangoswami.dev",
            color: "from-purple-500 to-violet-500"
        }
    ]

    const socialLinks = [
        {
            icon: FiGithub,
            label: "GitHub",
            href: "https://github.com/amangoswami",
            color: "hover:text-gray-300"
        },
        {
            icon: FiLinkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/amangoswami",
            color: "hover:text-blue-400"
        },
        {
            icon: FiTwitter,
            label: "Twitter",
            href: "https://twitter.com/amangoswami",
            color: "hover:text-sky-400"
        },
        {
            icon: BiBookBookmark,
            label: "Blog",
            href: "https://blog.amangoswami.dev",
            color: "hover:text-orange-400"
        }
    ]

    const workingHours = [
        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
        { day: "Saturday", hours: "10:00 AM - 2:00 PM PST" },
        { day: "Sunday", hours: "Closed" }
    ]

    return (
        <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-violet-900/20 to-black py-20 lg:px-24 px-10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Ready to bring your next project to life? Let's discuss how we can create something extraordinary together.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        {/* Contact Information Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-violet-300 flex items-center">
                                <FiMail className="w-6 h-6 mr-3" />
                                Contact Information
                            </h3>
                            <div ref={cardsRef} className="space-y-4">
                                {contactInfo.map((contact, index) => {
                                    const Icon = contact.icon
                                    return (
                                        <motion.a
                                            key={contact.label}
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            whileTap={{ scale: 0.98 }}
                                            href={contact.href}
                                            className="cursor-none flex items-center p-4 bg-gradient-to-r from-gray-800/50 to-violet-800/30 rounded-xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 group"
                                        >
                                            <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">{contact.label}</p>
                                                <p className="text-white font-medium">{contact.value}</p>
                                            </div>
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </motion.div>


                        {/* Working Hours */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500"
                        >
                            <h3 className="text-xl font-bold mb-6 text-violet-300 flex items-center">
                                <FiClock className="w-5 h-5 mr-3" />
                                Availability
                            </h3>
                            <div className="space-y-3">
                                {workingHours.map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b border-violet-500/10 last:border-b-0">
                                        <span className="text-gray-300">{schedule.day}</span>
                                        <span className="text-violet-400 font-medium">{schedule.hours}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 bg-green-600/20 border border-green-500/30 rounded-lg">
                                <p className="text-green-400 text-sm flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                    Available for new projects
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/80 to-violet-900/40 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-violet-300 flex items-center">
                            <FiSend className="w-6 h-6 mr-3" />
                            Send Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    required
                                    className="cursor-none w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300 hover:border-violet-400/50"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your.email@example.com"
                                    required
                                    className="cursor-none w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300 hover:border-violet-400/50"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    rows={6}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project, timeline, budget, and how I can help bring your vision to life..."
                                    required
                                    className="cursor-none w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-300 hover:border-violet-400/50 resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="cursor-none w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-600/50 flex items-center justify-center space-x-2"
                            >
                                <FiSend className="w-5 h-5" />
                                <span>Send Message</span>
                            </motion.button>

                            <p className="text-gray-400 text-sm text-center">
                                I'll get back to you within 24 hours. For urgent matters, feel free to call directly.
                            </p>
                        </form>
                        <div className="mt-10 text-center">
                            <h4 className="text-lg font-semibold text-violet-300 mb-3">Rate this website</h4>

                            <div className="flex justify-center gap-2 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                        type="button"
                                        className={`text-2xl transition-transform transform hover:scale-125 ${rating >= star ? 'text-yellow-400' : 'text-gray-500'
                                            }`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>

                            <p className="text-sm text-gray-400">
                                Average rating: <span className="font-medium text-white">{averageRating.toFixed(1)}</span> / 5
                            </p>
                        </div>

                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-br from-gray-900/50 to-violet-900/30 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20"
                >
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Whether it's a complex web application, mobile app, or full-stack solution,
                        I'm here to turn your ideas into reality with cutting-edge technology and exceptional user experience.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+15551234567"
                            className="cursor-none px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-violet-600/50 flex items-center justify-center space-x-2"
                        >
                            <FiPhone className="w-5 h-5" />
                            <span>Call Now</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:aman.goswami@techmail.com"
                            className="cursor-none px-8 py-4 bg-transparent border-2 border-violet-600 hover:bg-violet-600/20 text-violet-300 hover:text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <FiMail className="w-5 h-5" />
                            <span>Email Me</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-8 border-t border-violet-500/20"
                >
                    <p className="text-gray-400">
                        © 2024 Aman Goswami. Crafted with passion and precision.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact