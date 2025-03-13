import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center text-light">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8">About Me</h1>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <p className="text-lg lg:text-xl mb-6">
            Welcome! I&apos;m a passionate wedding photographer dedicated to
            capturing your special moments.
          </p>
          {/* Add more content here */}
        </div>
      </main>
      <Footer />
    </>
  );
}
