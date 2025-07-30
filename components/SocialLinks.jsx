import { FaFacebook, FaInstagram, FaLinkedin ,FaTwitter} from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex gap-4 text-2xl mt-2">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-black dark:text-white hover:text-purple-500 transition" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-black dark:text-white hover:text-purple-500 transition" />
      </a> 
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-black dark:text-white hover:text-purple-500 transition" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-black dark:text-white hover:text-purple-500 transition" />
      </a>
    </div>
  );
}
