import React from "react"

const stats = [
  {
    name: "Clients générés / mois",
    value: "+26%",
  },
  {
    name: "Plus de leads qualifiés",
    value: "2,7x",
  },
  {
    name: "Pour voir les premiers résultats SEO",
    value: "- de 60j",
  },
]

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto mt-16 w-full max-w-6xl px-3"
    >
      <dl className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:py-12">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="pl-6 text-center md:text-center lg:first:border-none">
              <dd className="inline-block bg-gradient-to-t from-orange-900 to-orange-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl dark:from-orange-700 dark:to-orange-400">
                {stat.value}
              </dd>
              <dt className="mt-1 text-gray-600 dark:text-gray-400">
                {stat.name}
              </dt>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </section>
  )
}
