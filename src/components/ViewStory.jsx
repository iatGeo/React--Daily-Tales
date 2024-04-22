import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarker, FaPen } from "react-icons/fa";

function ViewStory({ story }) {
   const [showMoreContent, setShowMoreContent] = useState(false);

   const content =
      story.content.length > 90
         ? showMoreContent
            ? story.content.substring(0, 200) + "..."
            : story.content.substring(0, 90) + "..."
         : story.content;

   return (
      <div className="bg-orange-200 rounded-xl shadow-md relative">
         <div className="p-4">
            <div className="mb-6">
               <div className="text-gray-600 my-2">{story.type}</div>
               <h3 className="text-xl font-bold">{story.title}</h3>
            </div>

            <div className="mb-5 break-all">{content}</div>

            <button
               className="text-orange-600 mb-5 hover:text-red-800"
               onClick={() => setShowMoreContent(!showMoreContent)}
            >
               {content.length > 90
                  ? showMoreContent
                     ? "Show Less"
                     : "Show More"
                  : null}
            </button>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col justify-between mb-2">
               <div className=" flex flex-row justify-between text-orange-700 mb-3 pb-10">
                  <div className="text-left">
                     <FaPen className="inline" />
                     <span className="ml-1">{story.author.name}</span>
                  </div>
                  <div className="text-right">
                     <FaMapMarker className="ml-3 inline" />
                     {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
                     {story.location}
                  </div>
               </div>
               <NavLink
                  to={`/stories/${story.id}`}
                  className="absolute inset-x-5 bottom-5 h-[36px] bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-center text-sm "
               >
                  Read Full Story
               </NavLink>
            </div>
         </div>
      </div>
   );
}

export default ViewStory;
