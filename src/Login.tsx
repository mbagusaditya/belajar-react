import Form from './components/login/Form';
import GoogleButton from './components/login/GoogleButton';
import Logo from './components/login/Logo';

function Login() {
  return (
    <>
      <main className="grid place-content-center min-h-screen">
        <div className="min-w-[320px] flex flex-col">
          <Logo />

          <Form />

          {/* teks start */}
          <div className="flex flex-col justify-center items-center text-xs text-gray-03 my-9 px-7">
            <div className="border border-gray-05 w-full"></div>
            <div className="bg-special-mainBg absolute"> or sign in with</div>
          </div>
          {/* teks end */}

          <GoogleButton />

          {/* link start */}
          <div className="flex justify-center">
            <a className="text-primary text-sm font-bold">Create an account</a>
          </div>
          {/* link end */}
        </div>
      </main>
    </>
  );
}

export default Login;
