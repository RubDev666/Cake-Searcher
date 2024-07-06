'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';

import { ErrorMessageProps } from '@/types/props';

export default function ErrorMessage({message}: ErrorMessageProps) {
    return (
        <div className="text-center">
            <p className="text-color-1 text-2xl p-4">{message}</p>

            <FontAwesomeIcon icon={faFaceAngry} className="text-color-1 m-auto text-9xl" />
        </div>
    )
}
