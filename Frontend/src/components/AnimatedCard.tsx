import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ShortenerForm from "./ShortenerForm";

interface props {
  URL: string;
}

const AnimatedCard = ({URL}: props) => {
    const controls = useAnimation();
  
    useEffect(() => {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 },
      });
    }, [controls]);
  
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-500 rounded-3xl p-8 py-12 shadow-lg max-w-2xl w-full mb-6"
      >
        <h2 className="text-white text-4xl font-semibold text-center">Shorten your URLs</h2>
        <p className="text-white mt-4 text-center sm:px-16 text-gray-300">
          Create shortened URLs for your websites, social media, and more. 
        </p>
        <div className="max-w-sm mx-auto">
          <ShortenerForm URL={URL}/>
        </div>
      </motion.div>
    );
  };

export default AnimatedCard;