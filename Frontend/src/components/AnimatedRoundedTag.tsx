import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiTag } from "react-icons/fi";

const AnimatedRoundedTag = () => {
    const controls = useAnimation();
  
    useEffect(() => {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 },
      });
    }, [controls]);
  
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-gray-500 rounded-full px-4 py-2 flex items-center gap-2 shadow-md mb-6"
      >
        <FiTag className="text-white" />
        <span className="text-white text-sm font-medium">URL Shortener</span>
      </motion.div>
    );
  };

export default AnimatedRoundedTag;