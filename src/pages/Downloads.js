import React from "react";

const styles = {
  page: {
    maxWidth: 1000,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#222",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    margin: 0,
  },
  subtitle: {
    margin: "6px 0 0",
    color: "#666",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
    marginTop: 20,
  },
  tile: {
    border: "1px solid #e6e6e6",
    borderRadius: 8,
    padding: 16,
    background: "#fff",
    boxShadow: "0 2px 6px rgba(12,20,30,0.04)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 170,
  },
  tileHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  fileIcon: {
    width: 46,
    height: 46,
    borderRadius: 6,
    background: "#f4f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    color: "#8b2a5b",
  },
  tileTitle: {
    fontSize: 16,
    margin: 0,
  },
  tileDesc: {
    color: "#555",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 1.35,
  },
  actions: {
    display: "flex",
    gap: 8,
    marginTop: 12,
  },
  button: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid transparent",
    background: "#8b2a5b",
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
  },
  secondary: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid #d9d9d9",
    background: "#fff",
    color: "#333",
    textDecoration: "none",
    fontSize: 14,
  },
  meta: {
    marginTop: 8,
    color: "#888",
    fontSize: 13,
  },
};

const documents = [
  {
    id: "leisure-17-big-weekend-2025-sis-v7",
    title: "Leisure 17 — Big Weekend 2025 Sailing Instructions (v7)",
    description: "Official Sailing Instructions for the Leisure 17 Big Weekend 2025. Contains start times, courses, safety notes and race procedures. (PDF)",
    href: "/docs/Leisure-17-Big-Weekend-2025-SIs-v7.pdf",
    filename: "Leisure-17-Big-Weekend-2025-SIs-v7.pdf",
    type: "PDF",
  },
  {
    id: "club-racing-courses-may-2025",
    title: "Club Racing Courses — May 2025",
    description: "Course codes and diagrams for club racing. Quick reference for course selection by wind direction and shortened-course options. (Image / printable)",
    href: "/docs/Club-Racing-Courses-May-2025.pdf",
    filename: "Club-Racing-Courses-May-2025.pdf",
    type: "PDF",
  },
];

export default function Downloads() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Downloads</h1>
        <p style={styles.subtitle}>Download event documents, sailing instructions and quick-reference course sheets. Files will open in a new tab and can be saved locally.</p>
      </header>

      <section style={styles.grid} aria-live="polite">
        {documents.map((doc) => (
          <article key={doc.id} style={styles.tile}>
            <div>
              <div style={styles.tileHeader}>
                <div style={styles.fileIcon} aria-hidden>{doc.type === "PDF" ? "PDF" : "DOC"}</div>
                <div>
                  <h3 style={styles.tileTitle}>{doc.title}</h3>
                  <div style={styles.meta}>{doc.filename}</div>
                </div>
              </div>

              <p style={styles.tileDesc}>{doc.description}</p>
            </div>

            <div style={styles.actions}>
              <a style={styles.button} href={doc.href} download={doc.filename} rel="noopener noreferrer" target="_blank" aria-label={`Download ${doc.title}`}>Download</a>
              <a style={styles.secondary} href={doc.href} rel="noopener noreferrer" target="_blank" aria-label={`Open ${doc.title} in a new tab`}>Open</a>
            </div>
          </article>
        ))}
      </section>

      <footer style={{ marginTop: 28, color: "#666", fontSize: 13 }}>
        Tip: Place the referenced files under your static assets directory (for example /public/docs/) so the links work as expected.
      </footer>
    </main>
  );
}