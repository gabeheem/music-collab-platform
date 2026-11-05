import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>GitMusic</h1>
      <p>Work on music together, keep track of changes, and share finished tracks.</p>
      <div className="page-links">
        <Link href="/repositories">View repositories</Link>
        <Link href="/explore">Explore music</Link>
      </div>
    </section>
  );
}
