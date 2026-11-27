import { Link } from 'react-router-dom';
import GoogleButton from '../components/Elements/GoogleButton';
import FormSignIn from '../components/Fragments/FormSignIn';
import AuthLayout from '../components/Layouts/AuthLayout';

export default function SignIn() {
  return (
    <AuthLayout>
      <FormSignIn />

      {/* teks start */}
      <div className="flex flex-col justify-center items-center text-xs text-gray-03 my-9 px-7">
        <div className="border border-gray-05 w-full"></div>
        <div className="bg-special-mainBg absolute"> or sign up with</div>
      </div>
      {/* teks end */}

      <GoogleButton />

      {/* link start */}
      <div className="flex justify-center">
        <Link to="/register" className="text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
      {/* link end */}
    </AuthLayout>
  );
}
