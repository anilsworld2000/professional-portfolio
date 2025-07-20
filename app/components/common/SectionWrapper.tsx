type SectionWrapperProps = {
  id: string
  className?: string
  children: React.ReactNode
}

export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 px-4 sm:px-8 md:px-16 ${className}`}>
      {children}
    </section>
  )
}
