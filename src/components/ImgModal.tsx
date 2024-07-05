'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";
import { ImgModalProps } from '@/types/props';

export default function ImgModal({imgSelected, setImg}: ImgModalProps) {
    return(
        <motion.div
            className="custom-container-2 p-4 custom-modal fixed top-[56px] outline-none border-none w-full overflow-y-auto"
            //onClick={() => setActive(false)}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
        >
            <FontAwesomeIcon icon={faXmark} className="text-color-1 text-3xl absolute right-4" onClick={() => setImg(null)} />

            <img src={imgSelected.urlImg} alt={imgSelected.category} className='w-[auto] h-[auto] max-h-[80vh] mt-10 mx-auto' />
        </motion.div>
    )
}