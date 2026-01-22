export default function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to Our Application</h1>

        <p className="home-subtext">
          This is a demo application built with React Router, showcasing
          different routing capabilities and API integrations.
        </p>

        <p className="home-subtext">
          Use the sidebar navigation to explore different sections of the
          application:
        </p>

        <ul className="home-list">
          <li>
            Browse our <strong>Users</strong> directory with data from
            JSONPlaceholder
          </li>
          <li>
            Explore inspirational <strong>Quotes</strong> from the DummyJSON
            API
          </li>
          <li>
            Visit our <strong>Contact</strong> page to get in touch
          </li>
        </ul>

        <div className="home-info">
          <h3>Getting Started</h3>
          <p>
            Click on any link in the sidebar to navigate through the application
            and explore its features.
          </p>
        </div>
      </div>
    </div>
  );
}
