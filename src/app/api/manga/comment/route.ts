import { prisma } from '@/libs/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { user_email, user_image, manga_mal_id, manga_title, username, comment } =
    await request.json()
  const data = { user_email, user_image, manga_mal_id, manga_title, username, comment }
  const colections = await prisma.mangaComment.create({ data })
  if (!colections)
    return NextResponse.json({ status: false, message: 'gagal ditambahkan ke colections' })
  return NextResponse.json({ status: true, message: 'berhasil ditambahkan ke colections' })
}
