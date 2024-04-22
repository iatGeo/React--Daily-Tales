import { useState, useEffect } from "react";
import ViewStory from "./ViewStory";

function ViewStories({ isHome }) {
   const [stories, setStories] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const storiesUrl = isHome ? "/api/stories?_limit=3" : "/api/stories";

      try {
         const fetchStories = async () => {
            const res = await fetch(storiesUrl);
            const data = await res.json();
            setStories(data);
         };
         fetchStories();
      } catch (error) {
         console.log("Error fetching data", error);
      } finally {
         setLoading(false);
      }
   }, []);

   return loading ? (
      <div className="flex flex-center">Loading data</div>
   ) : (
      <>
         <section className="bg-orange-100 px-4 py-10">
            <div className="container-xl lg:container m-auto">
               <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
                  {isHome ? "Browse stories" : null}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stories && stories.length
                     ? stories.map((story) => (
                          <ViewStory key={story.id} story={story} />
                       ))
                     : null}
               </div>
            </div>
         </section>
      </>
   );
}

export default ViewStories;
