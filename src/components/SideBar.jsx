import { faHouse, faUser, faBarsProgress, faMessage } from '@fortawesome/free-solid-svg-icons';
import TabButton from './small-components/TabButton';

export default function SideBar({ selectedTab, onChangeTab }) {
  return (
    <div className="md:w-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-3 flex md:flex-col items-center justify-center gap-4 md:gap-6">
      <TabButton icon={faHouse} isSelected={selectedTab === 1} onClick={() => onChangeTab(1)} />
      <TabButton icon={faUser} isSelected={selectedTab === 2} onClick={() => onChangeTab(2)} />
      <TabButton icon={faBarsProgress} isSelected={selectedTab === 3} onClick={() => onChangeTab(3)} />
      <TabButton icon={faMessage} isSelected={selectedTab === 4} onClick={() => onChangeTab(4)} />
    </div>
  );
}
