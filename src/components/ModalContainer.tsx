'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";

import { ModalContainerProps } from '@/types/props';

const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2
        }
    }
};

export default function ModalContainer({ children, closeModal}: ModalContainerProps) {
    return (
        <motion.div
            className="custom-container-2 p-4 custom-modal fixed top-[56px] outline-none border-none w-full overflow-y-auto"
            //onClick={() => setActive(false)}

            //It only works if it has the "AnimatePresence" component as its parent
            //exit={{ opacity: 0, scale: 1 }}

            initial='hidden'
            animate='visible'
            variants={container}
        >
            <FontAwesomeIcon icon={faXmark} className="text-color-1 text-3xl absolute right-4 cursor-pointer" onClick={closeModal} />

            {children}
        </motion.div>
    )
}