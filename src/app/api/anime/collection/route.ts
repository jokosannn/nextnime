import { prisma } from '@/libs/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { user_email, anime_mal_id, anime_title, anime_image } = await request.json()
  const data = { user_email, anime_mal_id, anime_title, anime_image }
  const dataCollection = await prisma.animeCollection.findFirst({
    where: {
      anime_mal_id: anime_mal_id,
      user_email: user_email,
    },
  })
  if (dataCollection) {
    return NextResponse.json({ status: false, message: 'data ada di colections' })
  } else {
    const colections = await prisma.animeCollection.create({ data })
    if (!colections)
      return NextResponse.json({ status: false, message: 'gagal ditambahkan ke colections' })
    return NextResponse.json({ status: true, message: 'berhasil ditambahkan ke colections' })
  }
}
