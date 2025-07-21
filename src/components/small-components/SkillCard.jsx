export default function SkillCard({ logo, title }) {
    return (
        <div className="flex flex-col w-[75px] items-center justify-center space-y-2 p-2 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            {
                logo &&
                <img src={logo} alt="skill logo" className="w-14 h-14 object-contain" />
            }
            <p className={`text-white text-center ${logo ? 'text-xs' : 'text-sm font-semibold'}`}>
                {title}
            </p>
        </div>
    );
}