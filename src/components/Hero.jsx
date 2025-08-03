import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';
const Hero = () => {
    return (
        <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

            {/* left section  */}
            <div className="z-40 xl:mb-0 mb-[20%]">
                <motion.h1 initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5
                    }}
                    className="text-4xl md:text-6xl lg:text-6xl z-10 font-bold mb-6">Code. Ship.<br /> Prove. Repeat.</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5
                    }}
                    className="text-md md:text-xl lg:text-xl text-purple-200 max-w-2xl">
                    I’m Aman Goswami — a full-stack developer building fast, scalable, and reliable systems.I specialize in backend engineering with Golang, Node.js, Python, and C++, using PostgreSQL and Oracle. 
On the frontend, I craft interactive UIs with React, Next.js, and TypeScript, powered by tools like GSAP, Spline, and Framer Motion. 
From cloud infrastructure (AWS) to DevOps, I deliver production-ready solutions end to end.
                </motion.p>
            </div>

            {/* right section  */}
            <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/78Ib7TD0WMPurGIB/scene.splinecode" />
        </section>
    )
}

export default Hero