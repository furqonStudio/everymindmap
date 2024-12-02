import { CardMenu } from '@/components/CardMenu'
import { branches } from '@/data/data'

export default function Home() {
  return (
    <div className="py-8">
      <div className="relative text-center w-fit m-auto ">
        <span
          className="absolute right-2 top-2 text-2xl rotate-12"
          aria-hidden="true"
        >
          💻
        </span>
        <span
          className="absolute left-2 top-2 text-2xl -rotate-12"
          aria-hidden="true"
        >
          🤓
        </span>

        <h1 className="text-4xl font-bold mb-6 tracking-tight">
          <span className="block">Cabang</span>
          <span className="block">Ilmu Komputer</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 md:mx-12 lg:mx-40 justify-center">
        {branches.map((branch) => (
          <CardMenu
            key={branch.id}
            href={branch.href}
            imageUrl={branch.imageUrl}
            name={branch.name}
            content={branch.content}
          />
        ))}
      </div>
    </div>
  )
}
