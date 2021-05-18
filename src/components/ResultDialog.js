import React, {useEffect} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {$authMainHost} from "../http";

function ResultDialog({isOpen, closeModal, requestResults}) {

    const reqHelper = {
        'user': 'users_vk',
        'group': 'groups',
        'post': 'posts',
    }

    const [analysisResults, setAnalysisResults] = useState([]);


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
            >


                <div className="h-screen w-full px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-69"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-70"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
              &#8203;
            </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-1/2 h-1/2 p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-xl font-medium leading-6 text-gray-900"
                            >
                                Результаты запроса #14142341
                            </Dialog.Title>
                            {analysisResults.length > 0 &&
                                <div
                                    className="mt-2 flex flex-grow items-center justify-between h-5/6">
                                    <div className="h-full flex-grow px-5 py-5">
                                        <div className="h-full border border-greenspace-400 rounded-md">
                                            <p>Игорь Крупкин</p>
                                            <p>12231321321</p>
                                            <p>Да</p>
                                            <p>45%</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="relative bottom-0">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={closeModal}
                                >
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default ResultDialog;
