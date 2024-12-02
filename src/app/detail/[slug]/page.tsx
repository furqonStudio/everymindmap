import FigmaFrame from '@/components/FigmaFrame'
import { branches } from '@/data/data'

export default async function DetailPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const slug = params.slug

  const branch = branches.find((b) => b.href.includes(slug))

  if (!branch) {
    return <div>Data tidak ditemukan untuk {slug}</div>
  }

  return (
    <div>
      <h1 className="p-4 absolute text-2xl font-bold mb-4 capitalize">
        {branch.name}
      </h1>
      <FigmaFrame src={branch?.figmaUrl || ''} />
    </div>
  )
}
