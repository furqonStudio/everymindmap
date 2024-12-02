import FigmaFrame from '@/components/FigmaFrame'
import { notFound } from 'next/navigation'

export default function DetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="p-4 absolute text-2xl font-bold mb-4 capitalize">
        {params.slug.replace(/-/g, ' ')}
      </h1>
      <FigmaFrame />
    </div>
  )
}
