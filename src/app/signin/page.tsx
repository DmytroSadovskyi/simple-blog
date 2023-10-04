import GoogleButton from "@/components/GoogleButton";
import SigninForm from "@/components/SigninForm";

const SignIn = async () => {
  return (
    <div className="text-center">
      <SigninForm />
      <p>or</p>
      <GoogleButton />
    </div>
  );
};

export default SignIn;
