import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-400">{intro}</p>
      </header>
      {children && <div className="mt-12 sm:mt-12">{children}</div>}
    </Container>
  )
}
