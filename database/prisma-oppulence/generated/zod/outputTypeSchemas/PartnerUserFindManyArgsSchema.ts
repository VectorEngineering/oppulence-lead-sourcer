import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserIncludeSchema } from '../inputTypeSchemas/PartnerUserIncludeSchema'
import { PartnerUserWhereInputSchema } from '../inputTypeSchemas/PartnerUserWhereInputSchema'
import { PartnerUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/PartnerUserOrderByWithRelationInputSchema'
import { PartnerUserWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerUserWhereUniqueInputSchema'
import { PartnerUserScalarFieldEnumSchema } from '../inputTypeSchemas/PartnerUserScalarFieldEnumSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { PartnerArgsSchema } from './PartnerArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PartnerUserSelectSchema: z.ZodType<Prisma.PartnerUserSelect> = z
    .object({
        id: z.boolean().optional(),
        role: z.boolean().optional(),
        userId: z.boolean().optional(),
        partnerId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional()
    })
    .strict()

export const PartnerUserFindManyArgsSchema: z.ZodType<Prisma.PartnerUserFindManyArgs> = z
    .object({
        select: PartnerUserSelectSchema.optional(),
        include: PartnerUserIncludeSchema.optional(),
        where: PartnerUserWhereInputSchema.optional(),
        orderBy: z.union([PartnerUserOrderByWithRelationInputSchema.array(), PartnerUserOrderByWithRelationInputSchema]).optional(),
        cursor: PartnerUserWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([PartnerUserScalarFieldEnumSchema, PartnerUserScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default PartnerUserFindManyArgsSchema
