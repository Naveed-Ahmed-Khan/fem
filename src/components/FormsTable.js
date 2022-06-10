import React from "react";

const FormsTable = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
      <div className="py-8">
        <div className=" -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Form Evaluation
              </h3>
              <p class="mt-1 max-w-2xl text-base text-gray-500">
                Details and informations evaluation forms.
              </p>
            </div>
            <table className="border-t border-gray-200 min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="font-medium px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase "
                  >
                    Teachers
                  </th>
                  <th
                    scope="col"
                    className="font-medium px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase "
                  >
                    Courses
                  </th>

                  <th
                    scope="col"
                    className="font-medium px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase "
                  >
                    Evaluation status
                  </th>
                  <th
                    scope="col"
                    className="font-medium px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">CS101</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Not Evaluated</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Evaluate
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">SE101</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Not Evaluated</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Evaluate
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">EN101</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Evaluated</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Evaluate
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">MA203</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Evaluated</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Evaluate
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsTable;
