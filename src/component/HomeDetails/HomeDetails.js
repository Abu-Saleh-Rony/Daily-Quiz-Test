import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const HomeDetails = ({ data }) => {
    const { id, logo, name, total } = data

    const naviGate = useNavigate();

    const handleStartPractice = () => {
        naviGate(`/quiz/${id}`);

    };
    return (
        <div className="card w-[280px] glass mx-auto my-2 ">
            <figure><img src={logo} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Total Number of Quiz: {total}</h2>
                <p className='justify-start'>{name}</p>
                <div className="card-actions justify-start">
                    <button className='btn bg-blue-700'
                        onClick={handleStartPractice}>
                        <span className='flex items-center '>Quiz Start
                            <ArrowRightIcon className='w-6 h-6 text-sky-400' />

                        </span>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;



