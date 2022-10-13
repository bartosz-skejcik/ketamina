import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Modal({
    isOpen,
    setIsOpen,
    success,
    setSuccess,
    setShow,
    show,
    nick,
    setNick,
    currId,
}) {
    const [error, setError] = useState("");
    // const currId = currId;
    const srvId = "b8efbc28";

    const validateNick = () => {
        if (nick.length < 3) {
            setError("Nick musi mieć przynajmniej 3 znaki");
            setShow(false);
        } else if (nick === "") {
            setError("Nick nie może być pusty");
            setShow(false);
        } else {
            setError("");
            setShow(true);
        }
    };

    const makePayment = async (method) => {
        var f = document.createElement("form");
        f.action = "https://ishop-pay.cramber.pl";
        f.method = "POST";
        f.target = "_blank";
        var i = document.createElement("input");
        i.type = "hidden";
        i.name = "server";
        i.value = srvId;
        f.appendChild(i);
        var o = document.createElement("input");
        o.type = "hidden";
        o.name = "product";
        o.value = currId;
        f.appendChild(o);
        var p = document.createElement("input");
        p.type = "hidden";
        p.name = "method";
        p.value = method;
        f.appendChild(p);
        var l = document.createElement("input");
        l.type = "hidden";
        l.name = "nick";
        l.value = nick;
        f.appendChild(l);
        document.body.appendChild(f);
        f.submit();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setIsOpen(true)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border-4 border-emerald-700 bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl leading-6 text-gray-300 font-bold pb-10"
                                    >
                                        Finalizacja płatności
                                    </Dialog.Title>
                                    <section className="flex flex-col items-center justify-center w-full">
                                        <div className="flex flex-col items-start justify-center w-full">
                                            <p className="text-gray-300 text-lg font-semibold">
                                                Podaj swój nick
                                            </p>
                                            <input
                                                type="text"
                                                className={`bg-slate-900 text-gray-300 w-full p-2 rounded-md mt-2 border-2 border-transparent ${
                                                    error && "border-red-500"
                                                } ${
                                                    !error &&
                                                    "border-emerald-700"
                                                }`}
                                                onChange={(e) =>
                                                    setNick(e.target.value)
                                                }
                                            />
                                            {error && (
                                                <p className="text-red-500 text-sm font-semibold mb-4 mt-1">
                                                    {error}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-row items-center justify-around w-full mt-6">
                                            <button
                                                className="bg-slate-600 shadow-2xl shadow-transparent hover:scale-110 hover:bg-green-500 transition duration-300 hover:text-green-900 hover:shadow-green-400 text-gray-300 w-1/3 p-2 rounded-md mt-2 mb-10"
                                                onClick={() => validateNick()}
                                            >
                                                Potwierdź
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setShow(false);
                                                    if (success) {
                                                        setSuccess(false);
                                                    }
                                                }}
                                                className="bg-slate-600 shadow-2xl shadow-transparent hover:scale-110 hover:bg-red-500 transition duration-300 hover:text-red-900 hover:red-green-400 text-gray-300 w-1/3 p-2 rounded-md mt-2 mb-10"
                                            >
                                                Anuluj
                                            </button>
                                        </div>
                                        {success ? (
                                            <h1 className="text-green-500 font-semibold text-lg">
                                                Pomyślnie kupiono rangę. Dołącz
                                                na serwer i sprawdź!
                                            </h1>
                                        ) : null}
                                        {show && (
                                            <>
                                                <section className="w-full flex flex-row items-center justify-center space-x-5">
                                                    <button
                                                        onClick={() =>
                                                            makePayment("wire")
                                                        }
                                                        className="text-center py-2 px-6 rounded-2xl bg-gray-300 hover:bg-green-500 transition duration-300 hover:scale-105 hover:text-green-900"
                                                    >
                                                        Przelew
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            makePayment("psc")
                                                        }
                                                        className="text-center py-2 px-6 rounded-2xl bg-gray-300 hover:bg-yellow-500 transition duration-300 hover:scale-105 hover:text-yellow-900"
                                                    >
                                                        PaySafeCard
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            makePayment(
                                                                "paypal"
                                                            )
                                                        }
                                                        className="text-center py-2 px-8 rounded-2xl bg-gray-300 hover:bg-blue-400 transition duration-300 hover:scale-105 hover:text-blue-900"
                                                    >
                                                        PayPal
                                                    </button>
                                                </section>
                                            </>
                                        )}
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Modal;
