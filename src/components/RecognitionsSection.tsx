import Image from "next/image";

export default function RecognitionsSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-16 lg:py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-[0.3em]">
            Official Recognition
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand-blue">
            Recognized & Affiliated By
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            S K Nursing College is recognized and affiliated by the statutory
            nursing education authorities, ensuring quality education and
            nationally accepted professional standards.
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">

          {/* MNC */}
          <div className="group bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 w-[260px] text-center hover:-translate-y-2">

            <div className="flex justify-center">
              <Image
                src="/mnc.svg"
                alt="Maharashtra Nursing Council"
                width={140}
                height={140}
                className="object-contain h-36 w-36"
              />
            </div>

            <h3 className="mt-6 font-bold text-lg text-brand-blue">
              Maharashtra Nursing Council
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Recognized by the Maharashtra Nursing Council for professional
              nursing education and academic excellence.
            </p>

          </div>

          {/* MSBNPE */}
          <div className="group bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 w-[260px] text-center hover:-translate-y-2">

            <div className="flex justify-center">
              <Image
                src="/msbnpe.svg"
                alt="MSBNPE"
                width={140}
                height={140}
                className="object-contain h-36 w-36"
              />
            </div>

            <h3 className="mt-6 font-bold text-lg text-brand-blue">
              MSBNPE
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Affiliated with the Maharashtra State Board of Nursing &
              Paramedical Education, Mumbai.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}