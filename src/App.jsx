import NewProject from "./components/newProject.jsx";
import ProjectSideBar from "./components/projectSideBar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NewProject />
    </main>
  );
}

export default App;
