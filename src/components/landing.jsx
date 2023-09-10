import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import TypingText from './typingtext';

const Landing = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handlePlayPauseVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const handleMuteUnmuteVideo = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    }

    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
            <video ref={videoRef} loop muted playsInline autoPlay className="absolute w-full h-full object-cover z-0">
                <source src="https://chad-distributable.s3.amazonaws.com/2303814297.mp4" type="video/mp4" />
            </video>
            <div className="absolute w-full h-full bg-black bg-opacity-50 z-10"></div>
            <div className="absolute z-20 mb-10 text-center text-white px-4 flex flex-col items-center">
                <div className="inline-block overflow-hidden border-r-2 border-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    <TypingText texts={['Authorised Distributors of JSW STEEL', 'APL APOLLO and SG PREMIUM', 'Serving Steel for better Tomorrow', 'Call us for a quote']} />
                </div>
                <a href="tel:+919904343848" className="inline-block lg:mt-3 py-2 md:py-2 lg:py-2 xl:py-3 px-3 sm:px-3 md:px-4 lg:px-5 xl:px-6 bg-neutral-100 text-neutral-800 no-underline rounded-full text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-semibold tracking-wide">Call Now</a>
            </div>
            <button onClick={handleMuteUnmuteVideo} className="absolute top-28 right-10 z-30 bg-neutral-500 p-1 sm:p-1 md:p-2 lg:p-3 xl:p-4 rounded-full">
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>
            <button onClick={handlePlayPauseVideo} className="absolute bottom-10 right-10 z-30 bg-neutral-300 p-2 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-full">
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
        </div>
    );
}

export default Landing;