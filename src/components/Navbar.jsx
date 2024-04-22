import { NavLink } from "react-router-dom";
import logo from "../assets/images/writing-2770069_1280.png";

function Navbar() {
   const activeStylesClass = ({ isActive }) =>
      isActive
         ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
         : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

   return (
      <nav className="bg-orange-300 border-b">
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
               <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                  <NavLink
                     className="flex flex-shrink-0 items-center mr-4"
                     to="/"
                  >
                     <img
                        className="h-10 w-auto"
                        src={logo}
                        alt="Write Stories"
                     />
                     <span className="hidden md:block text-white text-2xl font-bold ml-2">
                        Daily Tales
                     </span>
                  </NavLink>
                  <div className="md:ml-auto">
                     <div className="flex space-x-2">
                        <NavLink to="/" className={activeStylesClass}>
                           Home
                        </NavLink>
                        <NavLink to="/stories" className={activeStylesClass}>
                           Stories
                        </NavLink>
                        <NavLink to="/add-story" className={activeStylesClass}>
                           Add a Story
                        </NavLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
