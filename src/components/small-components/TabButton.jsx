import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function TabButton ( {icon ,  isSelected , onClick}){
  return (
    <button onClick={onClick} className={`p-3 rounded-xl transition-all duration-300 ${
      isSelected
        ? 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white shadow-md shadow-yellow-500/50'
        : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white'
    }`}>
      {<FontAwesomeIcon icon={icon}  className='text-white text-xl'/>}
    </button>
  )
}