import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Skills from './Skills';

export default function Profile() {
    return (
        <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-6 md:p-8 overflow-y-auto">
            <div className="fade-in-top">
                <div className="h-full text-white flex max-md:flex-col p-6 lg:p-10 max-w-7xl mx-auto">
                    <div className="flex flex-col min-[1250px]:flex-row gap-8 lg:gap-12">
                        <div className="flex-1 mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                                Invent The Future
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I'm <span className="text-orange-500 font-medium">Moataz Ahmed</span>, a Computer Science student at Akhbar Elyom Academy and a passionate Full-Stack Developer with 
                                <span className="text-orange-500 font-medium"> +2 years </span> of practical experience. I've successfully built and deployed over 
                                <span className="text-orange-500 font-medium"> +30 real-world projects</span> using modern technologies.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                My expertise spans 
                                <span className="text-orange-500 font-medium"> Tailwind CSS</span>, 
                                <span className="text-orange-500 font-medium"> React.js</span>, 
                                <span className="text-orange-500 font-medium"> Node.js</span>,  
                                <span className="text-orange-500 font-medium"> React Native</span>, 
                                <span className="text-orange-500 font-medium"> Flutter</span>, and 
                                <span className="text-orange-500 font-medium"> Competitive Programming</span>.I'm passionate about creating impactful applications and solving real-world problems through clean and efficient code.
                            </p>
                            <p className="flex items-center gap-2 text-orange-500 text-sm md:text-base">
                                <FontAwesomeIcon icon={faLocationDot} />
                                Based in Cairo, Egypt - Open to remote, freelance, part-time, or full-time opportunities.
                            </p>
                        </div>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}
