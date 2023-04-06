import React from "react";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>UTD Procurement Manager</h1>
          <a className="logout" href="#">Log Out</a>
        </nav>
        <nav className="subnav">
          <a href="#">Orders</a>
          <a href="#">Order History</a>
          <a href="#">Project Updates</a>
        </nav>
      </header>
      <main>
        <div className="projects-container">
          <h2>Project 1</h2>
          <div className="project-card">
            <div className="details">
              <div className="detail-item">
                <span className="label">Request Number</span>
                <span className="value">#1</span>
              </div>
              <div className="detail-item">
                <span className="label">Date Requested</span>
                <span className="value">01/01/2023</span>
              </div>
              <div className="detail-item">
                <span className="label">Date Needed</span>
                <span className="value">01/08/2023</span>
              </div>
              <div className="detail-item">
                <span className="label">Order Total</span>
                <span className="value">$200</span>
              </div>
              <div className="detail-item">
                <span className="label">Budget Used/Total</span>
                <span className="value">$300 / $500</span>
              </div>
            </div>
            <div className="actions">
              <a href="#" className="view-request">View Request</a>
              <button className="reject">REJECT</button>
              <button className="approve">APPROVE</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
