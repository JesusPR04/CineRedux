import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Images/offers.jpg';

function Offers() {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8 mt-32 mb-32 text-balance'>
            <div className='flex-1'>
                <img src={img} alt="Imagen Brunch" className='w-full rounded-lg' />
            </div>
            <div className='flex-1'>
                <h1 className='text-8xl text-[#1b2430] mb-1'>Offers</h1>
                <h4 className='text-2xl mb-4 text-[#0A12A6]'><b>CINEXPERIENCE</b></h4>
                <p className='mb-4'><b className='text-[#1b2430]'>Weekend Movie Madness</b><br />Kick off the weekend with discounted tickets every Friday and Saturday night! Enjoy your favorite films at a special rate and start your weekend on a high note.</p>
                <p className='mb-4'><b className='text-[#1b2430]'>Combo Deals</b><br />Make the most of your movie night with our combo deals on snacks and beverages. Save on popcorn, drinks, and candy when you purchase them together with your tickets.</p>
                <p className='mb-4'><b className='text-[#1b2430]'>Student Discounts</b><br />Calling all students! Enjoy exclusive discounts on movie tickets with your student ID. Whether you're catching a break between classes or unwinding after exams, we've got you covered.</p>
                <p className=''><b className='text-[#1b2430]'>Membership Rewards</b><br />Join our loyalty program and unlock a world of rewards! Earn points with every purchase and redeem them for free tickets, concessions, and more. Plus, enjoy special perks and exclusive offers reserved just for members.</p>
                <Link className='block mt-6 bg-[#0A12A6] hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg text-center' to='/movies'>
                    Shop
                </Link>
            </div>
        </div>
    )
}

export default Offers