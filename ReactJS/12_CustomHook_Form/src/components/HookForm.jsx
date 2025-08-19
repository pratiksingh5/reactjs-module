import { useState } from "react";
import useForm from "../hooks/useForm";

function HookForm() {
  const { values, errors, handleChange, handleSubmit } = useForm();

//   console.log("valueeeeee", values)
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-slate-300">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => handleChange(e)}
            value={values.email}
          />

          {errors.email ? <small className="text-red-500">{errors.email}</small> : ""}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            // onChange={handleChange}
            onChange={(e) => handleChange(e)}
            value={values.password}


            // onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password ? <small className="text-red-500">{errors.password}</small> : ""}
        </div>

        <div className="flex items-center justify-between w-full">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default HookForm;
