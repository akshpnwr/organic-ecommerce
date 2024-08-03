import { Link } from "react-router-dom";
import bgImg from "../assets/images/organic-vertical-background.jpg";

export default function SignUpSuccess() {
  return (
    <div className="max-w-6xl mx-auto flex h-dvh gap-10 md:gap-40 pt-10 md:py-16 px-3 md:px-0  flex-col md:flex-row">
      <div className="flex flex-col items-start space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-green-600 font-medium">
            Account Created!
          </div>
          <h1 className="text-gray-700 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Welcome to Eco bazaar!
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Your account has been successfully created. You can now log in and
            start using our platform.
          </p>
        </div>
        <Link
          to="/login"
          className="inline-flex bg-green-600 h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Go to Login
        </Link>
      </div>
      <div className="flex justify-center min-h-72 hover:scale-105 transition">
        <img
          src={bgImg}
          width="350"
          height="350"
          alt="Signup Success"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </div>
  );
}
