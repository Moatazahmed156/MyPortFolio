import Character from "../assets/character.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return <header className="sm:w-[80%] w-full flex justify-between items-center p-2 sm:p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg mb-8">
        <div className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-lg border-2 border-red-500 group-hover:border-yellow-400 transition-all duration-500">
                <img
                    src={Character}
                    alt="Moataz"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400  bg-clip-text text-transparent animate-text-shimmer">
                Moataz Ahmed
            </h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex gap-2 sm:gap-3">
                <a href="https://github.com/Moatazahmed156" target="_blank" className="relative group w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 shadow-lg">
                    <FontAwesomeIcon icon={faGithub}  className="text-2xl text-white transition-transform duration-300 transform hover:scale-110" />
                </a>
                <a href="https://www.linkedin.com/in/moataz-ahmed-b02438255/" target="_blank" className="relative group w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 shadow-lg">
                    <FontAwesomeIcon icon={faLinkedin}  className="text-2xl text-white transition-transform duration-300 transform hover:scale-110" />
                </a>
            </div>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-xl blur opacity-0"></div>
                <a href="https://drive.google.com/file/d/1pnwZwy76HT784d0-msq53YsR6Q0hMNa-/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white px-4 py-2 sm:px-6 sm:py-2.5 flex items-center gap-2 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                <FontAwesomeIcon icon={faDownload} className="text-xl text-white max-sm:hidden" />
                <span className="font-medium text-sm sm:text-base">Resume</span>
                </a>
            </div>
        </div>
    </header>
}