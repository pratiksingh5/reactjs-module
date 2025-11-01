import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <form className="space-y-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-md"
        />
        <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700" 
        onClick={() => navigate('/dashboard')}>
          Sign In
        </button>
      </form>

      <h4 className="my-4 text-blue-700 underline cursor-pointer"
      onClick={() => navigate('/register')}>New User? Register Now</h4>
    </div>
  );
}
export default Login;
