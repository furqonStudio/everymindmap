import Image from 'next/image'
import React from 'react'

type CardMenuProps = {
  imageUrl?: string // Optional imageUrl, since it's not mandatory
  name: string
  content: number
}

export const CardMenu: React.FC<CardMenuProps> = ({
  imageUrl,
  name,
  content,
}) => {
  return (
    <div className="rounded-xl overflow-hidden w-48 border bg-white flex flex-col cursor-pointer hover:scale-[98%] transition-transform duration-500 ease-in-out">
      {imageUrl ? (
        <Image alt="image-card" src={imageUrl} width={500} height={500} />
      ) : (
        <div className="w-48 h-48 bg-red-500"></div>
      )}
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-lg font-bold tracking-tight leading-5 text-gray-900">
          {name}
        </h2>
        <p className="text-sm mt-2 text-gray-600 self-end">{content} cabang</p>
      </div>
    </div>
  )
}
