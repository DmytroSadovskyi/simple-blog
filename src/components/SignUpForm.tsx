"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.warn(`Field type name - ${name} doesn't work`);
    }
  };

  const router = useRouter();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary");
    }

    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      console.log("Register success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-cyan-500">
        <h1 className="text-xl font-bold my-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-cyan-500 text-white font-bold px-6 py-2"
          >
            Sign Up
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md ">
              {error}
            </div>
          )}
          <Link href="/signin" className="text-sm mt-3 text-right">
            Already have an account? <span className="underline">Log in</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
