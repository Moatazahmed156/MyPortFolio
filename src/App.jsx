import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Profile from "./components/profile";
import ProjectsScreen from "./components/Projects";

function App() {
  const [tab, setTab] = useState(1);

  const renderComponent = () => {
    switch (tab) {
      case 1:
        return <Home />;
      case 2:
        return <Profile />;
      case 3:
        return <ProjectsScreen/>;
      case 4:
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col items-center font-madimi p-4 md:p-8">
      <Header />
      <div className="sm:w-[80%] w-full flex flex-col md:flex-row gap-8">
        <SideBar selectedTab={tab} onChangeTab={setTab} />
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
