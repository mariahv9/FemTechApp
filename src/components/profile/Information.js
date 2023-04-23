import { React, useState } from 'react';
import Modal from '../profile/ModalDOS';

const Information = () => {

const [showModal, setShowModal] = useState(false)
const handleOnClose = () => setShowModal(false)

    return (
        <section className='py-10'>
            <button onClick={() => setShowModal(true)} className='flex items-center gap-2 text-purple hover:text-dark underline decoration-2 underline-offset-4'>PEPE</button>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </section>
    )
    }

export default Information