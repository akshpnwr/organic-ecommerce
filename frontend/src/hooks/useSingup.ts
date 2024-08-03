import { useState } from "react";
import { toast } from "react-hot-toast";

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

  const signup = (data: signupFormData) => {
    if (!isDataValid(data)) return;

    toast.success("Signup successful");
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

  if (password.length < 8) {
    toast.error("Password length cannot be less than 8");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
};

export default useSingup;
