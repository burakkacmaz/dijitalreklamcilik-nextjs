"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.from(galleryRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(featuresRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    });
  });

  useGSAP(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const sections = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${container.offsetWidth}`,
        },
      });
    }
  });

  return (
    <>
      <header ref={headerRef} className="bg-blue-600 text-white text-center py-16 flex items-center justify-center flex-col left-0 right-0 top-0">
        <h1 className="text-5xl font-bold">Dijital Reklamcılık</h1>
        <p className="mt-4 text-xl">Dijital dünyada var olmanın en iyi yolu!</p>
      </header>

      <section ref={galleryRef} className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Reklamları" className="w-auto h-[150px]" />
              <p className="font-bold mt-2">Instagram</p>
            </div>
            <div className="text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Reklamları" className="w-auto h-[150px]" />
              <p className="font-bold mt-2">Facebook</p>
            </div>
            <div className="text-center">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tiktok-color-icon.png" alt="TikTok Reklamları" className="w-auto h-[150px]" />
              <p className="font-bold mt-2">Tiktok</p>
            </div>
            <div className="text-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/480px-Google_Ads_logo.svg.png" alt="Google Ads" className="w-auto h-[150px]" />
              <p className="font-bold mt-2">Google Ads</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-16 bg-white border-b-2 border-t-2">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 border-b-2">Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2921/2921145.png" alt="Hedef Kitle Analizi" className="mb-4" style={{ width: "100px", height: "100px" }} />
              <h3 className="text-xl font-bold mb-2">Hedef Kitle Analizi</h3>
              <p>Doğru hedef kitleye ulaşmak, reklam stratejilerinin başarısının anahtarıdır. Biz de markanız için en uygun hedef kitleyi belirleyerek etkili stratejiler geliştiriyoruz.</p>{" "}
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" alt="Yaratıcı İçerik Üretimi" className="mb-4" style={{ width: "100px", height: "100px" }} />
              <h3 className="text-xl font-bold mb-2">Yaratıcı İçerik Üretimi</h3>
              <p>Markanızı öne çıkaracak, dikkat çekici ve özgün içerikler üretiyoruz. Böylece markanızın dijital dünyada fark edilmesini sağlıyoruz.</p>{" "}
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1680/1680804.png" alt="Performans Takibi" className="mb-4" style={{ width: "100px", height: "100px" }} />
              <h3 className="text-xl font-bold mb-2">Performans Takibi</h3>
              <p>Kampanyalarınızın performansını anlık olarak takip ederiz. Böylece kampanyaları optimize ederek en iyi sonuçları elde ederiz.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1621/1621627.png" alt="Optimizasyon" className="mb-4" style={{ width: "100px", height: "100px" }} />
              <h3 className="text-xl font-bold mb-2">Optimizasyon</h3>
              <p>Kampanyalarınızı sürekli optimize ederek verimliliği arttırıyoruz. Bu sayede yatırım getirinizi en üst düzeye çıkarıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <div ref={containerRef} className="flex min-h-screen overflow-hidden">
        <section className="panel bg-red-500 flex-shrink-0 w-screen h-screen flex items-center justify-center text-black p-8">
          <div className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921080.png" alt="Strateji" className="w-[200px] h-[200px] mr-8" />
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">Etkili Stratejiler</h1>
              <p>Markanız için en uygun stratejileri geliştiriyoruz. Hedef kitle analizinden yaratıcı içerik üretimine, performans takibinden optimizasyona kadar her adımınızda yanınızdayız.</p>
            </div>
          </div>
        </section>
        <section className="panel bg-green-500 flex-shrink-0 w-screen h-screen flex items-center justify-center text-white p-8">
          <div className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3616/3616772.png" alt="Yaratıcılık" className="w-[200px] h-[200px] mr-8" />
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">Yaratıcı Çözümler</h1>
              <p>Markanızı ön plana çıkarmak için yaratıcı ve inovatif çözümler sunuyoruz. Müşterilerinizin dikkatini çekecek ve markanızı unutulmaz kılacak içerikler üretiyoruz.</p>
            </div>
          </div>
        </section>
        <section className="panel bg-blue-500 flex-shrink-0 w-screen h-screen flex items-center justify-center text-white p-8">
          <div className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1979/1979636.png" alt="Sonuç Odaklı" className="w-[200px] h-[200px] mr-8" />
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">Sonuç Odaklı Yaklaşım</h1>
              <p>Reklam kampanyalarınızın performansını sürekli izler ve optimize ederiz. Bu sayede yatırımınızın karşılığını en yüksek düzeyde almanızı sağlarız.</p>
            </div>
          </div>
        </section>
        <section className="panel bg-yellow-500 flex-shrink-0 w-screen h-screen flex items-center justify-center text-white p-8">
          <div className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3176/3176297.png" alt="Başarı" className="w-[200px] h-[200px] mr-8" />
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">Başarı Hikayelerimiz</h1>
              <p>Başarıyla tamamladığımız projelerimizle gurur duyuyoruz. Müşterilerimize ilham verecek ve markanızın potansiyelini gösterecek başarı hikayelerimize göz atın.</p>
            </div>
          </div>
        </section>
      </div>

      <section ref={ctaRef} className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Bize Katılın!</h2>
        <p className="mb-8">Adres: Örnek Mah. Reklam Cad. No: 123, İstanbul</p>
        <p className="mb-8">E-posta: info@dijitalreklam.com</p>
        <p className="mb-8">Telefon: +90 123 456 7890</p>
        <p className="mb-8">En iyi ürün deneyimini yaşamak için bize katılın!</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">Başvur</button>
      </section>
    </>
  );
}
