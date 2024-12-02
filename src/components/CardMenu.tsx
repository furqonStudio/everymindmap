import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardMenuProps = {
  imageUrl?: string // Optional imageUrl, since it's not mandatory
  name: string
  content: number
  href: string // Add href to specify the link destination
}

export const CardMenu: React.FC<CardMenuProps> = ({
  imageUrl,
  name,
  content,
  href,
}) => {
  return (
    <Link
      href={href}
      className="rounded-xl overflow-hidden w-40 md:w-48 border bg-white flex flex-col cursor-pointer hover:scale-[98%] transition-transform duration-500 ease-in-out"
    >
      {imageUrl ? (
        <Image alt="image-card" src={imageUrl} width={500} height={500} />
      ) : (
        <div className="w-48 h-48  bg-red-500"></div>
      )}
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="md:text-lg font-bold tracking-tight leading-5 md:leading-5 text-gray-900">
          {name}
        </h2>
        <p className="text-xs md:text-sm mt-2 text-gray-600 self-end">
          {content} cabang
        </p>
      </div>
    </Link>
  )
}
