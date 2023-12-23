import React from 'react';

const Header2 = () => {
  return (
    <header className="bg-black text-white w-full flex justify-between items-center py-2 px-4 md:px-8 lg:px-16">
      <div className="text-2xl lg:text-3xl font-bold">Forum name</div>
      <div className="flex items-center gap-3 lg:gap-5">
        <img className="w-8 h-8 lg:w-15 lg:h-10" src="/frame-6@2x.png" alt="Notifications" />
        <img className="w-16 h-8 lg:w-15 lg:h-10" src="/frame-5@2x.png" alt="User account" />
        <img className="w-8 h-8 lg:w-15 lg:h-10" src="/line-1@2x.png" alt="Menu" />
      </div>
    </header>
  );
};

export default Header2;
