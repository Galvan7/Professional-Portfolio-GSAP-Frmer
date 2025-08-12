import { motion, AnimatePresence } from "framer-motion"
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX, FiLink } from "react-icons/fi"
import { BiBookBookmark } from "react-icons/bi";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Header = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' or 'error'
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
    setStatusType("");

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsLoading(false);
        setStatusType("success");
        setStatusMessage("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" });

        // Close after short delay
        setTimeout(() => {
          setStatusMessage("");
          closeContactform();
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        setIsLoading(false);
        setStatusType("error");
        setStatusMessage("❌ Something went wrong");
      });
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (() => {
    setIsOpen(!isOpen)
  });

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactform = (() => {
    setContactFormOpen(true)
  });
  const closeContactform = (() => {
    setContactFormOpen(false)
  });

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* div for logo ie icon and Aman Goswami */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2
          }}
          className="flex items-center">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            A
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Aman Goswami
          </span>
        </motion.div>
        {/* end */}
        {/* navigation bar */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item, idx) => {
            return (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + idx * 0.2
                }}
                href={`#${item}`}
                key={item} className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300">
                </span>
              </motion.a>)
          })}
        </nav>
        {/* end */}
        {/* social icons */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://github.com/Galvan7" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://x.com/Theomastix45" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://www.linkedin.com/in/amangoswamiofc/" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://drive.google.com/file/d/1bgSj9cMvGDhp7uUexZB75ItkqahuZc-w/view?usp=drivesdk" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            <BiBookBookmark className="w-5 h-5" />
          </motion.a>
        </div>
        {/* end */}
        {/* hire me */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          onClick={openContactform}
          className="max-[400px]:hidden cursor-none ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold text-sm md:text-base hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
        >
          Hire Me
        </motion.button>

        {/* end */}
        {/* mobile menu button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}>
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
        {/* end */}
      </div>
      {/* mobile menu container */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.5
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5">
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item, idx) => {
            return (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + idx * 0.2
                }}
                onClick={toggleMenu}
                href={`#${item}`} key={item} className="relative text-gray-300 font-medium py-2 ">
                {item}
              </motion.a>)
          })}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/Galvan7">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/amangoswamiofc/">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a href="https://x.com/Theomastix45">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>
            <a href="https://drive.google.com/file/d/1bgSj9cMvGDhp7uUexZB75ItkqahuZc-w/view?usp=drivesdk">
              <BiBookBookmark className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <button onClick={() => {
            toggleMenu()
            openContactform()
          }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold">
            Contact me
          </button>
        </div>
      </motion.div>
      {/* end */}
      {/* contact form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 relative">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
                <button onClick={closeContactform}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold"></FiX>
                </button>
              </div>
              <form className="space-y-4" onSubmit={sendEmail}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                    disabled={isLoading} // Disable input during loading
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                    disabled={isLoading} // Disable input during loading
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I be of service"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                    disabled={isLoading} // Disable textarea during loading
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: isLoading ? 1 : 1.03 }}
                  whileTap={{ scale: isLoading ? 1 : 0.97 }}
                  className={`w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-violet-600/50 relative ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : statusMessage ? (
                    <span className={statusType === "success" ? "text-green-300" : "text-red-300"}>
                      {statusMessage}
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* end */}
    </header>
  )
}