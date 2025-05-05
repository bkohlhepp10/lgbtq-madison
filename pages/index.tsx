import React, { useState } from "react";
import Head from "next/head";

const PLACES = [
  {
    id: 1,
    name: "OutReach LGBTQ+ Community Center",
    category: "Community",
    description: "Support services, community programs, and events.",
    googleMapsUrl:
      "https://www.google.com/maps?q=OutReach+LGBTQ+Community+Center+Madison+WI",
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
    description:
      "Trendy basement bar and lounge with DJ nights and an inclusive crowd.",
    googleMapsUrl: "https://www.google.com/maps?q=Sotto+Madison+WI",
  },
  {
    id: 4,
    name: "FIVE Nightclub",
    category: "Nightlife",
    description:
      "Popular LGBTQ+ dance club and event venue with theme nights.",
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
    description:
      "Casual LGBTQ+ friendly bar with pool tables and daily specials.",
    googleMapsUrl:
      "https://www.google.com/maps?q=Shamrock+Bar+and+Grill+Madison+WI",
  },
  {
    id: 7,
    name: "Woof's",
    category: "Sports Bar",
    description:
      "Madison's only LGBTQ+ sports bar with TVs, drinks, and themed nights.",
    googleMapsUrl: "https://www.google.com/maps?q=Woof's+Madison+WI",
  },
  {
    id: 8,
    name: "Dyke Dive",
    category: "Pop-Up / Event Series",
    description:
      "Queer pop-up events, dance parties, and safe spaces for femmes and dykes.",
    googleMapsUrl: "https://www.google.com/search?q=Dyke+Dive+Madison+WI",
  },
  {
    id: 9,
    name: "A Room of One’s Own",
    category: "Bookstore",
    description:
      "Queer- and woman-owned bookstore with inclusive titles and community events.",
    googleMapsUrl:
      "https://www.google.com/maps?q=A+Room+of+One's+Own+Madison+WI",
  },
  {
    id: 10,
    name: "The Rigby Pub & Grill",
    category: "Bar & Grill",
    description:
      "Laid-back LGBTQ+ friendly spot with food, drinks, and karaoke nights.",
    googleMapsUrl: "https://www.google.com/maps?q=The+Rigby+Pub+and+Grill+Madison+WI",
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
    <>
      <Head>
        <title>The Pride Guide</title>
      </Head>
      <main className="p-4 space-y-6 max-w-5xl mx-auto font-sans">
        <h1 className="text-4xl font-extrabold text-center space-x-1">
          <span className="text-red-500">T</span>
          <span className="text-orange-400">h</span>
          <span className="text-yellow-400">e</span>
          <span> </span>
          <span className="text-green-500">P</span>
          <span className="text-blue-500">r</span>
          <span className="text-purple-500">i</span>
          <span className="text-red-500">d</span>
          <span className="text-orange-400">e</span>
          <span> </span>
          <span className="text-yellow-400">G</span>
          <span className="text-green-500">u</span>
          <span className="text-blue-500">i</span>
          <span className="text-purple-500">d</span>
          <span className="text-red-500">e</span>
        </h1>
        <p className="text-center text-gray-500 text-sm mt-1">
          Discover queer-friendly spaces across Madison
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-4" />

        <section className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <input
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
          />

          <div className="flex flex-wrap gap-2 justify-center mt-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full border text-sm transition hover:scale-105 active:scale-95 transform duration-200 ${
                  selectedCategory === category
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((place) => (
              <div
                key={place.id}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:border-pink-400 transition-all duration-300 group"
              >
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 mb-1">
                  {place.name}
                </h2>
                <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold text-white bg-pink-500 rounded-full">
                  {place.category}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {place.description}
                </p>
                <a
                  href={place.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-pink-600 underline hover:text-pink-800"
                >
                  Take me there →
                </a>
              </div>
            ))}
          </section>
        </section>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-2 text-center">Madison Map</h2>
          <iframe
            title="Madison LGBTQ Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11739.724699291254!2d-89.385!3d43.069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806536d22941715%3A0x7a59dffb0c5e0b64!2sMadison%2C%20WI!5e0!3m2!1sen!2sus!4v1615917395101!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <footer className="text-center text-sm text-gray-400 mt-16">
          Built with Pride in Madison | © 2025 The Pride Guide
        </footer>
      </main>
    </>
  );
}
