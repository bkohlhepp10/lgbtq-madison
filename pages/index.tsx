import React, { useState } from "react";

// Dummy LGBTQ+ friendly places
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
    name: "Plan B Nightclub",
    category: "Nightlife",
    description: "Popular LGBTQ+ bar with drag shows and dancing.",
    googleMapsUrl: "https://www.google.com/maps?q=Plan+B+Madison+WI",
  },
  {
    id: 3,
    name: "Sex Out Loud - UW Madison",
    category: "Student Org",
    description: "Peer sex education group supporting LGBTQ+ health.",
    googleMapsUrl: "https://www.google.com/maps?q=Sex+Out+Loud+UW+Madison",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredPlaces = PLACES.filter(
    (place) =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-pink-600">🌈 LGBTQ+ Madison Resources</h1>

      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{place.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{place.category}</p>
            <p className="text-sm">{place.description}</p>
            <a
              href={place.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              View on Google Maps
            </a>
          </div>
        ))}
      </section>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Map of Madison</h2>
        <iframe
          title="Madison LGBTQ Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5202107154476!2d-89.4012304!3d43.073051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806536d22941715%3A0x7a59dffb0c5e0b64!2sMadison%2C%20WI!5e0!3m2!1sen!2sus!4v1615917395101!5m2!1sen!2sus"
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
