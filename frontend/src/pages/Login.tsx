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

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useLogin();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    console.log("data", data);
    login(data);
  };

  return (
    <div className="flex justify-center items-center h-dvh bg-background">
      <form onSubmit={onSubmit} className="w-full max-w-md p-6">
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
            <Button className="bg-green-600 w-full">Log In</Button>
          </CardFooter>
        </Card>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
