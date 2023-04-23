import React from "react";

const Sidebar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(true);

  return (
    <aside className="bg-gray-800 text-white w-64 md:w-80 min-h-screen">
      <button
        onClick={() => setOpen(!isOpen)}
        className="bg-gray-700 text-white p-2 mt-2 mb-2 ml-2"
      >
        {!isOpen && <span>Show Sidebar</span>}
        {isOpen && <span x-show="open">Hide Sidebar</span>}
      </button>
      {isOpen && (
        <div className="px-4 py-2 space-y-2">
          <a
            href="#"
            className="block p-2 bg-gray-900 hover:bg-gray-700 rounded"
          >
            Dashboard
          </a>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Analytics
          </a>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Settings
          </a>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Profile
          </a>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
