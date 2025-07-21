export default function ProjectCard({title, image, openProject}){
    return (
        <div onClick={ openProject} className="group relative cursor-pointer bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <img src={image} alt="" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4"> 
                <h3 className="text-lg font-semibold truncate">{title}</h3>
            </div>
        </div>
    );
}