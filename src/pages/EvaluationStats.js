import React from "react";
import { Header, LineChart, SparkLine, Stacked } from "../components";
import Area from "./Charts/Area";
import Bar from "./Charts/Bar";
import Pie from "./Charts/Pie";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const EvaluationStats = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Evaluation Stats" title="CS101" />
      <div className="container mx-auto px-4 sm:px-32">
        <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div class="px-3 py-4 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Form Details
            </h3>
            {/* <img
            className="object-contain h-44 w-44 rounded bg-slate-400"
            alt="profile"
            src={profilePic}
          /> */}
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-white px-3 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class=" text-base font-medium text-gray-600">Course</dt>
                <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                  CS101
                </dd>
              </div>
              <div class="bg-gray-50 px-3 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class=" text-base font-medium text-gray-600">Department</dt>
                <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                  CS
                </dd>
              </div>
              <div class="bg-gray-50 px-3 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class=" text-base font-medium text-gray-600">
                  Forms Filled
                </dt>
                <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                  74 / 80
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <Pie />
        </div>
        <div className="w-1/2">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default EvaluationStats;
