function Login() {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
      <input type="password" placeholder="Password" className="w-full p-3 border rounded-md" />
      <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
        Sign In
      </button>
    </form>
  );
}
export default Login;
