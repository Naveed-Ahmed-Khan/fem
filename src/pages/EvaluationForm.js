import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header } from "../components";
import FormTemplate from "../components/FormTemplate";

const questions = [
  { id: 1, question: "How well do you know the subject?" },
  { id: 2, question: "The course content was?" },
  { id: 3, question: "The instructor's contribution to the course was?" },
  {
    id: 4,
    question: "Instructor was able to address and answer all my questions?",
  },
  { id: 5, question: "Communication during the session was clear?" },
  { id: 6, question: "Understood the mission clearly?" },
  {
    id: 7,
    question:
      "Instructor was able to grab all my attention for the entire session?",
  },
  { id: 8, question: "I felt that the topic was interesting and engaging?" },
  { id: 9, question: "The instructor was able to answer all my questions?" },
  { id: 10, question: "The instructor was able to answer all my questions?" },
];

const EvaluationForm = () => {
  const navigate = useNavigate();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Evaluation Form" title="CS101" />
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
              <div class="bg-gray-50 px-3 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class=" text-base font-medium text-gray-600">
                  Teacher name
                </dt>
                <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                  Mickael Poulaz
                </dd>
              </div>
              <div class="bg-white px-3 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class=" text-base font-medium text-gray-600">Courses</dt>
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
            </dl>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <FormTemplate questions={questions} />
        <Button
          onClick={() => {
            navigate("/profile");
          }}
        >
          Submit Evaluation Form
        </Button>
      </div>
      <div className="w-1/2 text-center">
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default EvaluationForm;
