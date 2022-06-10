/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
// import * as ReactDOM from 'react-dom';
import * as React from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { Button, Header } from "../components";

const AddStudent = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Students" title="Add Student" />
      <div className="grid place-items-center">
        <div className="max-w-3xl w-full min-w-[300px]">
          <div className="flex flex-col gap-2 mb-6">
            <label className="">Student Name:</label>
            <TextBoxComponent
              placeholder="Ali Ahmed Khan"
              cssClass="e-filled"
              // floatLabelType="Auto"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="">ID Number:</label>
            <TextBoxComponent
              placeholder="ID Number"
              cssClass="e-filled"
              // floatLabelType="Auto"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="">Courses:</label>
            <TextBoxComponent
              placeholder="Courses"
              cssClass="e-filled"
              // floatLabelType="Auto"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="">Department:</label>
            <TextBoxComponent
              placeholder="Department"
              cssClass="e-filled"
              // floatLabelType="Auto"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="">Semester:</label>
            <TextBoxComponent
              placeholder="Semester"
              cssClass="e-filled"
              // floatLabelType="Auto"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="">Year:</label>
            <TextBoxComponent
              placeholder="Year"
              cssClass="e-filled"
              // floatLabelType="Auto"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="">GPA:</label>
            <TextBoxComponent
              placeholder="GPA"
              cssClass="e-filled"
              // floatLabelType="Auto"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <Button>Add Student</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
