import React from 'react';
import { MdClose } from 'react-icons/md'


export default function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
            onClose()
    }

    if (!visible) return null

    return (
        <div id='box' onClick={handleOnClose} className='fixed inset-0 bg-lightPurple bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-30'>
            <div className='w-10/12 max-h-[80%] my-auto bg-[#FFF] border-2 border-darkPurple p-2 rounded-md drop-shadow-2xl overflow-y-auto'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><MdClose size={20} className='fill-darkPurple hover:fill-lightPurple'/></button>
                <div className='w-10/12 mx-auto'>
                <h1 className='pb-4 font-bold text-center text-5xl text-darkPurple'>Te contamos con estadísticas</h1>
                <p className='w-6/12 mx-auto font-normal text-center text-lg text-dark'>Los números nunca mienten, las matemáticas menos, así que te mostramos como está la brecha salarial  en el área de la gastronomía</p>
                <img
                src="/Mask.png"
                alt="Imagen de ejemplo"
                className="w-full pb-4"
                />
            </div>
            </div>
        </div>
    );
};