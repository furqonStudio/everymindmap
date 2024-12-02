import FigmaFrame from '@/components/FigmaFrame'

export default async function DetailPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  return (
    <div>
      <h1 className="p-4 absolute text-2xl font-bold mb-4 capitalize">
        {params.slug.replace(/-/g, ' ')}
      </h1>
      <FigmaFrame />
    </div>
  )
}
