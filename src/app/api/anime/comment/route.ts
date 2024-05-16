import { prisma } from '@/libs/prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { user_email, user_image, anime_mal_id, anime_title, username, comment } = await request.json();
  const data = { user_email, user_image, anime_mal_id, anime_title, username, comment };

  const colections = await prisma.animeComment.create({ data });
  if (!colections) {
    return NextResponse.json({ status: false, message: 'gagal ditambahkan ke colections' });
  }

  return NextResponse.json({ status: true, message: 'berhasil ditambahkan ke colections' });
}
