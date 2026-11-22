import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../component/context/AuthContext";

export default function Logout() {
  const { user, logout } = useAuth();
  useEffect(() => {
    if (user) { logout(); toast.success("You have logged out"); }
  }, [user, logout]);
  return <Navigate to="/" replace />;
}
