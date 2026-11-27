import GoogleButton from '../components/Elements/GoogleButton';
import FormSignUp from '../components/Fragments/FormSignUp';
import AuthLayout from '../components/Layouts/AuthLayout';

export default function SignUp() {
  return (
    <AuthLayout>
      <FormSignUp />

      {/* teks start */}
      <div className="flex flex-col justify-center items-center text-xs text-gray-03 my-9 px-7">
        <div className="border border-gray-05 w-full"></div>
        <div className="bg-special-mainBg absolute"> or sign in with</div>
      </div>
      {/* teks end */}

      <GoogleButton />

      {/* link start */}
      <div className="flex justify-center">
        <p className="text-sm font-bold">
          Already have an account?
          <a className="text-primary">Sign in here</a>
        </p>
      </div>
      {/* link end */}
    </AuthLayout>
  );
}
