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

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup } = useSingup();

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
    console.log("data", data);
    signup(data);
  };
  return (
    <div className="flex justify-center items-center h-dvh bg-background">
      <form onSubmit={onSubmit} className="w-full md:max-w-xl mx-3 md:p-6">
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
            <Button type="submit" className="bg-green-600 w-full">
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </form>
      <Toaster />
    </div>
  );
};

export default SignUp;