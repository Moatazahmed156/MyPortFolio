import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import TechCard from './small-components/TechCard';


export default function ProjectDetails({ project, onBack, type }) {
  return (
    <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-6 md:p-8 overflow-y-auto">
        <div className="fade-in-left">
            <div className="h-full text-white flex flex-col p-5 md:p-5 max-w-7xl mx-auto">
                <button onClick={onBack} className="mb-8 flex items-center gap-3 text-red-500 hover:text-white group"><FontAwesomeIcon icon={faArrowLeft} /> Back to Projects</button>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-[50%] space-y-6">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10">
                        <img src={project.image} alt="" className="w-auto h-auto"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="translate-y-4 hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                <p className="text-gray-300 text-sm">{type}</p>
                            </div>
                        </div>
                        </div>
                        <div className="bg-gray-900/50 p-5 rounded-xl backdrop-blur-sm border border-gray-700/30">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCodeBranch} />
                                    </div>
                                    <div>
                                        <p>Category</p>
                                        <p className='text-gray-300'>{type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[45%] space-y-8">
                        <div>
                            <h2 className='text-3xl md:text-4xl font-bold mb-2 py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent'>
                                {project.name}
                            </h2>
                            <div className='h-[6px] w-16 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full mb-4'></div>
                        </div>
                        <div className='bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30'>
                            <h3 className='text-xl font-semibold mb-3 text-orange-400 flex items-center gap-2'>
                                <div className='w-2 h-2 rounded-full bg-orange-200 animate-pulse'></div>
                                Description
                            </h3>
                            <p className='text-gray-300 leading-relaxed whitespace-pre-line'>{project.description}</p>
                        </div>
                        <div className='bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30'>
                            <h3 className='text-xl font-semibold mb-3 text-orange-400 flex items-center gap-2'>
                                <div className='w-2 h-2 rounded-full bg-orange-200 animate-pulse'></div>
                                Technologies
                            </h3>
                            <div className='flex flex-wrap gap-3'>
                                {project.tech.map((e , i) => <TechCard title={e} key={i}/>)}
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 pt-2'>
                            <a href={project.repo} target='_blank' className='flex-1 flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 border border-gray-700 hover:border-gray-600'>
                                View Code
                            </a>
                            <a href={project.demo} target='_blank' className='flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white px-6 py-3.5 rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all duration-300'>
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
