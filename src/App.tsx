import {Profile} from "./v2.1/profile.tsx";

function App() {
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <div className="rounded border p-6 border-slate-300">
        <Profile id="u1" />
      </div>
    </div>
  );
}

export default App;
