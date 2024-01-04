import { Profile } from "./profile.tsx";

function App() {
  return (
    <div className="max-w-4xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4">User profile page</h1>
      <Profile id="u1" />
    </div>
  );
}

export default App;
