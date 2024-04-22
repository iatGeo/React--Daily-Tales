import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import AddStoryPage from "./pages/AddStoryPage";
import EditStoryPage from "./pages/EditStoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import StoryPage, { storyLoader } from "./pages/StoryPage";

function App() {
   //Add new story
   const addStory = async (newStory) => {
      const res = await fetch("/api/stories", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(newStory),
      });
      return;
   };

   //Delete story
   const deleteStory = async (id) => {
      const res = await fetch(`/api/stories/${id}`, {
         method: "DELETE",
      });
      return;
   };

   //Edit story
   const editStory = async (edittedStory) => {
      const res = await fetch(`/api/stories/${edittedStory.id}`, {
         method: "PUT",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(edittedStory),
      });
      return;
   };

   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route
               path="/stories/:id"
               element={<StoryPage deleteStory={deleteStory} />}
               loader={storyLoader}
            />
            <Route
               path="/add-story"
               element={<AddStoryPage addStorySubmit={addStory} />}
            />
            <Route
               path="/edit-story/:id"
               element={<EditStoryPage editStorySubmit={editStory} />}
               loader={storyLoader}
            />
            <Route path="*" element={<NotFoundPage />} />
         </Route>
      )
   );

   return <RouterProvider router={router} />;
}

export default App;
