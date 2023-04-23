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
        <div id='box' onClick={handleOnClose} className='fixed inset-0 bg-lightPurple bg-opacity-80 backdrop-blur-sm flex items-center justify-center'>
            <div className='w-10/12 max-h-96 my-auto bg-backProfile bg-cover bg-no-repeat bg-center border-2 border-darkPurple p-2 rounded-md drop-shadow-2xl overflow-y-auto'>
                <button onClick={onClose} className='w-full mx-auto flex justify-end'><MdClose size={20} className='fill-darkPurple hover:fill-lightPurple'/></button>
                {data.map(item => (
                    <div key={item.id} className=' mx-auto grid grid-cols-3 rounded font-sans'>
                        <div className='w-10/12 mx-auto py-8 col-span-1'>
                            <img src={item.profile_pic} alt={item.first_name} className='rounded'/>
                        </div>
                        <div className='py-8 col-start-2 col-end-4'>
                            <h2 className='font-bold text-4xl text-darkPurple'>{item.first_name} {item.last_name}</h2>
                            <p className='font-medium text-xl text-darkPurple'>{item.profession}</p>
                            <p className='pb-8 font-normal text-xl text-dark'>{item.email}</p>
                            <a href={`mailto:${item.email}?subject=Asunto del correo&body=Mensaje predefinido`} className='mx-auto px-6 py-2 rounded-full bg-purple hover:bg-lightPurple text-center text-[#FFF] hover:text-darkPurple text-lg font-medium'>Hablemos</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};