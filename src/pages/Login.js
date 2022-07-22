import { SiShopware } from "react-icons/si";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useStateContext();
  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      /*  email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"), */
    }),
    onSubmit: (values) => {
      console.log(values);
      setErrorMessage("");
      localStorage.setItem("user", values.email);
      setUser(values.email);

      if (values.email.includes("admin")) {
        navigate("/check-students");
      } else if (values.email.includes("student")) {
        navigate("/profile");
      } else if (values.email.includes("teacher")) {
        navigate("/teacher-profile");
      } else {
        setErrorMessage("Invalid Credentials! Try again.");
      }
      // alert(JSON.stringify(values, null, 2));
      //   login(values.email, values.password);
    },
  });

  return (
    <div className="bg-primaryL w-[100vw] h-[100vh] pt-[15vh]">
      <div className="flex items-center justify-center gap-2 p-4 w-[80%] max-w-md mx-auto text-xl font-extrabold tracking-tight">
        <SiShopware /> <span>F . E . M</span>
      </div>
      <div
        className=" p-8 w-[80%] max-w-md mx-auto  
        border rounded-md  bg-white
        shadow-lg drop-shadow-xl "
      >
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <h1 className="text-secondary text-2xl font-bold mx-auto mb-4">
            Login
          </h1>

          {errorMessage && (
            <div className="mb-4 px-4 py-2 flex items-center justify-between border border-red-500 rounded">
              <p className=" text-red-500">{errorMessage}</p>
              <svg
                onClick={() => {
                  setErrorMessage("");
                }}
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          )}

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <label>E-mail:</label>
              <TextBoxComponent
                type="text"
                placeholder="asd@gmail.com"
                cssClass="e-outline"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="mt-1 text-sm text-red-500">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label>Password:</label>
              <TextBoxComponent
                type="password"
                placeholder="******"
                cssClass="e-outline"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="mt-1 text-sm text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <Button type="submit">
            <p className="text-lg">Login</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
