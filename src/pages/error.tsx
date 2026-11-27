import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Logo from '../components/Elements/Logo';

function ErrorPage() {
  const error = useRouteError();

  let statusCode: number | string = 'Error';
  let errorMessage = 'Terjadi kesalahan yang tidak terduga.';

  // 2. Cek tipe error menggunakan isRouteErrorResponse (Type Narrowing)
  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    errorMessage = error.statusText || error.data?.message || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg flex-col">
      <Logo />
      <h1 className="text-2xl font-bold mt-3 mb-1">Sorry,</h1>
      <p>
        {statusCode} | {errorMessage}
      </p>
    </div>
  );
}

export default ErrorPage;
