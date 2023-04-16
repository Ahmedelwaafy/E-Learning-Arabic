import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    navigate("/", { replace: true });
    reset();
  };
  return (
    <section className="flex flex-col justify-center items-center gap-12 md:gap-6 min-h-screen py-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <Link
          to="/"
          className="desktop-nav__left--logo text-2xl font-bold hover:scale-110 duration-300 tracking-widest"
        >
          TAFL
        </Link>
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-base opacity-80">
          Enter your details and create an account.{" "}
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-start  bg-secondary p-10 rounded-3xl shadow-lg  max-w-[600px] gap-6"
      >
        {/** Name filed */}
        <div className="flex justify-between items-center gap-6 md:flex-col w-full ">
          {/** First and Second Names filed */}

          {/** First Name filed */}

          <div className=" flex flex-col justify-center items-start gap-2  w-1/2 md:w-full">
            <label htmlFor="firstnameregister"> First Name</label>
            <input
              className="signin-inputs w-full "
              type="text"
              id="firstnameregister"
              placeholder="First Name"
              name="firstnameregister"
              autoComplete="on"
              {...register("firstnameregister", {
                required: true,
                pattern: /^[A-Za-z]+$/,
                maxLength: 15,
                minLength: 3,
              })}
            />
            {errors.firstnameregister && (
              <p className="text-red-500 text-xs pt-2">
                {errors.firstnameregister.type === "required" &&
                  "This field is required."}
                {errors.firstnameregister.type === "pattern" &&
                  " Only letters are allowed."}
                {errors.firstnameregister.type === "maxLength" &&
                  "Available name max length is 15."}
                {errors.firstnameregister.type === "minLength" &&
                  " Please enter at least 3 letters."}
              </p>
            )}
          </div>

          {/** Second Name filed */}

          <div className=" flex flex-col justify-center items-start gap-2  w-1/2 md:w-full">
            <label htmlFor="secondnameregister"> Second Name</label>
            <input
              className="signin-inputs  w-full "
              type="text"
              id="secondnameregister"
              placeholder="Second Name"
              name="secondnameregister"
              autoComplete="on"
              {...register("secondnameregister", {
                required: true,
                pattern: /^[A-Za-z]+$/,
                maxLength: 15,
                minLength: 3,
              })}
            />
            {errors.secondnameregister && (
              <p className="text-red-500 text-xs pt-2">
                {errors.secondnameregister.type === "required" &&
                  "This field is required."}
                {errors.secondnameregister.type === "pattern" &&
                  " Only letters are allowed."}
                {errors.secondnameregister.type === "maxLength" &&
                  "Available name max length is 15."}
                {errors.secondnameregister.type === "minLength" &&
                  " Please enter at least 3 letters."}
              </p>
            )}
          </div>
        </div>

        {/** Username and Email fields */}
        <div className="w-full flex justify-between gap-16 md:gap-6 md:flex-col">
          {/** Username field */}

          <div className=" flex flex-col justify-center items-start gap-2  w-1/2 md:w-full">
            <label htmlFor="usernameregister"> Username</label>
            <input
              className="signin-inputs  w-full"
              type="text"
              id="usernameregister"
              placeholder="Username"
              name="usernameregister"
              autoComplete="on"
              {...register("usernameregister", {
                required: true,
                pattern: /^[A-Za-z0-9]*$/,
                maxLength: 20,
                minLength: 3,
              })}
            />
            {errors.usernameregister && (
              <p className="text-red-500 text-xs pt-2">
                {errors.usernameregister.type === "required" &&
                  "This field is required."}
                {errors.usernameregister.type === "pattern" &&
                  " Only letters and numbers are allowed."}
                {errors.usernameregister.type === "maxLength" &&
                  "Available username max length is 20."}
                {errors.usernameregister.type === "minLength" &&
                  " Please enter at least 3 letters."}
              </p>
            )}
          </div>

          {/** Email field */}

          <div className=" flex flex-col justify-center items-start gap-2  w-1/2 md:w-full">
            <label htmlFor="emailregister"> Email</label>

            <input
              className="signin-inputs  w-full "
              type="text"
              id="emailregister"
              placeholder="Email"
              name="email"
              autoComplete="on"
              {...register("emailregister", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.emailregister && (
              <p className="text-red-500 text-xs pt-2">
                {errors.emailregister.type === "required" &&
                  "This field is required."}
                {errors.emailregister.type === "pattern" &&
                  " Invalid Email Address."}
              </p>
            )}
          </div>
        </div>

        {/** WhatsUp field */}
        <div className="w-full flex justify-between gap-16 md:gap-0">
          <div className="w-1/2 md:w-full">
            <div className=" relative flex flex-col justify-center items-start gap-2 w-full">
              <label htmlFor="whatsupregister">WhatsUp</label>
              <input
                className="signin-inputs w-full "
                type="text"
                id="whatsupregister"
                placeholder="WhatsUp"
                name="whatsupregister"
                autoComplete="on"
                {...register("whatsupregister", {
                  required: true,
                  pattern: /^[\d]{11}/,
                  maxLength: 11,
                })}
              />
            </div>
            {errors.whatsupregister && (
              <p className="text-red-500 text-xs pt-4">
                {errors.whatsupregister.type === "required" &&
                  "This field is required."}
                {errors.whatsupregister.type === "pattern" &&
                  " Invalid Mobile Number."}
                {errors.whatsupregister.type === "maxLength" &&
                  " Invalid Mobile Number."}
              </p>
            )}
          </div>
        </div>

        {/** Password filed */}

        <div className="flex justify-between gap-16 md:flex-col w-full md:gap-6">
          {/** Password  */}

          <div className="w-1/2 md:w-full">
            <div className="relative flex flex-col justify-center items-start gap-2 ">
              <label htmlFor="passwordregister">Password</label>
              <input
                id="passwordregister"
                className="signin-inputs w-full"
                type="password"
                placeholder="Password"
                name="passwordregister"
                autoComplete="on"
                {...register("passwordregister", {
                  required: true,
                  maxLength: 25,
                  minLength: 6,
                })}
              />
            </div>
            {errors.passwordregister && (
              <p className="text-red-500 text-xs pt-4">
                {errors.passwordregister.type === "required" &&
                  "This field is required."}
                {errors.passwordregister.type === "maxLength" &&
                  "passwordregister Max length is 25 char."}
                {errors.passwordregister.type === "minLength" &&
                  "Password Min length is 6 char."}
              </p>
            )}
          </div>

          {/** Confirm Password  */}

          <div className="w-1/2 md:w-full">
            <div className="relative flex flex-col justify-center items-start gap-2 ">
              <label htmlFor="confirmpasswordregister">Confirm Password</label>
              <input
                id="confirmpasswordregister"
                className="signin-inputs w-full"
                type="password"
                placeholder="Confirm Password"
                name="confirmpasswordregister"
                autoComplete="on"
                {...register("confirmpasswordregister", {
                  required: true,
                  maxLength: 25,
                  minLength: 6,
                  validate: (value) => value === getValues("passwordregister"),
                })}
              />
            </div>
            {errors.confirmpasswordregister && (
              <p className="text-red-500 text-xs pt-4">
                {errors.confirmpasswordregister.type === "required" &&
                  "This field is required."}
                {errors.confirmpasswordregister.type === "maxLength" &&
                  "confirmpasswordregister Max length is 25 char."}
                {errors.confirmpasswordregister.type === "minLength" &&
                  "Password Min length is 6 char."}
                {errors.confirmpasswordregister.type === "validate" &&
                  "Passwords don't match."}
              </p>
            )}
          </div>
        </div>

        {/** User Image  */}
        <div className="w-full ">
          <input
            className="signin-inputs  w-full"
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/webp"
            name="image"
            {...register("image", {
              required: true,
              validate: (value) => !(value[0].size > 5000000),
            })}
          />

          {errors.image && (
            <p className="text-red-500 text-xs pt-4">
              {errors.image.type === "required" && "This field is required."}
              {errors.image.type === "validate" && "Max image size is 5MB."}
            </p>
          )}
        </div>

        {/** Submit Button */}
        <input className=" submit w-full mt-6 " type="submit" value="Sign up" />
      </form>
      <p className="text-sm ">
        Already have an account?{" "}
        <span
          className="text-lg cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Sign in.
        </span>
      </p>
    </section>
  );
}

export default Register;
