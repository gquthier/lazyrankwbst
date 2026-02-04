import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
      <div className="absolute inset-0 object-cover">
        <Image
          alt="fond nuageux"
          src="/images/justice.png"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-76 -right-14 w-76 sm:top-48 sm:right-3 sm:w-92 md:top-48 md:right-0 md:w-100 lg:top-64 lg:right-12 lg:w-136">
        <Image
          alt="fond nuageux"
          src="/images/drone.png"
          width={1583}
          height={554}
          className="animate-hover"
        />
      </div>
      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
        <div className="">
          <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
            <p className="before:absolute before:top-0 before:right-full before:content-['“'] after:text-gray-900/70 after:content-['”']">
              <strong className="font-semibold">
                LazyRank a drastiquement réduit nos coûts d’acquisition en supprimant notre dépendance à Meta Ads.
              </strong>{" "}
              <span className="text-gray-900/70">
                En plus, la qualité des leads s’est nettement améliorée : nous recevons désormais des prospects bien plus qualifiés, qui viennent directement à nous, sans augmenter notre charge de travail.
              </span>
            </p>
          </blockquote>
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden bg-white/15 p-0.5 ring-1 ring-white/20">
            <Image
              alt="Mr. Théo Moret"
              src="/images/theo.jpg"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-base font-medium text-gray-900">
              Mr. Théo Moret
            </div>
            <div className="text-sm text-white drop-shadow-md">
              Co-Fondeur du logiciel Compaignon
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
