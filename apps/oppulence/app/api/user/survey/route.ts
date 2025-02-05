import { withSession } from '@/lib/auth'
import { prisma } from '@dub/prisma-oppulence'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const updateUserSourceSchema = z.object({
  source: z.string().optional(),
})

export const POST = withSession(async ({ req, session }) => {
  const { source } = await updateUserSourceSchema.parseAsync(await req.json())

  const user = await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      source: source,
    },
  })

  if (!user) {
    return new Response('User not found', { status: 404 })
  }

  return NextResponse.json(user)
})
