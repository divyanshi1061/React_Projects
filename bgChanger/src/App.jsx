import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setColor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed  flex flex-col justify-center right-12 inset-y-0 px-2 ">
          <div className="flex flex-col justify-center gap-5 shadow-lg bg-white p-2 rounded-3xl">
            <button
            onClick={() => setColor("red")}
              className="outline-none px-1 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
            onClick={() => setColor("green")}
              className="outline-none px-1 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
            onClick={() => setColor("olive")}
              className="outline-none px-1 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button
            onClick={() => setColor("blue")}
              className="outline-none px-1 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
            onClick={() => setColor("pink")}
              className="outline-none px-1 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
             <button
            onClick={() => setColor("purple")}
              className="outline-none px-1 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
