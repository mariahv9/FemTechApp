import React from 'react';
import data from '../../helper/profiles.json';
import { MdClose } from 'react-icons/md'


export default function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
            onClose()
    }

    if (!visible) return null

    return (
        <div id='box' onClick={handleOnClose} className='fixed inset-0 bg-lightPurple bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-30'>
            <div className='w-10/12 max-h-[90%] my-auto bg-white border-2 border-darkPurple p-2 rounded-md drop-shadow-2xl overflow-y-auto'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><MdClose size={20} className='fill-darkPurple hover:fill-lightPurple'/></button>
                {data.map(item => (
                    <div key={item.id} className='mx-auto grid grid-cols-3 rounded font-sans'>
                        <div className='w-10/12 mx-auto flex items-center col-span-1'>
                            <img src={item.profile_pic} alt={item.first_name} className='rounded'/>
                        </div>
                        <div className='pt-8 pb-10 col-start-2 col-end-4'>
                            <h2 className='font-bold text-4xl text-darkPurple'>{item.first_name} {item.last_name}</h2>
                            <p className='font-medium text-xl text-darkPurple'>{item.profession}</p>
                            <p className='w-11/12 pb-1 font-normal text-xl text-dark'>Hola, mi nombre es Karine Lanon y tengo 33 años. Soy economista de profesión, pero desde hace más de 12 años me dedico a la venta de maquinaria pesada. Siempre quise explorar esta pasión, pero sentía miedo y me sentía limitada. Si tú te sientes de esta manera, estoy aquí para ayudarte.</p>
                            <p className='pb-4 font-light text-lg text-purple'>{item.email}</p>
                            <a href={`mailto:${item.email}?subject=Asunto del correo&body=Mensaje predefinido`} className='mx-auto px-6 py-2 rounded-full bg-purple hover:bg-lightPurple text-center text-[#FFF] hover:text-darkPurple text-lg font-medium'>Hablemos</a>
                        </div>
                        <div className='pt-12 col-span-3'>
                            <h1 className='pb-4 font-bold text-center text-5xl text-darkPurple'>Te contamos con estadísticas</h1>
                            <p className='w-6/12 mx-auto font-normal text-center text-lg text-dark'>Los números nunca mienten, las matemáticas menos, así que te mostramos como está la brecha salarial  en el área de la gastronomía</p>
                            <img src="/Mask.png" alt="Imagen de ejemplo" className="w-full pb-4"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};