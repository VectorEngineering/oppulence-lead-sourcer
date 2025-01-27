import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerInviteIncludeSchema } from '../inputTypeSchemas/PartnerInviteIncludeSchema'
import { PartnerInviteWhereInputSchema } from '../inputTypeSchemas/PartnerInviteWhereInputSchema'
import { PartnerInviteOrderByWithRelationInputSchema } from '../inputTypeSchemas/PartnerInviteOrderByWithRelationInputSchema'
import { PartnerInviteWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerInviteWhereUniqueInputSchema'
import { PartnerInviteScalarFieldEnumSchema } from '../inputTypeSchemas/PartnerInviteScalarFieldEnumSchema'
import { PartnerArgsSchema } from './PartnerArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PartnerInviteSelectSchema: z.ZodType<Prisma.PartnerInviteSelect> = z
    .object({
        email: z.boolean().optional(),
        expires: z.boolean().optional(),
        partnerId: z.boolean().optional(),
        role: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional()
    })
    .strict()

export const PartnerInviteFindFirstArgsSchema: z.ZodType<Prisma.PartnerInviteFindFirstArgs> = z
    .object({
        select: PartnerInviteSelectSchema.optional(),
        include: PartnerInviteIncludeSchema.optional(),
        where: PartnerInviteWhereInputSchema.optional(),
        orderBy: z.union([PartnerInviteOrderByWithRelationInputSchema.array(), PartnerInviteOrderByWithRelationInputSchema]).optional(),
        cursor: PartnerInviteWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([PartnerInviteScalarFieldEnumSchema, PartnerInviteScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default PartnerInviteFindFirstArgsSchema
