"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    switch (name) {
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

  const formReset = () => {
    setEmail("");
    setPassword("");
  };

  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (!email || !password) {
        setError("All fields are necessary");
        formReset();
      } else if (res?.error) {
        setError("Invalid credentials");
        formReset();
        return;
      }

      router.replace("profile");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-cyan-500">
        <h1 className="text-xl font-bold my-4">Sign In</h1>
        {loading && <p>Loading...</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute top-2/4 right-[15px] -translate-y-2/4"
              onClick={handleShowPassword}
              aria-label="toggle-password"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className={`bg-cyan-500 text-white font-bold px-6 py-2 hover:bg-cyan-700 transition-[background-color] duration-300 ${
              error ? "mb-0" : "mb-3"
            }`}
          >
            Sign In
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mb-3">
              {error}
            </div>
          )}
        </form>
        <button
          className="w-full border py-3 flex items-center justify-center gap-2 hover:bg-gray-200 transition-[background-color] duration-300"
          onClick={async () => {
            try {
              setLoading(true);
              await signIn("google", { callbackUrl });
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
          }}
        >
          <Image
            src={"/assets/1657952440google-logo-png-transparent.png"}
            alt="Google logo"
            width={20}
            height={20}
          />
          Sign in with Google
        </button>
        <Link href="/signup" className=" block text-sm mt-3 text-right">
          Don`t have an account? <span className="underline">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;
