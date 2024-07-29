import SideLinks from "./side-links";

export default function Sidebar() {
    return (
      <div className="flex flex-col h-screen bg-white">
        <div className="flex items-center h-20 border-b ml-5">
          <a href="#" className="text-xl font-bold">Aenar</a>
        </div>
        <nav className="flex flex-col h-[70vh] ml-5 justify-center space-y-5">
          <SideLinks />
        </nav>
      </div>
    );
  }