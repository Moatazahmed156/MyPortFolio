export default function TechCard({title}){
    return <span className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 px-4 py-2 rounded-lg text-sm text-indigo-100 border border-indigo-700/30 hover:border-indigo-500/50 transition-all">
        {title}
    </span>
}