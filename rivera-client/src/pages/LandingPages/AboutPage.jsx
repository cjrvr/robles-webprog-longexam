function AboutPage() {
  return (
    <main className="bg-[#fffaf7] min-h-screen">
      <section className="bg-black text-white py-24 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-500 uppercase tracking-[0.4em] text-sm mb-4">
            About Lib
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Luxury Beauty Redefined
          </h1>

          <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
            Lib is a luxury-inspired beauty brand focused on elegant makeup
            essentials designed for confidence, sophistication, and timeless
            beauty. Our products combine modern glam with premium-inspired
            aesthetics to create looks that feel effortlessly luxurious.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-10 border border-neutral-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Elegant Design
            </h2>

            <p className="text-neutral-600 leading-7">
              Every product is styled with a sleek and refined luxury-inspired
              aesthetic that matches modern beauty trends.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-neutral-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Premium Feel
            </h2>

            <p className="text-neutral-600 leading-7">
              Lib focuses on elegant textures, timeless shades, and polished
              beauty essentials for everyday glam and special occasions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-neutral-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Modern Glam
            </h2>

            <p className="text-neutral-600 leading-7">
              Inspired by luxury makeup brands, our collection helps create
              clean, classy, and confident makeup looks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;