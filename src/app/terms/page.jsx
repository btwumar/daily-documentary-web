import Link from 'next/link';

export const metadata = { title: 'Terms of Service' };

export default function Terms() {
  return (
    <article className="document">
      <h1>Terms of Service</h1>
      <p>These terms apply to your use of the Daily Documentary Automation website.</p>
      <h2>Website use</h2>
      <p>The website provides information about the documentary production project. You may browse and share links to its pages. Use the site lawfully and avoid disrupting its operation or attempting unauthorized access.</p>
      <h2>Content and platforms</h2>
      <p>Rights to third-party material belong to its respective owners. Documentaries accessed through a social platform are also subject to that platform’s terms.</p>
      <h2>Accuracy and availability</h2>
      <p>Website content may change, and uninterrupted access and complete accuracy are not guaranteed.</p>
      <h2>Questions</h2>
      <p>See the <Link href="/contact">contact page</Link> for questions about these terms.</p>
    </article>
  );
}
