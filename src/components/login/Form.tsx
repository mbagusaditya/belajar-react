export default function Form() {
  return (
    <>
      {/* form start */}
      <div className="mt-12">
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email address
            </label>
            <input
              type="email"
              className="text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0 py-3 px-4"
              placeholder="hello@example.com"
              name="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              className="text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0 py-3 px-4"
              placeholder="************"
              name="password"
              id="password"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="text-sm accent-primary w-4"
              name="status"
              id="status"
            />
            <label htmlFor="status" className="text-sm text-gray-01 ml-3">
              Keep me signed in
            </label>
          </div>

          <button
            className="rounded-md text-sm bg-primary w-full text-white py-3"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      {/* form end */}
    </>
  );
}
