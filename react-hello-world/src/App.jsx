function App() {
  return (
    <main style={styles.container}>
      <h1 style={styles.glassText}>Hello World</h1>
    </main>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(140deg, #7fa9d8 0%, #9fc1e6 45%, #5681b4 100%)',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  glassText: {
    margin: 0,
    fontSize: 'clamp(4.5rem, 13vw, 9.5rem)',
    fontWeight: '700',
    fontFamily: '"SF Pro Rounded", "Arial Rounded MT Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-1.5px',
    textAlign: 'center',
    userSelect: 'none',
    color: 'rgba(255, 255, 255, 0.6)',
    WebkitTextStroke: '0.8px rgba(255, 255, 255, 0.5)',
    textShadow: `
      0 1px 1px rgba(255, 255, 255, 0.95),
      0 0 25px rgba(255, 255, 255, 0.4),
      0 10px 22px rgba(18, 48, 86, 0.22),
      0 20px 45px rgba(12, 32, 60, 0.15)
    `,
  },
};

export default App;