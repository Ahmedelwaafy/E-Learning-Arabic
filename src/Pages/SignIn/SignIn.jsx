import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useState } from "react";


export default function SignIn() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    navigate("/", { replace: true });
    reset();
  };
  return (
    <section className="flex flex-col justify-center items-center gap-12 md:gap-6 h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <Link
          to="/"
          className="desktop-nav__left--logo text-2xl font-bold hover:scale-110 duration-300 tracking-widest"
        >
          TAFL
        </Link>
        <h1 className="text-2xl font-medium">Sign in</h1>
        <p className="text-base opacity-80">
          Welcome back! Please enter your information.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-start  bg-secondary p-16  rounded-3xl shadow-lg shadow-blue/50 w-[450px] mx-auto"
      >
        {/** Username filed */}
        <div className=" flex flex-col justify-center items-start gap-2 w-full">
          <label htmlFor="username"> Username</label>
          <input
            className="signin-inputs max-w-60"
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            autoComplete="on"
            {...register("username", {
              required: true,
              pattern: /^[A-Za-z0-9]*$/,
              maxLength: 20,
              minLength: 3,
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs pt-2">
              {errors.username.type === "required" && "This field is required."}
              {errors.username.type === "pattern" &&
                " Only letters and numbers are allowed."}
              {errors.username.type === "maxLength" &&
                "Available username max length is 20."}
              {errors.username.type === "minLength" &&
                " Please enter at least 3 letters."}
            </p>
          )}
        </div>
        {/** Password filed */}

        <div className="relative flex flex-col justify-center items-start gap-2 mt-10 mb-2 w-full">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="signin-inputs max-w-60"
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
            {...register("password", {
              required: true,
              maxLength: 25,
              minLength: 6,
            })}
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs pb-4">
            {errors.password.type === "required" && "This field is required."}
            {errors.password.type === "maxLength" &&
              "Password Max length is 25 char."}
            {errors.password.type === "minLength" &&
              "Password Min length is 6 char."}
          </p>
        )}
        <Link className="text-xs text-start  underline " to="/reset_password">
          Forgot password?
        </Link>
        <input
          className=" submit max-w-60 mt-10"
          type="submit"
          value="Sign In"
        />
      </form>
      <p className="text-sm ">
        Don't have an account?{" "}
        <span
          className="text-lg cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Create one.
        </span>
      </p>
    </section>
  );
}
