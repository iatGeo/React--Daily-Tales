import {
   useParams,
   NavLink,
   useLoaderData,
   useNavigate,
} from "react-router-dom";
import { FaPen, FaMapMarker, FaArrowLeft, FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

function StoryPage({ deleteStory }) {
   const { id } = useParams();
   const story = useLoaderData();

   const navigate = useNavigate();

   const copyToClipboard = async (text) => {
      try {
         await navigator.clipboard.writeText(text);
         toast.success("Mail copied successfully!");
      } catch (error) {
         toast.error("Error copying mail");
         console.error(error);
      }
   };

   const handleDelete = (id) => {
      const confirm = window.confirm(
         "Are you sure you want to delete this story?"
      );

      if (!confirm) return;

      deleteStory(id);

      toast.success("Story deleted successfully");

      navigate("/stories");
   };

   return (
      <>
         <section className="bg-orange-300">
            <div className="bg-orange-300 container m-auto py-6 px-6">
               <NavLink
                  to="/stories"
                  className="text-white hover:text-orange-800 flex items-center"
               >
                  <FaArrowLeft className="mr-2" /> Back to Stories
               </NavLink>
            </div>
         </section>

         <section className="bg-orange-100">
            <div className="container m-auto py-10 px-6">
               <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                  <main>
                     <div className="bg-orange-200 p-6 rounded-lg shadow-md text-center md:text-left">
                        <div className="text-gray-500 mb-4">
                           Type: {story.type}
                        </div>
                        <h1 className="text-3xl font-bold mb-4">
                           {story.title}
                        </h1>
                        <div className="flex flex-row justify-between text-orange-700 mb-3">
                           <div className="">
                              <FaPen className="inline" />
                              <span className="ml-1">{story.author.name}</span>
                           </div>
                           <div>
                              <FaMapMarker className="ml-3 inline" />
                              {story.location}
                           </div>
                        </div>
                     </div>

                     <div className="bg-orange-200 p-6 rounded-lg shadow-md mt-6">
                        <h3 className="text-gray-500 mb-4">Story</h3>

                        <p className="mb-4 break-all">{story.content}</p>
                     </div>
                  </main>

                  <aside>
                     <div className="bg-orange-200 p-6 rounded-md shadow-md">
                        <h3 className="text-gray-500 mb-6">Author Info</h3>

                        <h2 className="text-2xl mb-6">{story.author.name}</h2>

                        {story.author.description && (
                           <p className="my-2 italic">
                              {story.author.description}
                           </p>
                        )}

                        <hr className="my-4 border-solid border-orange-800" />

                        <h3>Contact Email:</h3>

                        <div className="flex flex-between items-center">
                           <p className="my-2 bg-orange-100 p-2 font-bold truncate">
                              {story.author.contactEmail}
                           </p>
                           <FaCopy
                              className="pl-2 text-2xl cursor-pointer"
                              onClick={() =>
                                 copyToClipboard(story.author.contactEmail)
                              }
                           />
                        </div>
                     </div>

                     <div className="bg-orange-200 p-6 rounded-lg shadow-md mt-6">
                        <h3 className="text-gray-500 mb-6">Manage Story</h3>
                        <NavLink
                           to={`/edit-story/${id}`}
                           className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                        >
                           Edit Story
                        </NavLink>
                        <button
                           onClick={() => handleDelete(story.id)}
                           className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                        >
                           Delete Story
                        </button>
                     </div>
                  </aside>
               </div>
            </div>
         </section>
      </>
   );
}

const storyLoader = async ({ params }) => {
   const res = await fetch(`/api/stories/${params.id}`);
   const data = await res.json();
   return data;
};

export { StoryPage as default, storyLoader };
