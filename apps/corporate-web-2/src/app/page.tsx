import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      {/* Logo Section */}
      <div className="mb-16 flex items-center gap-4">
        {/* Abstract Graphic */}
        <div className="w-16 h-16 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-700 rounded-lg transform rotate-12 shadow-2xl"></div>

        {/* Text "SMARTY" */}
        <div className="text-6xl font-bold tracking-wider text-white">
          SMARTY
        </div>

        {/* Dot */}
        <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
      </div>

      {/* Coming Soon Text */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          COMING SOON
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Yeni bir dijital deneyim için hazırlanıyoruz. Çok yakında olacağız.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-12">
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full animate-pulse"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className="text-center text-gray-400 mt-2 text-sm">
          Geliştirme: %75
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Smarty Studios. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
}
