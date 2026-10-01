import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section className="grid place-content-center bg-slate-900 h-screen">
                <div className="flex gap-4 justify-center mb-8">
                    <img src={viteLogo} className="w-32" alt="Vite logo" />
                    <img
                        src={reactLogo}
                        className="animate-spin [animation-duration:3s]"
                        alt="React logo"
                    />
                </div>

                <div className="mb-4">
                    <h1 className="text-slate-100 text-2xl font-bold">
                        MUHAMMAD BAGUS ADITYA
                    </h1>
                </div>

                <button
                    type="button"
                    className="border-blue-700 border-2 text-blue-500 py-2 px-4 rounded-md active:ring-4 hover:bg-blue-800 hover:text-slate-200 ring-0 ring-blue-600/20 transition-all w-fit mx-auto duration-200"
                    onClick={() => setCount((count) => count + 1)}
                >
                    {count} time(s) clicked
                </button>
            </section>
        </>
    );
}

export default App;
