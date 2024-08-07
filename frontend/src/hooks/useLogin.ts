import { User } from "@/types";
import useAuthUser from "@/zustand/useAuthUser";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type loginFormData = {
  username: string;
  password: string;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuthUser();

  const login = async (loginData: loginFormData) => {
    if (!isDataValid(loginData)) return;

    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!res.ok) throw new Error("Invalid username or password");

      const data = await res.json();

      const user: User = data.user;

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
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
