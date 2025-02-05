import { NextResponse } from 'next/server'
import { dub } from '@/lib/dub'
import { withSession } from '@/lib/auth'

export const GET = withSession(async ({ session }) => {
  const referralLinkId = session.user.referralLinkId

  if (!referralLinkId) {
    return NextResponse.json({ publicToken: null }, { status: 200 })
  }

  const { publicToken } = await dub.embedTokens.create({
    programId: referralLinkId,
  })

  return NextResponse.json({ publicToken })
})
