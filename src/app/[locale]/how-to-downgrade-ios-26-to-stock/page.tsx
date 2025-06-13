import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isEnglish = locale === "en";

  return {
    title: isEnglish
      ? "How to Downgrade iOS 26 to Stock - Step by Step Guide"
      : "iOS 26'dan Stock Sisteme Nasıl Dönülür - Adım Adım Rehber",
    description: isEnglish
      ? "Learn how to safely downgrade your iOS 26 device to stock firmware. Complete step-by-step guide with detailed instructions and precautions."
      : "iOS 26 cihazınızı stock firmware'e güvenli bir şekilde nasıl düşüreceğinizi öğrenin. Detaylı talimatlar ve önlemlerle adım adım rehber.",
    keywords: isEnglish
      ? "iOS 26 downgrade, stock iOS, iOS downgrade guide, iPhone firmware, iOS restore, iOS downgrade tutorial, iPhone system restore, iOS firmware downgrade"
      : "iOS 26 düşürme, stock iOS, iOS düşürme rehberi, iPhone firmware, iOS geri yükleme, iOS düşürme eğitimi, iPhone sistem geri yükleme, iOS firmware düşürme",
    alternates: {
      canonical: `https://smarty-studios.com/${locale}/how-to-downgrade-ios-26-to-stock`,
      languages: {
        en: "/en/how-to-downgrade-ios-26-to-stock",
        tr: "/tr/ios-26-stock-sistemine-nasil-donulur",
      },
    },
    openGraph: {
      title: isEnglish
        ? "How to Downgrade iOS 26 to Stock - Step by Step Guide"
        : "iOS 26'dan Stock Sisteme Nasıl Dönülür - Adım Adım Rehber",
      description: isEnglish
        ? "Learn how to safely downgrade your iOS 26 device to stock firmware. Complete step-by-step guide with detailed instructions and precautions."
        : "iOS 26 cihazınızı stock firmware'e güvenli bir şekilde nasıl düşüreceğinizi öğrenin. Detaylı talimatlar ve önlemlerle adım adım rehber.",
      type: "article",
      url: `https://smarty-studios.com/${locale}/how-to-downgrade-ios-26-to-stock`,
      images: [
        {
          url: "https://smarty-studios.com/images/ios-downgrade-guide.jpg",
          width: 1200,
          height: 630,
          alt: isEnglish ? "iOS Downgrade Guide" : "iOS Düşürme Rehberi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish
        ? "How to Downgrade iOS 26 to Stock - Step by Step Guide"
        : "iOS 26'dan Stock Sisteme Nasıl Dönülür - Adım Adım Rehber",
      description: isEnglish
        ? "Learn how to safely downgrade your iOS 26 device to stock firmware. Complete step-by-step guide with detailed instructions and precautions."
        : "iOS 26 cihazınızı stock firmware'e güvenli bir şekilde nasıl düşüreceğinizi öğrenin. Detaylı talimatlar ve önlemlerle adım adım rehber.",
      images: ["https://smarty-studios.com/images/ios-downgrade-guide.jpg"],
    },
  };
}

export default async function HowToDowngradeIOS26Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const isEnglish = locale === "en";

  const content = {
    title: isEnglish
      ? "How to Downgrade iOS 26 to Stock"
      : "iOS 26'dan Stock Sisteme Nasıl Dönülür",
    intro: isEnglish
      ? "This comprehensive guide will walk you through the process of downgrading your iOS 26 device to stock firmware safely and effectively."
      : "Bu kapsamlı rehber, iOS 26 cihazınızı stock firmware'e güvenli ve etkili bir şekilde düşürme sürecinde size adım adım yardımcı olacaktır.",
    prerequisites: {
      title: isEnglish ? "Prerequisites" : "Gereksinimler",
      items: isEnglish
        ? [
            "A computer with the latest version of iTunes or Finder (for macOS Catalina and later)",
            "USB cable compatible with your iOS device",
            "Stable internet connection",
            "Backup of your important data",
          ]
        : [
            "En son iTunes veya Finder (macOS Catalina ve sonrası için) sürümüne sahip bir bilgisayar",
            "iOS cihazınızla uyumlu bir USB kablosu",
            "Stabil internet bağlantısı",
            "Önemli verilerinizin yedeği",
          ],
    },
    steps: {
      title: isEnglish ? "Step-by-Step Guide" : "Adım Adım Rehber",
      items: isEnglish
        ? [
            {
              title: "Backup Your Data",
              description:
                "Before proceeding, ensure you have a complete backup of your device using iCloud or iTunes/Finder.",
            },
            {
              title: "Download Stock Firmware",
              description:
                "Download the appropriate stock firmware for your device model from Apple's servers.",
            },
            {
              title: "Enter Recovery Mode",
              description:
                "Connect your device to the computer and enter recovery mode by following the specific button combination for your device model.",
            },
            {
              title: "Restore Firmware",
              description:
                "Use iTunes/Finder to restore the downloaded firmware to your device.",
            },
          ]
        : [
            {
              title: "Verilerinizi Yedekleyin",
              description:
                "İşleme başlamadan önce, cihazınızın tam bir yedeğini iCloud veya iTunes/Finder kullanarak aldığınızdan emin olun.",
            },
            {
              title: "Stock Firmware'i İndirin",
              description:
                "Cihaz modeliniz için uygun stock firmware'i Apple'ın sunucularından indirin.",
            },
            {
              title: "Kurtarma Moduna Girin",
              description:
                "Cihazınızı bilgisayara bağlayın ve cihaz modelinize özel tuş kombinasyonunu kullanarak kurtarma moduna girin.",
            },
            {
              title: "Firmware'i Geri Yükleyin",
              description:
                "İndirilen firmware'i cihazınıza geri yüklemek için iTunes/Finder'ı kullanın.",
            },
          ],
    },
    notes: {
      title: isEnglish ? "Important Notes" : "Önemli Notlar",
      items: isEnglish
        ? [
            "Downgrading will erase all data on your device",
            "Make sure your device has sufficient battery life",
            "Do not disconnect your device during the process",
            "Some features may not be available in older iOS versions",
          ]
        : [
            "Düşürme işlemi cihazınızdaki tüm verileri silecektir",
            "Cihazınızın yeterli pil ömrüne sahip olduğundan emin olun",
            "İşlem sırasında cihazınızı bağlantıdan çıkarmayın",
            "Bazı özellikler eski iOS sürümlerinde kullanılamayabilir",
          ],
    },
    troubleshooting: {
      title: isEnglish ? "Troubleshooting" : "Sorun Giderme",
      intro: isEnglish
        ? "If you encounter any issues during the downgrade process:"
        : "Düşürme işlemi sırasında herhangi bir sorunla karşılaşırsanız:",
      items: isEnglish
        ? [
            "Ensure you're using the correct firmware for your device",
            "Try using a different USB cable or port",
            "Restart both your computer and iOS device",
            "Check your internet connection",
          ]
        : [
            "Cihazınız için doğru firmware'i kullandığınızdan emin olun",
            "Farklı bir USB kablosu veya port deneyin",
            "Hem bilgisayarınızı hem de iOS cihazınızı yeniden başlatın",
            "İnternet bağlantınızı kontrol edin",
          ],
    },
    ad: {
      title: isEnglish
        ? "Professional Web & Mobile Development Services"
        : "Profesyonel Web & Mobil Geliştirme Hizmetleri",
      description: isEnglish
        ? "Looking for professional web and mobile development services? Smarty Studios offers expert web development, mobile app development, and digital solutions. From responsive websites to native mobile apps, we deliver high-quality solutions tailored to your needs. Contact us today for a free consultation!"
        : "Profesyonel web ve mobil geliştirme hizmetleri mi arıyorsunuz? Smarty Studios, uzman web geliştirme, mobil uygulama geliştirme ve dijital çözümler sunmaktadır. Responsive web sitelerinden native mobil uygulamalara kadar, ihtiyaçlarınıza özel yüksek kaliteli çözümler sunuyoruz. Ücretsiz danışmanlık için hemen bizimle iletişime geçin!",
      cta: isEnglish ? "Get Started" : "Hemen Başlayın",
    },
  };

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl pt-24">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>

      <div className="prose prose-lg max-w-none">
        <p className="lead mb-8">{content.intro}</p>

        {/* Reklam Banner - Üst */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {content.ad.title}
          </h3>
          <p className="text-blue-700 mb-4">{content.ad.description}</p>
          <Link
            href="/estimate-project"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {content.ad.cta}
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {content.prerequisites.title}
          </h2>
          <ul className="list-disc pl-6">
            {content.prerequisites.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{content.steps.title}</h2>
          <ol className="list-decimal pl-6">
            {content.steps.items.map((item, index) => (
              <li key={index} className="mb-4">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Reklam Banner - Orta */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {content.ad.title}
          </h3>
          <p className="text-blue-700 mb-4">{content.ad.description}</p>
          <Link
            href="/estimate-project"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {content.ad.cta}
          </Link>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{content.notes.title}</h2>
          <ul className="list-disc pl-6">
            {content.notes.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {content.troubleshooting.title}
          </h2>
          <p>{content.troubleshooting.intro}</p>
          <ul className="list-disc pl-6">
            {content.troubleshooting.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Reklam Banner - Alt */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {content.ad.title}
          </h3>
          <p className="text-blue-700 mb-4">{content.ad.description}</p>
          <Link
            href="/estimate-project"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {content.ad.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
