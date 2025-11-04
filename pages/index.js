import Image from "next/image";

export default function Home() {
  const products = Array.from({ length: 12 }).map((_, i) => ({
    name: `Uniden Model ${i + 1}`,
    price: 9999 + i * 500,
    features: ["Wireless", i % 2 === 0 ? "2 Line" : "Caller ID"],
    img: `/images/product-${(i % 3) + 1}.png`,
  }));

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">Uniden</a>
          <nav>
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#products" className="hover:text-blue-600">Products</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Uniden Telephones
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600">
              Reliable Communication, Japanese Excellence
            </h2>
            <p className="text-gray-700">
              Uniden is a globally recognized Japanese brand renowned for
              innovative, durable and high‑quality telecommunication devices.
              Trusted worldwide, Uniden telephones deliver clarity, precision
              and reliable performance that keeps teams and families connected.
            </p>
            <div className="flex gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition">
                Explore Products
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition">
                Bulk Orders
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[5/4] rounded-2xl shadow-lg ring-1 ring-gray-200 overflow-hidden">
              <Image src="/images/uniden-phone.png" alt="Uniden Telephone" width={800} height={600} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold">About Uniden Pakistan</h3>
          <p className="text-gray-700">
            Uniden is a Japanese brand with decades of engineering heritage. Now officially available in Pakistan via{" "}
            <strong>uniden.store</strong>, we provide genuine Uniden telephones and accessories with local availability and support.
            Choose a trusted source to experience crystal‑clear audio, reliable range and modern design.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">Official Pakistan Store</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Nationwide Availability</span>
            <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">Genuine Products</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.map((p, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-4 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-gray-100">
                  <Image src={p.img} width={500} height={375} alt={p.name} className="object-cover w-full h-full group-hover:scale-[1.03] transition" />
                </div>
                <h4 className="mt-4 font-semibold">{p.name}</h4>
                <p className="text-sm text-gray-600">Price: Rs. {p.price.toLocaleString()}</p>
                <p className="text-xs text-green-700 mt-1">Availability: In Stock</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <span key={f} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Special Discounts for Bulk Orders</h3>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Equipping a team, office or hotel? Get exclusive wholesale pricing and dedicated support for large orders.
            Reach us directly and we’ll tailor the best package for your needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/923001234567" className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition">
              WhatsApp Us
            </a>
            <a href="tel:+923001234567" className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-blue-600 text-blue-700 hover:bg-white transition">
              Call: +92 300 1234567
            </a>
            <a href="mailto:info@uniden.store" className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition">
              info@uniden.store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-2">
          <p>&copy; {new Date().getFullYear()} Uniden Pakistan — Official Website: <a className="underline hover:text-white" href="https://uniden.store">uniden.store</a></p>
          <p className="text-xs text-gray-400">Made with Next.js & TailwindCSS</p>
        </div>
      </footer>
    </main>
  );
}
