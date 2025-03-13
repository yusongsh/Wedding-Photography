import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-light">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-12 text-center">
            Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add portfolio items here */}
            <div className="aspect-square bg-dark/20 rounded-lg"></div>
            <div className="aspect-square bg-dark/20 rounded-lg"></div>
            <div className="aspect-square bg-dark/20 rounded-lg"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
