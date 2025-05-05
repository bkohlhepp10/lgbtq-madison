import React, { useState } from "react";

// LGBTQ+ friendly places in Madison
const PLACES = [
  {
    id: 1,
    name: "OutReach LGBTQ+ Community Center",
    category: "Community",
    description: "Support services, community programs, and events.",
    googleMapsUrl: "https://www.google.com/maps?q=OutReach+LGBTQ+Community+Center+Madison+WI",
  },
  {
    id: 2,
    name: "Sex Out Loud - UW Madison",
    category: "Student Org",
    description: "Peer sex education group supporting LGBTQ+ health.",
    googleMapsUrl: "https://www.google.com/maps?q=Sex+Out+Loud+UW+Madison",
  },
  {
    id: 3,
    name: "Sotto",
    category: "Nightlife",
    description: "Trendy basement bar and lounge with DJ nights and an inclusive crowd.",
    googleMapsUrl: "https://www.google.com/maps?q=Sotto+Madison+WI",
  },
  {
    id: 4,
    name: "FIVE Nightclub",
    category: "Nightlife",
    description: "Popular LGBTQ+ dance club and event venue with theme nights.",
    googleMapsUrl: "https://www.google.com/maps?q=FIVE+Nightclub+Madison+WI",
  },
  {
    id: 5,
    name: "Roxxy",
    category: "Nightlife",
    description: "Vibrant LGBTQ+ friendly bar known for music and drag shows.",
    googleMapsUrl: "https://www.google.com/maps?q=Roxxy+Madison+WI",
  },
  {
    id: 6,
    name: "Shamrock Bar and Grill",
    category: "Bar & Grill",
    description: "Casual LGBTQ+ friendly bar with pool tables and daily specials.",
    googleMapsUrl: "https://www.google.com/maps?q=Shamrock+Bar+and+Grill+Madison+WI",
  },
  {
    id: 7,
    name: "Woof's",
    category: "Sports Bar",
    description: "Madison's only LGBTQ+ sports bar with TVs, drinks, and themed nights.",
    googleMapsUrl: "https://www.google.com/maps?q=Woof's+Madison+WI",
  },
  {
    id: 8,
    name: "Dyke Dive",
    category: "Pop-Up / Event Series",
    description: "Queer pop-up events, dance parties, and safe spaces for femmes and dykes.",
    googleMapsUrl: "https://www.google.com/search?q=Dyke+Dive+Madison+WI",
  },
  {
    id: 9,
    name: "A Room of One’s Own",
    category: "Bookstore",
    description: "Queer- and woman-owned bookstore with inclusive titles and community events.",
    googleMapsUrl: "https://www.google.com/maps?q=A+Room+of+One's+Own+Madison+WI",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(PLACES.map((p) => p.category)))];

  const filtered = PLACES.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="p-4 space-y-6 max-w-5xl mx-auto">
      {/* 🌈 Title */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-red-500 via-orange-400 via-yellow-300 via-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
  The Pride Guide
</h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
      />

      {/* 🏷️ Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full border text-sm transition ${
              selectedCategory === category
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 📍 Resource Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((place) => (
          <div
            key={place.id}
            className="p-5 rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold">{place.name}</h2>
            <span className="inline-block mt-1 mb-2 px-2 py-1 text-xs font-semibold text-white bg-pink-500 rounded-full">
              {place.category}
            </span>
            <p className="text-sm text-gray-700">{place.description}</p>
            <a
              href={place.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm inline-block mt-2"
            >
              View on Google Maps
            </a>
          </div>
        ))}
      </section>

      {/* 🗺️ Map */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2 text-center">Madison Map</h2>
        <iframe
          title="Madison LGBTQ Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11739.724699291254!2d-89.4007!3d43.0731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806536d22941715%3A0x7a59dffb0c5e0b64!2sMadison%2C%20WI!5e0!3m2!1sen!2sus!4v1615917395101!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
