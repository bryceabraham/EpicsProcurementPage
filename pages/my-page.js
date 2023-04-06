import React from 'react';

export default function MyPage() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h1>My Project</h1>
          <a href="#">Login</a>
        </nav>
        <nav className="subnav">
          <a href="#">Projects</a>
          <a href="#">Users</a>
          <a href="#">Reports</a>
        </nav>
      </header>
      <main>
        <div className="projects-container">
          <div className="project-card">
            <h2>Project Title</h2>
            <div className="details">
              <span className="request-number">#12345</span>
              <span className="date-requested">01/01/2023</span>
              <span className="budget">$1,000</span>
              <a className="view-request" href="#">
                View Request
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
