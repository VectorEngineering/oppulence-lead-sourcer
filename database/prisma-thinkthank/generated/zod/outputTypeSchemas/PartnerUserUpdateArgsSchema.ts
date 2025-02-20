import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserIncludeSchema } from '../inputTypeSchemas/PartnerUserIncludeSchema'
import { PartnerUserUpdateInputSchema } from '../inputTypeSchemas/PartnerUserUpdateInputSchema'
import { PartnerUserUncheckedUpdateInputSchema } from '../inputTypeSchemas/PartnerUserUncheckedUpdateInputSchema'
import { PartnerUserWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerUserWhereUniqueInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'
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

export const PartnerUserUpdateArgsSchema: z.ZodType<Prisma.PartnerUserUpdateArgs> = z
    .object({
        select: PartnerUserSelectSchema.optional(),
        include: PartnerUserIncludeSchema.optional(),
        data: z.union([PartnerUserUpdateInputSchema, PartnerUserUncheckedUpdateInputSchema]),
        where: PartnerUserWhereUniqueInputSchema
    })
    .strict()

export default PartnerUserUpdateArgsSchema
