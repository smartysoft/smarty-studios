import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Sayfa Bulunamadı | Smarty Studios",
  description: "Aradığınız sayfa bulunamadı. Ana sayfaya dönmek için tıklayın.",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-gray-900">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sayfa Bulunamadı
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
