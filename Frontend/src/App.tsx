import { FiGithub, FiLinkedin, FiUser } from "react-icons/fi"
import AnimatedCard from "./components/AnimatedCard"
import AnimatedHeader from "./components/AnimatedHeader"
import AnimatedRoundedTag from "./components/AnimatedRoundedTag"
import SocialMediaIcon from "./components/SocialMediaIcon"

const URL = "https://nlap.vercel.app" 


function App() {
  return (
    <main className='relative m-0 p-0 pb-0'>
      <div className=" inset-0 flex items-center justify-center z-30 px-4 pt-10 pb-10 min-h-screen" style={{
        backgroundImage: "url(/techcomputer.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="flex flex-col items-center">
          <AnimatedRoundedTag />
          <AnimatedHeader />
          <AnimatedCard URL={URL} />
          <div className="flex gap-4">
            <SocialMediaIcon icon={<FiLinkedin />} delay={0.2} href="https://www.linkedin.com/in/adrian-palacios-arvizu" />
            <SocialMediaIcon icon={<FiGithub />} delay={0.4} href="https://github.com/AdrianPalacios03" />
            <SocialMediaIcon icon={<FiUser />} delay={0.6} href="https://adrian-palacios.netlify.app/en" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
