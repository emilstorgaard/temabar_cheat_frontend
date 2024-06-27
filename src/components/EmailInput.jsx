"use client";

import { useState } from "react";
import Spinner from "./Spinner";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const temabarCheat = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:8080/api/v1/temabar/cheat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      setEmail("");
      const data = await res.json();
      setMessage(data.message)

      if (!res.ok) {
        throw new Error("Failed to cheat");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
<form onSubmit={temabarCheat} className="max-w-sm w-full mx-auto p-6 bg-gray-700 shadow-md rounded-lg flex flex-col space-y-4">
  <div>
    <label htmlFor="email" className="block text-m font-bold text-yellow-600 mb-1">Email</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => {
        setError(null),
        setMessage(null),
        setEmail(e.target.value)
      }}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="john@doe.com"
      required
    />
  </div>
  {loading ?
    <Spinner />
  :
    <button
    type="submit"
    className={`text-yellow-600 bg-customGreen hover:bg-yellow-600 hover:text-customGreen focus:ring-4 focus:outline-none focus:ring-yellow-300 font-bold rounded-lg text-m w-full sm:w-auto px-5 py-2.5 text-center`}>
    Submit
  </button>
  }
    {message && <div className="text-green-500 mt-2 p-2 bg-green-100 rounded-lg">{message}</div>}
    {error && <div className="text-red-500 mt-2 p-2 bg-red-100 rounded-lg">{error}</div>}
</form>
  )
}