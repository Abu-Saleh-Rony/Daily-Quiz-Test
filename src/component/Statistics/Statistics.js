import React, { useContext } from "react";
import { LoadContext } from "../BaseData/BaseData";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Statistics = () => {
    const rechartData = useContext(LoadContext);


    return (
        <div>

            <h1 className="text-center mt-[50px] text-3xl text-white font-bold">Here is the Graphical Data</h1>

            <div className="flex justify-center mt-12 mb-12">

                <LineChart
                    width={700}
                    height={500}
                    data={rechartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
