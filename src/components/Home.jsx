import me from "../assets/img2.jpg"
export default function Home(){
    return(
        <div className="flex-1 bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 p-6 md:p-8 overflow-y-auto">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col lg:flex-row items-center justify-center p-6 md:p-8 gap-6 md:gap-12">
                <div className="relative w-full lg:w-2/5 h-64 lg:h-96 flex items-center justify-center group">
                    <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                        <div className="absolute inset-0 border-2 border-red-500 rounded-2xl transform rotate-3 transition-all duration-700 group-hover:rotate-4 group-hover:scale-[1.02] shadow-md shadow-yellow-500/50 backdrop-blur-[1px]"></div>
                        <div className="absolute inset-0 bg-gray-800/30 rounded-2xl shadow-lg overflow-hidden transform -rotate-2 transition-all duration-700 group-hover:-rotate-3 group-hover:shadow-indigo-500/40">
                            <img src={me} alt="Portrait of Moataz Ahmed"  className="object-cover rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left fade-in-left">
                    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 bg-[length:200%_auto] animate-text-gradient">
                        Moataz Ahmed
                        </span>
                    </h1>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-[1.3rem] font-medium h-20 max-xl:h-24 flex items-center">
                        Full-Stack Developer | React.js | Node.js | React Native | Flutter | Problem Solving
                    </p>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 bg-gray-900/30 p-4 rounded-lg border border-gray-700/30">
                        Hi, I'm Moataz Ahmed, a passionate Full-Stack Developer specializing in modern web and mobile technologies.
                        I build responsive, user-friendly apps using the MERN stack, Flutter, and React Native.
                        <br />
                        I'm always exploring new tech, improving performance, and crafting clean, user-friendly interfaces.
                        My focus is on writing efficient code, building real-world projects, and growing every day as a developer.
                    </p>
                </div>
            </div>
        </div>
    );
}
