import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      {/* Push hero section below fixed navbar */}
      <div className="pt-24">
        <section className="min-h-screen bg-primary flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-orange max-w-4xl">
            Professional Hygiene & Cleaning Solutions You Can Trust
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Creating safe, clean, and healthy environments for businesses,
            institutions, and residences since 2016.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90">
              Request a Quote
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary">
              View Services
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
