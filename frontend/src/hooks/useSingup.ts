import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type signupFormData = {
  firstName: string;
  lastName: string;
  gender: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const useSingup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (data: signupFormData) => {
    if (!isDataValid(data)) return;
    setLoading(true);
    try {
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Account created!");
        navigate("/sign-up-success");
      }
    } catch (error) {
      toast.error("Failed to signup");
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

const isDataValid = (data: signupFormData) => {
  const { firstName, lastName, gender, username, password, confirmPassword } =
    data;

  if (firstName === "") {
    toast.error("First name cannot be empty");
    return false;
  }

  if (lastName === "") {
    toast.error("Last name cannot be empty");
    return false;
  }

  if (gender === "") {
    toast.error("Please select a gender");
    return false;
  }

  if (username === "") {
    toast.error("Username cannot be empty");
    return false;
  }

  if (password === "") {
    toast.error("Password cannot be empty");
    return false;
  }

  // if (password.length < 8) {
  //   toast.error("Password length cannot be less than 8");
  //   return false;
  // }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
};

export default useSingup;
