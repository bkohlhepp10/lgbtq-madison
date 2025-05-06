import { useState } from "react";
import Head from "next/head";

export default function Suggest() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    link: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("https://sheetdb.io/api/v1/hxnput4tudoi8", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: form }),
    });
    setSubmitted(true);
    setForm({ name: "", category: "", description: "", link: "", reason: "" });
  };

  return (
    <>
      <Head><title>Suggest a Place – Pride Guide</title></Head>
      <main className="max-w-xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">🌟 Suggest a Place</h1>
        {submitted ? (
          <p className="text-center text-green-600 font-medium">
            Thank you! Your suggestion was sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Name of the place" value={form.name} onChange={handleChange} required className="w-full p-3 border rounded" />
            <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required className="w-full p-3 border rounded" />
            <textarea name="description" placeholder="Short description" value={form.description} onChange={handleChange} required className="w-full p-3 border rounded" />
            <input name="link" placeholder="Google Maps or website link" value={form.link} onChange={handleChange} className="w-full p-3 border rounded" />
            <textarea name="reason" placeholder="Why is this queer-friendly?" value={form.reason} onChange={handleChange} required className="w-full p-3 border rounded" />
            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded">Submit</button>
          </form>
        )}
      </main>
    </>
  );
}