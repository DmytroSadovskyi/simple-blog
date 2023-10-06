import SigninForm from "@/components/SigninForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignIn = async () => {
  return (
    <div className="text-center">
      <SigninForm />
    </div>
  );
};

export default SignIn;
