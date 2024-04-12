import { prisma } from '@/libs/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { user_email, manga_mal_id, manga_title, manga_image } = await request.json()
  const data = { user_email, manga_mal_id, manga_title, manga_image }
  const dataCollection = await prisma.mangaCollection.findFirst({
    where: {
      manga_mal_id: manga_mal_id,
      user_email: user_email,
    },
  })
  if (dataCollection) {
    return NextResponse.json({ status: false, message: 'data ada di colections' })
  } else {
    const colections = await prisma.mangaCollection.create({ data })
    if (!colections)
      return NextResponse.json({ status: false, message: 'gagal ditambahkan ke colections' })
    return NextResponse.json({ status: true, message: 'berhasil ditambahkan ke colections' })
  }
}
