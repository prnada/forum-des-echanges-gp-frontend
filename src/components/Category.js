import { useState, useEffect } from 'react';

const Category = () => {
    const [showMenu, setShowMenu] = useState(false);

    // Function to close the menu when clicking outside of it
    const closeMenu = (e) => {
        // Close only if clicking outside the menu
        if (showMenu && e.target.closest('.menu-container') === null) {
            setShowMenu(false);
        }
    };

    // Add event listener when the menu is shown
    useEffect(() => {
        if (showMenu) {
            document.addEventListener('click', closeMenu);
        }

        // Cleanup event listener
        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 my-2 relative">
            <div className="ml-4 font-bold text-xl flex-1">
                Category Title
            </div>
            <div className="flex-1">
                <div className="font-semibold">Posts created</div>
            </div>
            <div className="flex-1">
                <div className="font-semibold">Latest Post</div>
            </div>
            <div className="flex-1">
                <div className="font-semibold">Date</div>
            </div>
            <button className="bg-black text-white rounded-md px-6 py-2">
                Explore
            </button>
            <div className="relative menu-container">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-black text-xl focus:outline-none"
                    style={{ fontSize: "2rem", padding: "0.5rem" }}
                >
                    ⋮
                </button>
                {showMenu && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" className="block px-4 py-2 text-sm text-red hover:bg-gray-100" role="menuitem">Remove Category</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;
