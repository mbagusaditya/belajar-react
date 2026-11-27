import LabeledInput from '../Elements/LabeledInput';
import Button from '../Elements/Button';
import CheckBox from '../Elements/CheckBox';

export default function FormSignUp() {
  return (
    <>
      {/* form start */}
      <div className="mt-12">
        <form action="" className="space-y-4">
          <div>
            <LabeledInput
              label="name"
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
            />
          </div>

          <div>
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div>
            <LabeledInput
              label="Password"
              type="password"
              placeholder="************"
              name="password"
              id="password"
            />
          </div>

          <div className="flex items-center">
            <CheckBox
              type="checkbox"
              name="status"
              id="status"
              label="Keep me signed in"
            />
          </div>

          <Button>Login</Button>
        </form>
      </div>
      {/* form end */}
    </>
  );
}
