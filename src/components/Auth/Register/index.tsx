"use client";
import { useState, useEffect } from "react";
import Router from "next/router";
import Button_primary from "@/components/Common/Buttons/button-primary";
// import { loginUser } from "../../../lib/auth";
// import { removeToken } from "../../../lib/token";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {};

  return (
    <form
      className="flex flex-col items-stretch justify-stretch"
      onSubmit={handleSubmit}
    >
      <legend className="h1 text-2xl font-medium my-4 text-center text-stone-700">
        Create An Account
      </legend>
      <div className="mb-3 flex flex-col w-full text-stone-500">
        <label
          htmlFor="usernameInput"
          className="form-label font-semibold text-sm"
        >
          Email Address
        </label>
        <input
          type="email"
          id="usernameInput"
          className="form-control rounded-md"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3 flex flex-col w-full text-stone-500">
        <label
          htmlFor="passwordInput"
          className="form-label font-semibold text-sm"
        >
          Enter a Password
        </label>
        <input
          type="password"
          id="passwordInput"
          className="form-control rounded-md"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 flex flex-col w-full text-stone-500">
        <label
          htmlFor="passwordInput"
          className="form-label font-semibold text-sm"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="passwordInput"
          className="form-control rounded-md"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      {/* <button
        type="submit"
        className="p-3 px-6 text-sm font-semibold flex item-center justify-center text-stone-950 bg-amber-500 rounded-lg hover:bg-amber-600
        transition ease-in-out delay-150 my-4"
        disabled={isLoading}
      >
        Login
      </button> */}

      <Button_primary type={"submit"} text="Register" />
    </form>
  );
}
