export const metadata = { title: 'Contact' };

export default function Contact() {
  const configuredEmail = process.env.CONTACT_EMAIL?.trim();
  const email = /^[A-Za-z0-9._+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/.test(configuredEmail ?? '')
    ? configuredEmail
    : null;

  return (
    <article className="document">
      <h1>Contact</h1>
      <p>For project inquiries, documentary corrections, or questions about privacy and terms.</p>
      {email ? <p><a href={`mailto:${encodeURIComponent(email).replace('%40', '@')}`}>{email}</a></p> : <p>A public contact email has yet to be configured.</p>}
    </article>
  );
}
