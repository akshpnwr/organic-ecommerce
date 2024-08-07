import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/UI/card";
import { Label } from "@/components/UI/label";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { Eye, EyeOff } from "lucide-react";
import { FormEvent, useState } from "react";
import useLogin from "@/hooks/useLogin";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { RotateLoader } from "react-spinners";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    login(data);
  };

  return (
    <div className="flex justify-center items-center h-dvh bg-background">
      <form onSubmit={onSubmit} className="w-full max-w-md p-6">
        {loading || (
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-600">
                Log in
              </CardTitle>
              <CardDescription>Log in to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className=" text-gray-600" htmlFor="username">
                  Username
                </Label>
                <Input
                  className="focus-visible:ring-0 focus-visible:ring-offset-0"
                  id="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-600" htmlFor="password">
                  Password
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!isPasswordVisible ? (
                    <EyeOff
                      onClick={togglePasswordVisibility}
                      className="text-gray-600 cursor-pointer font-thin text-sm hover:text-green-200"
                    />
                  ) : (
                    <Eye
                      onClick={togglePasswordVisibility}
                      className="text-gray-600 cursor-pointer font-thin text-sm hover:text-green-200"
                    />
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <div className="flex pb-3 gap-2 text-sm">
                  <p>Don't have an account?</p>
                  <Link
                    to="/signup"
                    className="text-green-600 font-semibold hover:text-green-800"
                  >
                    Sign up
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    type="submit"
                    className="bg-green-600 w-full hover:bg-green-700"
                  >
                    Log in
                  </Button>
                  <Link to="/">
                    <Button
                      variant="outline"
                      className="w-full text-green-600 hover:text-green-600 border-green-600"
                    >
                      Back to Homepage
                    </Button>
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        )}
        {loading && (
          <div className="text-center my-40">
            <RotateLoader color="#16a34a" />
          </div>
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
