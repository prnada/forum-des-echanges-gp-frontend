// SideBar.js

const SideBar = () => {
  // Add your sidebar content here
  return (
    <div className="sidebar absolute top-full right-0 mt-2 bg-darkslategray-100 w-64 shadow-lg z-50">
      {/* Add sidebar content here */}
      <div className="p-4 text-white">
        Help
      </div>
      <div className="p-4 text-white">
        About
      </div>
      <div className="p-4 text-white">
        Terms of service
      </div>
      <div className="p-4 text-white">
        Q/A
      </div>
      <div className="p-4 text-white">
        logout
      </div>
    </div>
  );
};

export default SideBar;
