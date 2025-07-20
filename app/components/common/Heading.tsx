type HeadingProps = {
  title: string
  subtitle?: string
}

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
    </div>
  )
}
