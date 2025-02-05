import { EnrolledPartnerSchema, partnersQuerySchema } from '@/lib/zod/schemas/partners'

import { getProgramOrThrow } from '@/lib/api/programs/get-program-or-throw'
import { withWorkspace } from '@/lib/auth'
import { prisma } from '@dub/prisma-oppulence'
import { NextResponse } from 'next/server'
import { z } from 'zod'

// GET /api/programs/[programId]/partners - get all partners for a program
export const GET = withWorkspace(async ({ workspace, params, searchParams }) => {
  const { programId } = params
  const { status, country, search, ids, page, pageSize, sortBy, sortOrder } =
    partnersQuerySchema.parse(searchParams)

  const program = await getProgramOrThrow({
    workspaceId: workspace.id,
    programId,
  })

  const programEnrollments = await prisma.programEnrollment.findMany({
    where: {
      programId,
      ...(status && { status }),
      ...(country && { partner: { country } }),
      ...(search && { partner: { name: { contains: search } } }),
      ...(ids && {
        partnerId: {
          in: ids,
        },
      }),
    },
    include: {
      partner: true,
      link: true,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy:
      sortBy === 'createdAt'
        ? { [sortBy]: sortOrder }
        : {
            link: {
              [sortBy === 'earnings' ? 'saleAmount' : sortBy]: sortOrder,
            },
          },
  })

  const partners = programEnrollments.map(enrollment => ({
    ...enrollment.partner,
    ...enrollment,
    id: enrollment.partnerId,
    earnings:
      ((program.commissionType === 'percentage'
        ? enrollment.link?.saleAmount
        : enrollment.link?.sales) ?? 0) *
      (program.commissionAmount / 100),
  }))

  return NextResponse.json(z.array(EnrolledPartnerSchema).parse(partners))
})
