import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedHeader = () => {
    const controls = useAnimation();
  
    useEffect(() => {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 },
      });
    }, [controls]);
  
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        className="relative flex items-center justify-center w-full mb-8"
      >
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-7xl box-content font-extrabold text-transparent text-center select-none tracking-tight">
          URL Shortener 
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-7xl font-extrabold text-transparent text-center select-auto tracking-tight">
          Nice Link 
        </h1>
      </motion.div>
    );
  };

export default AnimatedHeader;