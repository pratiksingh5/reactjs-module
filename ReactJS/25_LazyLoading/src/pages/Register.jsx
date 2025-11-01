import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <form className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Register
        </h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border rounded-md"
        />
        <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
          Register
        </button>
      </form>
      <h4
        className="my-4 text-blue-700 underline cursor-pointer"
        onClick={() => navigate("/")}
      >
        ALready have account? Sign In
      </h4>
    </div>
  );
}
export default Register;
