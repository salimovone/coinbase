import { useFormik } from "formik";
import React from "react";
import { loginSchema } from "../../schemas";

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, resetForm, handleSubmit } = useFormik({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: loginSchema
  });


  return (
    <div className="absolute w-full h-full bg-[#fff] overflow-hidden z-[9999] top-0 left-0 opacity-100 flex justify-center items-center text-Secondary -mt-20 px-10">
      <form className="max-w-96 w-full" onSubmit={handleSubmit}>
        <label htmlFor="id">Passport seriya va raqam:</label> <br />
        <input
          type="text"
          id="id"
          value={values.id}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Passport seriya va raqamini kiriting!"
          className={`${errors.id && touched.id ? "border-red-500":""} text-Dark outline-none mb-4 border py-1 px-4 rounded-xl mt-1 max-w-96 w-full uppercase placeholder:lowercase`}
        /> {errors.id && touched.id ?(<p className="text-xs -mt-3 text-red-700">{errors.id}</p>):null}
        <br />
        <label htmlFor="password">Parol:</label> <br />
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="parolni kiriting?"
          className={`${errors.password && touched.password ? "border-red-500":""} text-Dark outline-none mb-4 border py-1 px-4 rounded-xl mt-1 max-w-96 w-full`}
        /> {errors.password && touched.password ?(<p className="text-xs -mt-3 text-red-700 mb-8">{errors.password}</p>):null}

        <div className="w-full flex justify-between items-center text-sm">
          <span className="flex items-center gap-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Meni eslab qol</label>
          </span>
          <span className="cursor-pointer">Parol yodimda yo'q</span>
        </div>

        <div className="w-full flex justify-between items-center mt-4">
          <button onClick={resetForm} className="border px-4 py-1 rounded-2xl">
            tozalash
          </button>
          <button
            type="submit"
            className="border px-4 py-1 rounded-2xl bg-sky-500 text-[#fff]"
          >
            krish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
