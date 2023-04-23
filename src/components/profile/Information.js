import React from 'react';
import data from '../../helper/profiles.json';

const Information = () => {
    return (
        <section className='py-10'>
                {data.map(item => (
                    <div key={item.id} className='w-[90%] mx-auto grid grid-cols-3 rounded font-sans bg-backProfile bg-cover bg-no-repeat bg-center'>
                        <div className='w-[80%] mx-auto py-8 col-span-1'>
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
        </section>
    )
    }

export default Information