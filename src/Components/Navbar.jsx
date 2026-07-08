// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <h1>National Park</h1>
//       <nav>
//         <Link className="text-blue-500" to="/">Home</Link>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-900 text-white shadow-md h-20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        <h1 className="font-bold text-xl tracking-wide text-white">
          🏞️ National Park
        </h1>

        <nav className="flex gap-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white font-medium transition-colors"
          >
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;