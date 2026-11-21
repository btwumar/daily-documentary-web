export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="title">
        <div className="hero-copy">
          <h1 id="title">Daily Documentary Automation</h1>
          <p>A project that researches stories and turns them into documentary videos.</p>
        </div>
      </section>
      <section className="workflow" aria-labelledby="workflow">
        <h2 id="workflow">From research to release</h2>
        <dl>
          <div><dt>Research</dt><dd>Gather source material and develop the story for each documentary.</dd></div>
          <div><dt>Production</dt><dd>Turn the research into a script, then assemble narration and visuals into a finished video.</dd></div>
          <div><dt>Distribution</dt><dd>Use authorized social-platform integrations to distribute finished documentaries through connected accounts.</dd></div>
        </dl>
      </section>
    </>
  );
}
