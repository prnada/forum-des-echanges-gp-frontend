import Category from "../components/Category";
import Header2 from "../components/Header2";

const Categories = () => {
  return (
    <div className="flex flex-col bg-gray w-full min-h-screen text-black font-inter">
      <Header2></Header2>
      <main className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-extrabold">Categories</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Category
          </button>
        </div>
        <section>
          <Category />
          <Category />
          <Category />
        </section>
      </main>
      <footer className="bg-black text-white p-4 text-center mt-auto">
        All Rights Reserved. © 2024 Forum Name
      </footer>
    </div>
  );
};

export default Categories;
