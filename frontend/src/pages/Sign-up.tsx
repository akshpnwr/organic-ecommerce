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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import useSingup from "@/hooks/useSingup";
import { FormEvent, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { RotateLoader } from "react-spinners";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, signup } = useSingup();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      gender,
      username,
      password,
      confirmPassword,
    };
    signup(data);
  };
  return (
    <div className="flex justify-center items-center h-dvh bg-background">
      <form onSubmit={onSubmit} className="w-full md:max-w-xl mx-3 md:p-6">
        {loading || (
          <Card className="">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-600">
                Sign Up
              </CardTitle>
              <CardDescription>Create your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-600" htmlFor="firstName">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder=""
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-600" htmlFor="lastName">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder=""
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-600" htmlFor="gender">
                  Gender
                </Label>
                <Select onValueChange={(value: string) => setGender(value)}>
                  <SelectTrigger className="focus-visible:ring-offset-0 focus-visible:ring-0">
                    <SelectValue
                      className="text-gray-600 "
                      placeholder="Select gender"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="text-gray-600" value="male">
                      Male
                    </SelectItem>
                    <SelectItem className="text-gray-600" value="female">
                      Female
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-600" htmlFor="username">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-600" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-600" htmlFor="confirm_password">
                  Confirm Password
                </Label>
                <Input
                  id="confirm_password"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </CardContent>

            <CardFooter>
              <div className="w-full">
                <div className="flex pb-3 gap-2 text-sm">
                  <p>Already have an account?</p>
                  <Link
                    to="/login"
                    className="text-green-600 border-b border-green-600 font-semibold hover:text-green-800"
                  >
                    Login
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    type="submit"
                    className="bg-green-600 w-full hover:bg-green-700"
                  >
                    Sign Up
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

export default SignUp;
