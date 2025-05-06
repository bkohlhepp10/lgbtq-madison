import Head from "next/head";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources – Pride Guide</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">LGBTQ+ Resources</h1>
        <p className="text-gray-700 mb-6">
          A curated list of resources across campus, Madison, and beyond for queer and trans communities.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Campus Resources</h2>
            <ul className="list-disc list-inside text-gray-600">
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

          <div>
            <h2 className="text-xl font-semibold mb-2">Madison-Based Orgs</h2>
            <ul className="list-disc list-inside text-gray-600">
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

          <div>
            <h2 className="text-xl font-semibold mb-2">National Resources</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Trans Lifeline</strong> – Peer support for trans people: <a href="https://translifeline.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">translifeline.org</a></li>
              <li><strong>GLMA</strong> – LGBTQ+ healthcare directory and advocacy: <a href="https://glma.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">glma.org</a></li>
              <li><strong>National Center for Transgender Equality</strong>: <a href="https://transequality.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">transequality.org</a></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
