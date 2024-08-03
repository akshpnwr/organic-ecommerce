import { useState } from "react";
import { toast } from "react-hot-toast";

type loginFormData = {
  username: string;
  password: string;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = (data: loginFormData) => {
    if (!isDataValid(data)) return;

    toast.success("login successful");
  };
  return { loading, login };
};

const isDataValid = (data: loginFormData) => {
  const { username, password } = data;

  if (username === "") {
    toast.error("Username cannot be empty");
    return false;
  }

  if (password === "") {
    toast.error("Password cannot be empty");
    return false;
  }

  return true;
};

export default useLogin;
