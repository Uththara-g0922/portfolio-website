import { FaGithub, FaHeart, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom, #000000, #111827)'
          : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-orange-500">
              Portfolio
            </h3>

            <p
              className="text-sm"
              style={{
                color: darkMode ? '#9ca3af' : '#6b7280',
              }}
            >
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Uththara-g0922"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white ${
                darkMode
                  ? 'bg-[#374151] text-white'
                  : 'bg-[#f3f4f6] text-[#374151]'
              }`}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/uththara-nethmini-627b572b7/"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white ${
                darkMode
                  ? 'bg-[#374151] text-white'
                  : 'bg-[#f3f4f6] text-[#374151]'
              }`}
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white ${
                darkMode
                  ? 'bg-[#374151] text-white'
                  : 'bg-[#f3f4f6] text-[#374151]'
              }`}
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-8 pt-6 border-t"
          style={{
            borderColor: darkMode ? '#374151' : '#d1d5db',
          }}
        >
          <p
            className="flex items-center justify-center gap-1 text-sm"
            style={{
              color: darkMode ? '#9ca3af' : '#6b7280',
            }}
          >
            © {currentYear} Made with
            <FaHeart className="text-red-500 mx-1" />
            by
            <span className="text-[#f97316] font-medium ml-1">
              Uththara Nethmini
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;