import { useContext } from "react";
import { Link } from "react-router-dom";
import HomeDetails from "../HomeDetails/HomeDetails";
import { LoadContext } from "../BaseData/BaseData";


const Home = () => {

    const receiveData = useContext(LoadContext)


    return (
        <div className="container">

            <div className="relative flex flex-col-reverse py-16 bg-gray-200 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-teal-accent-400">
                            Daily QuizTest
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            React makes it painless
                            <br className="hidden md:block" />
                            to create{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                interactive Website.
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                        </p>
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white bg-blue-800 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </Link>
                            <Link
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-black-900  transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />


            <div className="sm:grid  grid-cols-1 lg:grid-cols-2 mx-auto">
                {
                    receiveData.map(data => <HomeDetails key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Home;
