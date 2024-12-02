import { CardMenu } from '@/components/CardMenu'

export default function Home() {
  const cabangs = [
    {
      id: 1,
      imageUrl: '/teori-komputer.webp',
      href: '/detail/teori-komputer',
      name: 'Teori Komputer',
      content: 8,
    },
    {
      id: 2,
      imageUrl: '/sistem-komputer.webp',
      href: '/detail/sistem-komputer',
      name: 'Sistem Komputer',
      content: 8,
    },
    {
      id: 3,
      imageUrl: '/algoritma-dan-struktur-data.webp',
      href: '/detail/algoritma-dan-struktur-data',
      name: 'Algoritma dan Struktur Data',
      content: 8,
    },
    {
      id: 4,
      imageUrl: '/kecerdasan-buatan.webp',
      href: '/detail/kecerdasan-buatan',
      name: 'Kecerdasan Buatan (AI)',
      content: 8,
    },
    {
      id: 5,
      imageUrl: '/rekayasa-perangkat-lunak.webp',
      href: '/detail/rekayasa-perangkat-lunak',
      name: 'Rekayasa Perangkat Lunak',
      content: 8,
    },
    {
      id: 6,
      imageUrl: '/basis-data.webp',
      href: '/detail/basis-data',
      name: 'Basis Data',
      content: 8,
    },
    {
      id: 7,
      imageUrl: '/keamanan-komputer.webp',
      href: '/detail/keamanan-komputer',
      name: 'Keamanan Komputer',
      content: 8,
    },
    {
      id: 8,
      imageUrl: '/komputasi-pararel-dan-terdistribusi.webp',
      href: '/detail/komputasi-pararel-dan-terdistribusi',
      name: 'Komputasi Paralel dan Terdistribusi',
      content: 8,
    },
    {
      id: 9,
      imageUrl: '/pengolahan-citra-dan-video.webp',
      href: '/detail/pengolahan-citra-dan-video',
      name: 'Pengolahan Citra dan Video',
      content: 8,
    },
    {
      id: 10,
      imageUrl: '/pengembangan-web-dan-mobile.webp',
      href: '/detail/pengembangan-web-dan-mobile',
      name: 'Pengembangan Web dan Mobile',
      content: 8,
    },
  ]

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

        {/* Judul Utama */}
        <h1 className="text-4xl font-bold mb-6 tracking-tight">
          <span className="block">Cabang</span>
          <span className="block">Ilmu Komputer</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 mx-28 justify-center">
        {cabangs.map((cabang) => (
          <CardMenu
            key={cabang.id}
            href={cabang.href}
            imageUrl={cabang.imageUrl}
            name={cabang.name}
            content={cabang.content}
          />
        ))}
      </div>
    </div>
  )
}
