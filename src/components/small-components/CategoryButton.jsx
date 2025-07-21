export default function CategoryButton({title , isSelected , onClick}){

    return(
        <button onClick={onClick} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
      isSelected
        ? 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white shadow-md shadow-yellow-500/50'
        : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white'
    }`}>
            {title}
        </button>
    );
}