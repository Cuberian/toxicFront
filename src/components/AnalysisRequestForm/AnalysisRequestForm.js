import React, {useRef, useState} from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import {$authMainHost} from "../../http";


function AnalysisRequestForm() {

    const [sendResultNumber, setSendResultNumber] = useState()

    const { register, control, handleSubmit} = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "objectInputs",
    });

    async function submitHandler(data) {
        console.log(data)
        const { data: resData } = await $authMainHost.post('api/toxicity/analysis/request', data)
        if(resData.result === 'success')
        {
            setSendResultNumber(resData.requestNumber)
        }
    }

    return (
        <div className="flex w-full h-full mb-20">
            {
               !sendResultNumber && <div className="flex flex-col container mx-auto px-5 py-4 space-y-4">
                    <p className="mx-auto text-2xl font-bold">Запрос на анализ</p>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="flex flex-col space-y-2">
                            <label>Название запроса</label>
                            <input className="border rounded-md px-3 py-2" type="text" {...register('reqName')}/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Обоснование запроса</label>
                            <textarea className="border rounded-md px-3 py-2" {...register('reqReason')}/>
                        </div>
                        <div className="flex flex-col mb-3">
                            <p className="font-semibold text-lg">Запрашиваемые объекты</p>
                            <div className="flex flex-col space-y-3 py-3 w-full">
                                {
                                    fields.map((field, index) => (
                                        <div
                                            key={'container_' + field.id}
                                            className="flex md:flex-row flex-col md:space-x-3 md:space-y-0
                                        md:px-5 py-5 md:border md:rounded-md border-b space-y-3 w-full">
                                            <div className="flex flex-col space-y-2 md:w-2/6 w-full">
                                                <label>Тип объекта</label>
                                                <select
                                                    key={'type_' + field.id} // important to include key with field's id
                                                    className="border rounded-md px-3 py-2"
                                                    {...register(`objectInputs.${index}.objType`)}
                                                    defaultValue={''} // make sure to include defaultValue
                                                >
                                                    <option value="post">Пост</option>
                                                    <option value="user">Пользователь</option>
                                                    <option value="group">Группа</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col space-y-2 md:flex-grow w-full">
                                                <label>ID объекта</label>
                                                <input
                                                    key={'id_' + field.id} // important to include key with field's id
                                                    className="border rounded-md px-3 py-2"
                                                    {...register(`objectInputs.${index}.objId`)}
                                                    defaultValue={''} // make sure to include defaultValue
                                                />
                                            </div>
                                            <div>
                                                <svg
                                                    className="w-8 h-8 md:block hidden hover:bg-lime-400 rounded-full p-2"
                                                    onClick={() => remove(index)}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                <button
                                                    className="bg-red-400 px-3 py-2 rounded-md w-1/4 text-white md:hidden"
                                                    onClick={() => remove(index)}>
                                                    Убрать
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <button
                                type="button"
                                className="px-3 py-2 bg-blue-400 text-white rounded-md"
                                onClick={() => append({objType: "", objId: ""})}>Добавить объект
                            </button>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                            <button
                                className="disabled:opacity-50 px-3 py-2 bg-lime-400 text-white hover:bg-lime-600 rounded-md"
                                disabled={fields.length === 0}>
                                Отправить заявку
                            </button>
                            <button className="px-3 py-2 bg-red-400 text-white hover:bg-red-600 rounded-md">Отменить
                            </button>
                        </div>

                    </form>
                </div>
            }
            {
                sendResultNumber && <div className="container pt-20 flex flex-col space-y-4 mx-auto">
                    <p className="text-2xl font-semibold text-center">Запрос {sendResultNumber} успешно сформирован!</p>
                    <p className="text-center">Вы можете сформировать новый запрос или перейти в личный кабинет, где будет отображаться текущий статус запроса.</p>
                </div>
            }
        </div>
    );
}

export default AnalysisRequestForm;