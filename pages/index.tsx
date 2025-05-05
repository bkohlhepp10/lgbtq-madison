import React, { useState } from "react";
import Head from "next/head";

const PLACES = [
  {
    id: 1,
    name: "OutReach LGBTQ+ Community Center",
    category: "Community",
    description: "Support services, community programs, and events (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=OutReach+LGBTQ+Community+Center+Madison+WI"
  },
  {
    id: 2,
    name: "Sex Out Loud - UW Madison",
    category: "Student Org",
    description: "Peer sex education group supporting LGBTQ+ health (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Sex+Out+Loud+UW+Madison"
  },
  {
    id: 3,
    name: "Sotto",
    category: "Nightlife",
    description: "Trendy basement bar and lounge with DJ nights and an inclusive crowd (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Sotto+Madison+WI"
  },
  {
    id: 4,
    name: "FIVE Nightclub",
    category: "Nightlife",
    description: "Popular LGBTQ+ dance club and event venue with theme nights (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=FIVE+Nightclub+Madison+WI"
  },
  {
    id: 5,
    name: "Roxxy",
    category: "Nightlife",
    description: "Vibrant LGBTQ+ friendly bar known for music and drag shows (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Roxxy+Madison+WI"
  },
  {
    id: 6,
    name: "Shamrock Bar and Grill",
    category: "Bar & Grill",
    description: "Casual LGBTQ+ friendly bar with pool tables and daily specials (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Shamrock+Bar+and+Grill+Madison+WI"
  },
  {
    id: 7,
    name: "Woof's",
    category: "Sports Bar",
    description: "Madison's only LGBTQ+ sports bar with TVs, drinks, and themed nights (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Woof's+Madison+WI"
  },
  {
    id: 8,
    name: "Dyke Dive",
    category: "Pop-Up / Event Series",
    description: "Queer pop-up events, dance parties, and safe spaces for femmes and dykes (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/search?q=Dyke+Dive+Madison+WI"
  },
  {
    id: 9,
    name: "A Room of One’s Own",
    category: "Bookstore",
    description: "Queer- and woman-owned bookstore with inclusive titles and community events (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=A+Room+of+One's+Own+Madison+WI"
  },
  {
    id: 10,
    name: "The Rigby Pub & Grill",
    category: "Bar & Grill",
    description: "Laid-back LGBTQ+ friendly spot with food, drinks, and karaoke nights (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=The+Rigby+Pub+and+Grill+Madison+WI"
  },
  {
    id: 11,
    name: "Mother Fool’s Coffeehouse",
    category: "Cafe",
    description: "Longtime queer-affirming café with vegan options and community events (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Mother+Fool's+Coffeehouse+Madison+WI"
  },
  {
    id: 12,
    name: "Leopold’s Books Bar Caffè",
    category: "Bookstore & Cafe",
    description: "Literary bar and café known for progressive events and LGBTQ+ friendly vibe (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Leopold's+Books+Bar+Caffè+Madison+WI"
  },
  {
    id: 13,
    name: "Daisy Café & Cupcakery",
    category: "Cafe",
    description: "LGBTQ+ affirming café with breakfast, brunch, and cupcakes (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Daisy+Cafe+and+Cupcakery+Madison+WI"
  },
  {
    id: 14,
    name: "Communication Madison",
    category: "Arts & Culture",
    description: "DIY and queer-centered venue with live music, art shows, and workshops (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Communication+Madison+WI"
  },
  {
    id: 15,
    name: "Majestic Theatre",
    category: "Venue",
    description: "Concert venue known for drag shows and LGBTQ+ friendly events (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Majestic+Theatre+Madison+WI"
  },
  {
    id: 16,
    name: "High Noon Saloon",
    category: "Venue",
    description: "Music venue with frequent queer-friendly shows and dance nights (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=High+Noon+Saloon+Madison+WI"
  },
  {
    id: 17,
    name: "Planned Parenthood Madison East",
    category: "Health",
    description: "LGBTQ+ inclusive reproductive and sexual health clinic (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Planned+Parenthood+Madison+WI"
  },
  {
    id: 18,
    name: "Brittingham Park",
    category: "Outdoor Space",
    description: "Popular hangout with queer-friendly picnics and events (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Brittingham+Park+Madison+WI"
  },
  {
    id: 19,
    name: "Wildewood",
    category: "Shop",
    description: "Wellness and plant shop known for queer community support (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Wildewood+Madison+WI"
  },
  {
    id: 20,
    name: "Ancora Café + Bakery",
    category: "Cafe",
    description: "Friendly café with LGBTQ+ staff and cozy spaces (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Ancora+Cafe+Madison+WI"
  }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(PLACES.map((p) => p.category)))];

  const filtered = PLACES.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>The Pride Guide</title>
      </Head>
      <main className="p-4 space-y-6 max-w-5xl mx-auto font-sans">
        <h1 className="text-4xl font-extrabold text-center">
          <span className="text-red-500">The Pride Guide</span>
        </h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full border ${
                selectedCategory === category ? "bg-pink-500 text-white" : "bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {filtered.map((place) => (
            <div key={place.id} className="border p-4 rounded shadow bg-white">
              <h2 className="text-lg font-bold">{place.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{place.description}</p>
              <a
                href={place.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 underline"
              >
                View on Google Maps
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}