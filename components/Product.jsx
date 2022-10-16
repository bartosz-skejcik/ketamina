import { useState, useEffect } from "react";

function Product({
    setValue,
    setIsOpen,
    cost,
    title,
    setRank,
    setMode,
    section,
    currId,
    setCurrId,
}) {
    const [color, setColor] = useState("");
    const [text, setText] = useState("");
    const [font, setFont] = useState("text-gray-800");
    useEffect(() => {
        const lowercase = title.toLowerCase();
        switch (lowercase) {
            case "xamc":
                setColor("bg-red-500");
                setText("text-red-400");
                setFont("text-red-700");
                break;
            case "legenda":
                setColor("bg-amber-500");
                setText("text-amber-400");
                setFont("text-amber-700");
                break;
            case "elita":
                setColor("bg-purple-500");
                setText("text-purple-400");
                setFont("text-purple-900");
                break;
            case "svip":
                setColor("bg-pink-500");
                setText("text-pink-400");
                setFont("text-pink-900");
                break;
            case "vip":
                setColor("bg-blue-500");
                setText("text-blue-400");
                setFont("text-blue-800");
                break;
            case "unban":
                setColor("bg-green-500");
                setText("text-green-400");
                setFont("text-green-800");
                break;
            default:
                break;
        }
    }, []);
    return (
        <div className="flex flex-col py-10 px-4 rounded-3xl w-[14rem] bg-slate-800 text-center items-center justify-between">
            <h1 className={`text-5xl ${text} font-semibold`}>{title}</h1>
            <h2 className="text-3xl font-semibold pt-6 pb-4">{cost}zł</h2>
            <button
                onClick={() => {
                    setRank(title);
                    setMode(section);
                    setValue(cost);
                    setIsOpen(true);
                    setCurrId(currId);
                }}
                className={`rounded-md ${color} px-4 py-2 font-semibold ${font} hover:scale-105 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                Kup
            </button>
        </div>
    );
}

export default Product;
