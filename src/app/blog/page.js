import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-light">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-12 text-center">
            Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add blog posts here */}
            <div className="bg-dark/20 rounded-lg p-6">
              <div className="aspect-video bg-dark/40 rounded-lg mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">
                Latest Wedding Story
              </h2>
              <p className="text-light/80">
                A beautiful celebration of love at the heart of San Francisco...
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
