import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <div className="text-2xl font-bold text-gray-800">Uniden</div>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* First Block */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-50">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Uniden Telephones</h1>
          <h2 className="text-xl text-gray-600">Reliable Communication, Japanese Excellence</h2>
          <p className="text-gray-700">
            Uniden is a globally recognized Japanese brand known for producing innovative, durable, and high-quality telecommunication devices. Trusted worldwide, Uniden telephones deliver clarity, design precision, and reliability that connect people effortlessly.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image src="/images/uniden-phone.png" alt="Uniden Telephone" width={500} height={400} />
        </div>
      </section>

      {/* Second Block */}
      <section id="about" className="px-10 py-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Uniden Pakistan</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Uniden, a renowned Japanese brand, is now officially available in Pakistan. Through <strong>uniden.store</strong>, we offer a trusted source for authentic Uniden telephones and accessories. Experience crystal-clear communication and modern design with official Uniden products in Pakistan.
        </p>
      </section>

      {/* Third Block: Products */}
      <section id="products" className="px-10 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-4 text-center hover:shadow-lg transition">
              <Image src={`/images/product-${i + 1}.png`} alt={`Uniden Product ${i + 1}`} width={200} height={150} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-3">Uniden Model {i + 1}</h3>
              <p className="text-gray-600">Price: Rs. {9999 + i * 500}</p>
              <p className="text-green-600 text-sm">Availability: In Stock</p>
              <div className="mt-2 flex justify-center space-x-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Wireless</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">2 Line</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fourth Block: Bulk Orders */}
      <section id="contact" className="px-10 py-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Discounts for Bulk Orders</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Looking to order Uniden telephones in bulk for your business or organization? We offer exclusive discounts and dedicated support for wholesale clients.
        </p>
        <a href="https://wa.me/923001234567" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us on WhatsApp
        </a>
        <p className="mt-4 text-gray-600">Phone: +92 300 1234567 | Email: info@uniden.store</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Uniden Pakistan. All rights reserved.</p>
        <p className="text-sm text-gray-400">Official Website: <a href="https://uniden.store" className="underline">uniden.store</a></p>
      </footer>
    </main>
  );
}
