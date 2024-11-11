import "./index.css";

export default function Loading() {
  return (
    <main className="loading">
      <img
        className="loading__logo"
        src="/strajk.svg"
        alt="Strajk Bowling Logo"
      />
      <h1 className="loading__title">STRAJK</h1>
      <p className="loading__subtitle">BOWLING</p>
    </main>
  );
}
