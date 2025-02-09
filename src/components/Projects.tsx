'use client'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import calendar1 from '@/images/photos/calendar1-portrait.png'
import calendar2 from '@/images/photos/calendar2-portrait.png'
import calendar3 from '@/images/photos/calendar3-portrait.png'
import web3pal5 from '@/images/photos/web3pal5.png'

const AmiusProjects = [
  {
    title: 'Trade Management Tool',
    description: 'OTC structures, futures & options',
  },
  {
    title: 'OTC Pricing Tool',
    description: 'Constructing complicated OTC structures',
  },
  {
    title: ' Portfolio Management Tool',
    description: 'Risk management, with ability to execute trades',
  },
  {
    title: 'Order Management System',
    description: 'Manage exchange orders',
  },
  {
    title: 'Static Data Editing Tool ',
    description: 'Large complex forms using React Hook Form',
  },
]

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <p className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Professional Work
      </p>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        The majority of my work over the last 2 years has been in a professional
        capacity which I can’t share! It’s tucked away in private GitLab repo,
        but see below for some of the key things I've helped to design and
        build.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 py-6">
        {AmiusProjects.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-200 p-6 dark:border-zinc-700/40 dark:bg-zinc-800"
            >
              <p className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {project.title}
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          )
        })}
      </div>

      <p className="pt-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Shared Calendar
      </p>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Here are a few snaps of a shared calendar I built so that my friends and
        I could be more organised and less flaky when organising group events.
        Built with React, TypeScript and TanStack Query. Uses InstantDB for
        Backend and Database.
      </p>
      <div className="flex items-center justify-center gap-4 py-6">
        <Image src={calendar2} alt="" className="w-75" unoptimized />
        <Image src={calendar3} alt="" className="w-75" unoptimized />
        <Image src={calendar1} alt="" className="w-75" unoptimized />
      </div>

      <p className="pt-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Web3Pal
      </p>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        When I was self-teaching, I partnered up with a crypto capital raising
        firm and we tried to build a solution to a common problem in the
        industry. Built with React / Next.Js & TypeScript.
      </p>
      <div className="flex items-center justify-center gap-4 py-6">
        <Image src={web3pal5} alt="" className="rounded-lg" unoptimized />
      </div>
    </SimpleLayout>
  )
}
