"use client";

import { useState, useEffect } from 'react';

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          // Increase progress by 1 every 100ms until it reaches 100
          setProgress(prevProgress => {
            if (prevProgress >= 100) {
              clearInterval(interval);
              return 100;
            } else {
              return prevProgress + 0.05;
            }
          });
        }, 9); // Adjust the interval to control the speed of progress

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div
                style={{
                    width: '20%',
                    height: '20px',
                    backgroundColor: 'lightgray',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    border: '1px solid #6A0DAD',
                }}
            >
                <div
                    style={{
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -180%)',
                        zIndex: 1, // Ensure the text is above the progress bar
                    }}
                >
                Loading...
                </div>
            <div
                style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #e299fe 10px, #e299fe 20px)', // Purple stripes
                    backgroundColor: "#eb8df7",
                    transition: 'width 0.1s linear', // Smoother transition effect
                }}
            />
            </div>
        </div>
    );
};

export { LoadingBar };
