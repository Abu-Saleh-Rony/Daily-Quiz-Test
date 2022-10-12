import { createBrowserRouter } from "react-router-dom";
import BaseData from "../BaseData/BaseData";
import ErrorFinder from "../ErrorFinder/ErrorFinder";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";


import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorFinder />,
        loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`);
        },
        element: <BaseData />,

        children: [
            {
                path: "/",

                element: <Home />,
            },
            {
                path: "/home",

                element: <Home />,
            },

            {
                path: "/topics",
                element: <Topics />,
            },

            {
                path: "/statistics",
                element: <Statistics />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/quiz/:qid",
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qid}`)
                },
                element: <Quiz />,

            },
        ],
    },
]);
