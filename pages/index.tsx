// pages/index.tsx
import React, { useState } from "react";

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

  const filtered = PLACES.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-pink-600">🌈 LGBTQ+ Madison Resources</h1>
      <input
        className="w-full p-2 border rounded"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((place) => (
          <div key={place.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-semibold">{place.name}</h2>
            <p className="text-sm text-gray-600">{place.category}</p>
            <p className="text-sm mt-2">{place.description}</p>
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
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Madison Map</h2>
        <iframe
          title="Madison Map"
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
