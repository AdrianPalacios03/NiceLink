import axios from "axios";
import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

interface props {
    URL: string;
}

const ShortenerForm = ({URL}: props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  
    const [isLoading, setIsLoading] = useState(false)
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      setIsLoading(true)
      e.preventDefault();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await axios.post(URL, { originalUrl }, config);
      setShortUrl(response.data.shortUrl);
      setIsLoading(false)
    };
  
    return (
      <>
        <form
          onSubmit={handleSubmit}
          className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-black py-1.5 pl-6 pr-1.5 mt-6 shadow-2xl shadow-white"
        >
          <input
            ref={inputRef}
            type="text"
            onChange={(e) => setOriginalUrl(e.target.value)}
            value={originalUrl}
            placeholder="Enter your URL"
            className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
          />
          <button
            type="submit"
            className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gray-200 px-4 py-3 text-sm font-medium text-black transition-transform active:scale-[0.985]"
          >
            {
              isLoading ? (
                <svg className="animate-spin h-4 w-4 border-b-2 border-gray-800 rounded-full" viewBox="0 0 24 24"></svg>
              ) : (
                <>
                  <span>Shorten</span>
                  <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
                </>
              )
            }
          </button>
        </form>
  
        {
          shortUrl && (
            <div className="mt-6 text-center">
              <span className="text-white">Short URL:</span>
              <a
                href={`${URL}/${shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white mt-2 underline"
              >
                {URL}/{shortUrl}
              </a>
            </div>
          )
        }
      </>
    );
  };
  

export default ShortenerForm;