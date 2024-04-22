import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditStoryPage({ editStorySubmit }) {
   const navigate = useNavigate();
   const story = useLoaderData();
   const { id } = useParams();

   const [type, setType] = useState(story.type);
   const [title, setTitle] = useState(story.title);
   const [content, setContent] = useState(story.content);
   const [location, setLocation] = useState(story.location);
   const [authorName, setAuthorName] = useState(story.author.name);
   const [authorDescription, setAuthorDescription] = useState(
      story.author.description
   );
   const [contactEmail, setContactEmail] = useState(story.author.contactEmail);

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

   function handleSubmit(e) {
      e.preventDefault();

      const edittedStory = {
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

      editStorySubmit(edittedStory);

      toast.success("Story updated successfully");

      navigate(`/stories/${story.id}`);
   }

   return (
      <section className="bg-orange-100">
         <div className="container m-auto max-w-2xl py-24">
            <div className="bg-orange-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
               <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl text-center font-semibold mb-6">
                     Edit Story
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
                        Submit Updated Info
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}

export default EditStoryPage;
