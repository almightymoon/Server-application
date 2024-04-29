import { useNavigate } from "react-router-dom";
import { useAuth } from "./routers/AuthContext";

const useRequireAuth = () => {
  const naviagte = useNavigate();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    naviagte("/Login");
  }
};
export default useRequireAuth;
