import Link from 'next/link';

export const metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return (
    <article className="document">
      <h1>Privacy Policy</h1>
      <p>This policy describes how the Daily Documentary Automation website handles visitor information.</p>
      <h2>Website visits</h2>
      <p>The site has no visitor accounts, forms, analytics scripts, or advertising trackers. Vercel hosts the site and may process standard request information, such as IP addresses and browser details, to deliver and secure it.</p>
      <h2>Email correspondence</h2>
      <p>If you contact the project by email, your message and email address are available for responding to your inquiry. Include only the information needed for your inquiry.</p>
      <h2>Social-platform integrations</h2>
      <p>The project uses integrations with authorization from the account holder. This website does not ask visitors to connect a social account or provide social-platform credentials. The relevant platform’s privacy policy applies when you use that platform.</p>
      <h2>Questions</h2>
      <p>See the <Link href="/contact">contact page</Link> for privacy inquiries.</p>
    </article>
  );
}
