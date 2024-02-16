import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  let router = useRouter();
  const { token, user } = useSelector((state) => state?.auth);
  useEffect(() => {
    if (!(token && user?.role == "vendor")) {
      router.push("/login");
    }
  }, []);

  return <div>{children}</div>;
};
