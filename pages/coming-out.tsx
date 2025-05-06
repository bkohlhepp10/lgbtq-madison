import Head from "next/head";
import Link from "next/link";

export default function ComingOutHelp() {
  return (
    <>
      <Head>
        <title>Coming Out Help – Pride Guide</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Coming Out Help</h1>
        <p className="text-gray-700 mb-6">
          Whether you're exploring your identity or supporting someone else through the process,
          these resources offer guidance, encouragement, and support.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Support at UW–Madison</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Gender and Sexuality Campus Center (GSCC)</strong> – Support groups, peer mentors, and trained staff.
                <br />
                <a href="https://lgbt.wisc.edu/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  Visit GSCC Website
                </a>
              </li>
              <li>
                <strong>University Health Services (UHS)</strong> – Mental health services, gender-affirming care, and identity-affirming therapists.
                <br />
                <a href="https://www.uhs.wisc.edu/mental-health/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  Visit UHS Mental Health
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">National Resources</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>The Trevor Project</strong> – Crisis intervention and suicide prevention for LGBTQ+ youth.
                <br />
                <a href="https://www.thetrevorproject.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  thetrevorproject.org
                </a>
              </li>
              <li>
                <strong>PFLAG</strong> – Support for families, allies, and LGBTQ+ individuals.
                <br />
                <a href="https://pflag.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  pflag.org
                </a>
              </li>
              <li>
                <strong>GLAAD</strong> – LGBTQ+ media advocacy, representation, and educational resources.
                <br />
                <a href="https://glaad.org/" className="text-pink-600 underline" target="_blank" rel="noreferrer">
                  glaad.org
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
