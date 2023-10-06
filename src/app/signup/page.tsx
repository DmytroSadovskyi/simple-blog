import SignUpForm from "@/components/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUp = async () => {
  return (
    <div className="text-center">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
