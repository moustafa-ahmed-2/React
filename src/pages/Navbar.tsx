
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex w-full  items-center bg-gray-900 px-8 py-4 text-white">
   
      <div className="flex-1">
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>

     
      <div className="flex flex-1 items-center justify-center gap-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/users" className="hover:text-blue-400">
          Users
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
      </div>

      {/* User */}
      <div className="flex flex-1 items-center justify-end gap-2">
       
        <span>userPlus</span>
      </div>
    </nav>
  );
}