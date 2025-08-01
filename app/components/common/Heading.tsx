type HeadingProps = {
  title: string
  titleClassName?: string
  subtitle?: string
  subTitleClassName?: string
}

export default function Heading({
  title,
  titleClassName = 'text-3xl font-bold text-gray-800',
  subtitle,
  subTitleClassName = 'text-gray-500'
}: HeadingProps)
{
  return (
    <div className="mb-6">
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subTitleClassName}>{subtitle}</p>}
    </div>
  )
}
