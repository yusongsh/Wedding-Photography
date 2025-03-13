import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center text-light">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8">Contact Me</h1>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-dark/20 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-lg lg:text-xl mb-6">
              Let&apos;s create something beautiful together. Get in touch to
              discuss your photography needs.
            </p>
            {/* Add contact form here */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
