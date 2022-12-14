import Head from "next/head";

import { useState } from "react";

import Modal from "../components/Modal";
import Product from "../components/Product";

export default function Home() {
    const [nick, setNick] = useState("");
    const [mode, setMode] = useState("");
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);
    const [rank, setRank] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center h-full overflow-hidden bg-slate-900">
            <Head>
                <title>NAZWA ZAKŁADKI</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                success={success}
                setSuccess={setSuccess}
                setShow={setShow}
                show={show}
                nick={nick}
                setNick={setNick}
            />
            <div className="w-screen h-screen flex flex-col justify-center items-center space-y-10 pt-6 text-center">
                <div className="flex flex-col">
                    <h1 className="text-8xl font-bold text-blue-400">
                        XAMC.PL
                    </h1>
                    <h3 className="text-gray-300 font-semibold text-2xl text-center">
                        Twoja <span className="text-blue-400">sieć</span>{" "}
                        serwerów
                    </h3>
                </div>
                <img src="./logo.png" className="w-1/4" />
            </div>
            <section
                id="products"
                className="flex flex-col items-center justify-center w-full text-gray-300 mt-10"
            >
                <h1 className="text-5xl text-yellow-500 font-bold mb-10">
                    Anarchia SMP
                </h1>
                <div className="flex flex-row items-center justify-center w-full space-x-28">
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"Elita"}
                        cost={20}
                        setRank={setRank}
                        setMode={setMode}
                        section={"anarchiasmp"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"Sponsor"}
                        cost={15}
                        setRank={setRank}
                        setMode={setMode}
                        section={"anarchiasmp"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"SVIP"}
                        cost={10}
                        setRank={setRank}
                        setMode={setMode}
                        section={"anarchiasmp"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"VIP"}
                        cost={5}
                        setRank={setRank}
                        setMode={setMode}
                        section={"anarchiasmp"}
                    />
                </div>
                <h1 className="text-5xl text-green-500 font-bold my-10">
                    Survival
                </h1>
                <div className="flex flex-row items-center justify-center w-full space-x-28">
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"Elita"}
                        cost={20}
                        setRank={setRank}
                        setMode={setMode}
                        section={"survival"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"Sponsor"}
                        cost={15}
                        setRank={setRank}
                        setMode={setMode}
                        section={"survival"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"SVIP"}
                        cost={10}
                        setRank={setRank}
                        setMode={setMode}
                        section={"survival"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"VIP"}
                        cost={5}
                        setRank={setRank}
                        setMode={setMode}
                        section={"survival"}
                    />
                </div>
                <h1 className="text-5xl text-red-500 font-bold my-10">
                    Drop SMP
                </h1>
                <div className="flex flex-row items-center justify-center w-full space-x-28">
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"Elita"}
                        cost={20}
                        setRank={setRank}
                        setMode={setMode}
                        section={"dropsmp"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"Sponsor"}
                        cost={15}
                        setRank={setRank}
                        setMode={setMode}
                        section={"dropsmp"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"SVIP"}
                        cost={10}
                        setRank={setRank}
                        setMode={setMode}
                        section={"dropsmp"}
                    />
                    <Product
                        setIsOpen={setIsOpen}
                        setValue={setValue}
                        title={"VIP"}
                        cost={5}
                        setRank={setRank}
                        setMode={setMode}
                        section={"dropsmp"}
                    />
                </div>
            </section>
        </div>
    );
}
