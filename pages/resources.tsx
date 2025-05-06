// pages/resources.tsx

import Head from "next/head";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources – Pride Guide</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          <span className="text-red-500">R</span>
          <span className="text-orange-400">e</span>
          <span className="text-yellow-400">s</span>
          <span className="text-green-500">o</span>
          <span className="text-blue-500">u</span>
          <span className="text-purple-500">r</span>
          <span className="text-red-500">c</span>
          <span className="text-orange-400">e</span>
          <span className="text-yellow-400">s</span>
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          A curated list of resources across campus, Madison, and beyond for queer and trans communities.
        </p>

        <section className="space-y-10">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Campus Resources</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>GSCC</strong> – Programming, workshops, peer support, and identity-specific meetups. <br />
                <a href="https://lgbt.wisc.edu/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  lgbt.wisc.edu
                </a>
              </li>
              <li>
                <strong>UHS Gender Services</strong> – Hormone therapy, mental health, sexual health services. <br />
                <a href="https://www.uhs.wisc.edu/medical/trans-health/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  uhs.wisc.edu/trans-health
                </a>
              </li>
              <li>
                <strong>Sex Out Loud</strong> – Peer-led sexual wellness and consent education. <br />
                <a href="https://www.sexoutlouduw.com/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  sexoutlouduw.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Madison-Based Organizations</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>OutReach LGBTQ+ Community Center</strong> – Local advocacy, events, and counseling. <br />
                <a href="https://www.lgbtoutreach.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  lgbtoutreach.org
                </a>
              </li>
              <li>
                <strong>The Rainbow Project</strong> – LGBTQ+ affirming mental health services for children and families. <br />
                <a href="https://therainbowproject.net/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  therainbowproject.net
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Lifelines and National Resources</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Trans Lifeline</strong> – Peer support hotline run by and for trans people. <br />
                <a href="https://translifeline.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">translifeline.org</a>
              </li>
              <li>
                <strong>The Trevor Project</strong> – Crisis intervention and suicide prevention for LGBTQ+ youth. <br />
                <a href="https://www.thetrevorproject.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">thetrevorproject.org</a>
              </li>
              <li>
                <strong>GLMA</strong> – LGBTQ+ healthcare directory and advocacy. <br />
                <a href="https://glma.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">glma.org</a>
              </li>
              <li>
                <strong>National Center for Transgender Equality</strong> – Advocacy and policy resources for trans rights. <br />
                <a href="https://transequality.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">transequality.org</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
