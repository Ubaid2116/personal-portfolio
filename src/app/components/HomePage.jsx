import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="about" className="py-16">
          <h2>About</h2>
          <p>Content for the About section.</p>
        </section>

        <section id="projects" className="py-16">
          <h2>Projects</h2>
          <p>Content for the Projects section.</p>
        </section>

        <section id="contact" className="py-16">
          <h2>Contact</h2>
          <p>Content for the Contact section.</p>
        </section>
      </main>
    </>
  );
};

export default HomePage;
