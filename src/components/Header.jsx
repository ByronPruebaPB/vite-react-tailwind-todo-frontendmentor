import { useEffect, useRef, useState } from "react";
import IconSun from "./iconos/IconSun";
import IconMoon from "./iconos/IconMoon";

const inicialStateDarkMode = localStorage.theme === "dark" ? true : false;

const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    const refHeader = useRef(null);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            //localStorage.setItem("theme", "dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            //localStorage.setitem("theme", "light");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8" ref={refHeader}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    TODO
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun></IconSun> : <IconMoon></IconMoon>}
                    {/*<IconMoon className="fill-red-400"></IconMoon>*/}
                </button>
            </div>
        </header>
    );
};

export default Header;
