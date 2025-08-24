import Home from "../pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 container-max py-6 w-full">
        <Home />
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container-max py-6 text-sm text-neutral-500">
          Built with React + Tailwind • Context + Reducer • axios • LocalStorage
        </div>
      </footer>
    </div>
  );
}
