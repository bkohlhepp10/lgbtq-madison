import React, { useState } from "react";
import Head from "next/head";
import { default as Link } from "next/link";

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
    name: "Sotto",
    category: "Nightlife",
    description: "Trendy basement bar and lounge with DJ nights and an inclusive crowd (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Sotto+Madison+WI"
  },
  {
    id: 3,
    name: "FIVE Nightclub",
    category: "Nightlife",
    description: "Popular LGBTQ+ dance club and event venue with theme nights (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=FIVE+Nightclub+Madison+WI"
  },
  {
    id: 4,
    name: "Roxxy",
    category: "Nightlife",
    description: "Vibrant LGBTQ+ friendly bar known for music and drag shows (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Roxxy+Madison+WI"
  },
  {
    id: 5,
    name: "Shamrock Bar and Grill",
    category: "Bar & Grill",
    description: "Casual LGBTQ+ friendly bar with pool tables and daily specials (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Shamrock+Bar+and+Grill+Madison+WI"
  },
  {
    id: 6,
    name: "Woof's",
    category: "Bar & Grill",
    description: "Madison's only LGBTQ+ sports bar with TVs, drinks, and themed nights (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Woof's+Madison+WI"
  },
  {
    id: 7,
    name: "Dyke Dive",
    category: "Pop-Up / Event Series",
    description: "Queer pop-up events, dance parties, and safe spaces for femmes and dykes (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/search?q=Dyke+Dive+Madison+WI"
  },
  {
    id: 8,
    name: "A Room of One’s Own",
    category: "Cafe",
    description: "Queer- and woman-owned bookstore with inclusive titles and community events (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=A+Room+of+One's+Own+Madison+WI"
  },
  {
    id: 9,
    name: "The Rigby Pub & Grill",
    category: "Bar & Grill",
    description: "Laid-back LGBTQ+ friendly spot with food, drinks, and karaoke nights (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=The+Rigby+Pub+and+Grill+Madison+WI"
  },
  {
    id: 10,
    name: "Mother Fool’s Coffeehouse",
    category: "Cafe",
    description: "Longtime queer-affirming café with vegan options and community events (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Mother+Fool's+Coffeehouse+Madison+WI"
  },
  {
    id: 11,
    name: "Leopold’s Books Bar Caffè",
    category: "Cafe",
    description: "Literary bar and café known for progressive events and LGBTQ+ friendly vibe (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Leopold's+Books+Bar+Caffè+Madison+WI"
  },
  {
    id: 12,
    name: "Daisy Café & Cupcakery",
    category: "Cafe",
    description: "LGBTQ+ affirming café with breakfast, brunch, and cupcakes (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Daisy+Cafe+and+Cupcakery+Madison+WI"
  },
  {
    id: 13,
    name: "Communication Madison",
    category: "Arts & Culture",
    description: "DIY and queer-centered venue with live music, art shows, and workshops (LGBTQ+ specific).",
    googleMapsUrl: "https://www.google.com/maps?q=Communication+Madison+WI"
  },
  {
    id: 14,
    name: "Majestic Theatre",
    category: "Venue",
    description: "Concert venue known for drag shows and LGBTQ+ friendly events (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Majestic+Theatre+Madison+WI"
  },
  {
    id: 15,
    name: "High Noon Saloon",
    category: "Venue",
    description: "Music venue with frequent queer-friendly shows and dance nights (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=High+Noon+Saloon+Madison+WI"
  },
  {
    id: 16,
    name: "Planned Parenthood Madison East",
    category: "Health",
    description: "LGBTQ+ inclusive reproductive and sexual health clinic (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Planned+Parenthood+Madison+WI"
  },
  {
    id: 17,
    name: "Brittingham Park",
    category: "Outdoor Space",
    description: "Popular hangout with queer-friendly picnics and events (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Brittingham+Park+Madison+WI"
  },
  {
    id: 18,
    name: "Wildewood",
    category: "Shop",
    description: "Wellness and plant shop known for queer community support (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Wildewood+Madison+WI"
  },
  {
    id: 19,
    name: "Ancora Café + Bakery",
    category: "Cafe",
    description: "Friendly café with LGBTQ+ staff and cozy spaces (LGBTQ+ accepting).",
    googleMapsUrl: "https://www.google.com/maps?q=Ancora+Cafe+Madison+WI"
  },
  {
    id: "gscc",
    name: "Gender and Sexuality Campus Center (GSCC)",
    category: "Campus Org",
    description: "Provides education, outreach, and advocacy for LGBTQ+ students at UW–Madison.",
    googleMapsUrl: "https://lgbt.wisc.edu/",
  },
  {
    id: "qtpoc",
    name: "Queer and Trans People of Color (QTPOC)",
    category: "Campus Org",
    description: "A space by and for queer and trans BIPOC students at UW–Madison.",
    googleMapsUrl: "https://lgbt.wisc.edu/identity-community/qtpoc/",
  },
  {
    id: "pride-society",
    name: "The Pride Society",
    category: "Campus Org",
    description: "Hosts queer events like Pride Prom; one of UW's oldest LGBTQ+ student groups.",
    googleMapsUrl: "https://www.dailycardinal.com/article/2024/06/an-lgbtq-students-guide-to-madison",
  },
  {
    id: "sex-out-loud",
    name: "Sex Out Loud",
    category: "Campus Org",
    description: "Peer-led org offering sex ed with a focus on pleasure, identity, and inclusion.",
    googleMapsUrl: "https://www.sexoutloud.org/",
  },
  {
    id: "uhs",
    name: "University Health Services (UHS)",
    category: "Health",
    description: "Offers gender-affirming care, therapy, and trans health services for students.",
    googleMapsUrl: "https://www.google.com/maps/place/University+Health+Services/@43.074722,-89.395267,17z/",
  },
  {
    id: "path-clinic",
    name: "PATH Clinic",
    category: "Health",
    description: "Serves gender-variant children and adolescents with affirming medical care.",
    googleMapsUrl: "https://www.uwhealth.org/services/gender-services",
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
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>The Pride Guide</title>
      </Head>
      <main className="p-4 space-y-6 max-w-5xl mx-auto font-sans">
        <nav className="flex justify-center flex-wrap gap-4 text-sm text-pink-600 font-medium mb-6">
          <Link href="/">Places</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/coming-out">Coming Out Help</Link>
          <Link href="/safe-map">Safe Space Map</Link>
          <Link href="/suggest">Suggest a Place</Link>
        </nav>

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
          Built with Pride in Madison by Bennett Kohlhepp | © 2025 The Pride Guide
        </footer>
      </main>
    </>
  );
}
