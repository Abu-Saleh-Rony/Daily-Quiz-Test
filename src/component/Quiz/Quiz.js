import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizShow from "../QuizShow/QuizShow";


const Quiz = () => {
    const loadQuiz = useLoaderData().data;
    console.log(loadQuiz);

    return (
        <div className="text-center pt-[5rem]">
            <h1 className="shadow-lg p-4 w-[300px] mx-auto text-3xl font-bold rounded">
                Quiz of <span className="text-blue-600">{loadQuiz.name}</span>
            </h1>
            {loadQuiz.questions.map((pro) => (
                <QuizShow key={pro.id} name={pro.name} quizAnswer={pro} />
            ))}
        </div>
    );
};

export default Quiz;
