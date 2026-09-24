import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section className="grid place-content-center bg-slate-900 h-screen">
                <div className="hero">
                    <img
                        src={heroImg}
                        className="base"
                        width="170"
                        height="179"
                        alt=""
                    />
                    <img
                        src={reactLogo}
                        className="framework"
                        alt="React logo"
                    />
                    <img src={viteLogo} className="vite" alt="Vite logo" />
                </div>

                <div className="mb-3">
                    <h1 className="text-slate-100">Get started</h1>
                    <p className="text-slate-200">
                        Edit <code>src/App.tsx</code> and save to test{" "}
                        <code>HMR</code>
                    </p>
                </div>

                <button
                    type="button"
                    className="border-blue-700 border-2 text-blue-500 py-2 px-4 rounded-md active:ring-4 hover:bg-blue-800 hover:text-slate-200 ring-0 ring-blue-600/20 transition-all w-fit mx-auto duration-200"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Count is {count}
                </button>
            </section>
        </>
    );
}

export default App;
