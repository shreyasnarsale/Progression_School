import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Sign In</h2>
        <p>Use the button below to authenticate</p>

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
