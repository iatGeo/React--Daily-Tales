import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddStoryPage({ addStorySubmit }) {
   const [type, setType] = useState("Action");
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [location, setLocation] = useState("");
   const [authorName, setAuthorName] = useState("");
   const [authorDescription, setAuthorDescription] = useState("");
   const [contactEmail, setContactEmail] = useState("");

   const storyTypes = [
      "Action",
      "Comedy",
      "Drama",
      "Fable",
      "Fantasy",
      "Fiction",
      "Horror",
      "Romance",
      "Sci-fi",
      "Tragedy",
   ];

   const navigate = useNavigate();

   function handleSubmit(e) {
      e.preventDefault();

      const newStory = {
         id,
         type,
         title,
         content,
         location,
         author: {
            name: authorName,
            description: authorDescription,
            contactEmail,
         },
      };

      addStorySubmit(newStory);

      toast.success("Story added successfully");

      return navigate("/stories");
   }

   return (
      <section className="bg-orange-100">
         <div className="container m-auto max-w-2xl py-24">
            <div className="bg-orange-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
               <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl text-center font-semibold mb-6">
                     Add Story
                  </h2>

                  <div className="mb-4">
                     <label
                        htmlFor="type"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Story Type
                     </label>
                     <select
                        id="type"
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                     >
                        {storyTypes.map((type, index) => (
                           <option key={index} value={type}>
                              {type}
                           </option>
                        ))}
                     </select>
                  </div>

                  <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2">
                        Story Title
                     </label>
                     <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Add your story title here"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="content"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Content
                     </label>
                     <textarea
                        id="content"
                        name="content"
                        className="border rounded w-full py-2 px-3"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="4"
                        placeholder="Add your story here"
                        required
                     ></textarea>
                  </div>

                  <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2">
                        Location (town / country)
                     </label>
                     <input
                        type="text"
                        id="location"
                        name="location"
                        className="border rounded w-full py-2 px-3 mb-2"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="eg. Paris, France"
                        required
                     />
                  </div>

                  <h3 className="text-2xl mt-10 mb-5">Author's Info</h3>

                  <div className="mb-4">
                     <label
                        htmlFor="author"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Author's Name
                     </label>
                     <input
                        type="text"
                        id="author"
                        name="author"
                        className="border rounded w-full py-2 px-3"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Add your author's name here"
                        required
                     />
                  </div>

                  <div className="mb-4">
                     <label
                        htmlFor="author_description"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Author's Description
                     </label>
                     <textarea
                        id="author_description"
                        name="author_description"
                        className="border rounded w-full py-2 px-3"
                        value={authorDescription}
                        onChange={(e) => setAuthorDescription(e.target.value)}
                        rows="4"
                        placeholder="Draft a description of yourself as a writer (optional)"
                     ></textarea>
                  </div>

                  <div className="mb-4">
                     <label
                        htmlFor="contact_email"
                        className="block text-gray-700 font-bold mb-2"
                     >
                        Contact Email
                     </label>
                     <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        className="border rounded w-full py-2 px-3"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Enter email for parties interested in your stories"
                        required
                     />
                  </div>

                  <div>
                     <button
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-4 py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                     >
                        Add Story
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}

export default AddStoryPage;
