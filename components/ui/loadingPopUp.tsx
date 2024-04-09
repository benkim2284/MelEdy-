"use client";

import { useState } from 'react'

const LoadingPopup = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="spinner"></div>
          <style jsx>{`
            .spinner {
              width: 80px;
              height: 80px;
              border: 8px solid #eb8df7; /* Light purple color */
              border-radius: 50%;
              border-top: 8px solid transparent;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
      </div>
  );
};

export { LoadingPopup }
