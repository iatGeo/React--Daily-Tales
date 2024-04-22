import { NavLink } from "react-router-dom";

function ViewAllStories() {
   return (
      <section className="m-auto max-w-lg my-10 px-6">
         <NavLink
            to="/stories"
            className="block bg-orange-500 text-white text-center py-4 px-6 rounded-xl hover:bg-orange-700"
         >
            View All Stories
         </NavLink>
      </section>
   );
}

export default ViewAllStories;
