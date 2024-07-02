import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface SocialMediaIconProps {
    icon: React.ReactNode;
    delay: number;
    href: string;
}

const SocialMediaIcon = ({ icon, delay, href }: SocialMediaIconProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { delay, duration: 0.5, type: "spring", stiffness: 100 },
    });
  }, [controls, delay]);

  return (
    <motion.a
      initial={{ opacity: 0, rotate: -45, scale: 1 }}
      animate={controls}
      whileHover={{ scale: 1.1,  boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
      className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 rounded-lg p-3 shadow-md flex items-center justify-center text-white text-xl"
      href={href}
      target="_blank"
    >
      {icon}
    </motion.a>
  );
};

export default SocialMediaIcon;