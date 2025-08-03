import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';
const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative">

            {/* left section  */}
            <div className="z-40 xl:mb-0 mb-[-20%] space-y-10">
                <motion.h1 initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5
                    }}
                    className="text-4xl md:text-6xl lg:text-6xl z-10 font-bold">Code. Ship.<br /> Prove. Repeat.</motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5
                    }}
                    className="text-md md:text-xl lg:text-xl text-purple-200 max-w-2xl space-y-2 text-justify">
                    <p> I’m Aman Goswami — a full-stack developer building scalable, high-performance systems.
                        On the backend, I specialize in building robust APIs and microservices using Golang, Node.js, Python, and C++, with strong expertise in relational databases like PostgreSQL and OracleDB. <br /></p>
                    <p>On the frontend, I craft and dynamic UIs with React, Next.js, and TypeScript, powered by Framer Motion, GSAP, and Spline. <br />
                    </p>
                    <p>I manage cloud infrastructure on AWS, follow DevOps best practices, and deliver end-to-end, production-ready solutions.
                        </p>
                </motion.div>
            </div>

            {/* right section  */}
            <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/78Ib7TD0WMPurGIB/scene.splinecode" />
        </section>
    )
}

export default Hero