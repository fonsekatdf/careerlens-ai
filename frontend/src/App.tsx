import { useEffect, useState } from "react";
import { checkBackendHealth } from "./services/healthService";

function App() {
  const [status, setStatus] = useState("Checking backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    checkBackendHealth()
      .then((data) => setStatus(data.status))
      .catch(() => setError("Backend connection failed"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-10 text-center">
        <h1 className="text-4xl font-bold">
          CareerLens <span className="text-blue-400">AI</span>
        </h1>

        <p className="mt-5 text-slate-300">
          Backend connection status
        </p>

        <p className="mt-3 font-semibold text-green-400">
          {error || status}
        </p>
      </div>
    </main>
  );
}

export default App;
