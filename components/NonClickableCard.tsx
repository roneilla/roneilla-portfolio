'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

const NonClickableCard = ({
    id,
    title,
    description,
    imgSrc,
    ind,
    size,
}: any) => {
    return (
        <>
            <div className={`w-full text-black h-full ${size}`}>
                <div
                    id={`tb-${id}`}
                    className="h-full w-lg rounded-lg">
                    <div
                        className="overflow-hidden"
                    >
                        <Image
                            src={imgSrc}
                            alt="" // add alt texts
                            className={`rounded-lg object-cover md:min-h-80 workCardImg dark:bg-black transition-transform`}
                        />
                    </div>
                    <div className="flex gap-2 items-center mt-4 mb-1">
                        <h3 className="font-medium text-lg">{title}</h3>
                        <div className="inline-block">
                            <svg aria-label="Locked case study" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4">
                                <title>Locked case study</title>
                                <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
                            </svg>

                        </div>
                    </div>
                    <p className="text-gray-600">{description}</p>

                </div>
            </div>
        </>
    );
};

export default NonClickableCard;
