import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Images/ventajas.jpg';

function Adventages() {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8 mt-32 mb-32 text-balance'>
            <div className='flex-1'>
                <h1 className='text-8xl text-[#1b2430] mb-1'>Advantages</h1>
                <h4 className='text-2xl mb-4 text-[#0A12A6]'><b>Welcome to CINEXPERIENCE</b></h4>
                <p className='mb-4'>Explore a diverse range of the latest blockbusters and timeless classics. From action-packed thrillers to heartwarming dramas, we've got something for every movie enthusiast.</p>
                <p className='mb-4'>Be the first to witness the hottest movies of the year with our exclusive premieres. Immerse yourself in the excitement of new releases before they hit theaters nationwide.</p>
                <p className='mb-4'>Sit back, relax, and enjoy the show in our modern, comfortable theaters equipped with the latest audio and visual technology. Experience cinema like never before with crystal-clear picture quality and immersive sound.</p>
                <p className="mb-4">
                    Say goodbye to long lines and last-minute rushes. With our easy-to-use online booking system, you can reserve your seats in advance from the comfort of your own home. Simply choose your movie, select your preferred showtime, and secure your tickets with just a few clicks.
                </p>
                <p>
                    Join us for special community events, film festivals, and screenings. Connect with fellow movie lovers and celebrate the magic of cinema together.
                </p>
                <Link to="/" className='block mt-6 bg-[#0A12A6] hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg text-center'>
                    About
                </Link>
            </div>
            <div className='flex-1'>
                <img src={img} alt="Imagen Brunch" className='w-full rounded-lg' />
            </div>
        </div>
    )
}

export default Adventages