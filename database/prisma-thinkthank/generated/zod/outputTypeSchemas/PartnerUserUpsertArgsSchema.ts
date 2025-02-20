import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserIncludeSchema } from '../inputTypeSchemas/PartnerUserIncludeSchema'
import { PartnerUserWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerUserWhereUniqueInputSchema'
import { PartnerUserCreateInputSchema } from '../inputTypeSchemas/PartnerUserCreateInputSchema'
import { PartnerUserUncheckedCreateInputSchema } from '../inputTypeSchemas/PartnerUserUncheckedCreateInputSchema'
import { PartnerUserUpdateInputSchema } from '../inputTypeSchemas/PartnerUserUpdateInputSchema'
import { PartnerUserUncheckedUpdateInputSchema } from '../inputTypeSchemas/PartnerUserUncheckedUpdateInputSchema'
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

export const PartnerUserUpsertArgsSchema: z.ZodType<Prisma.PartnerUserUpsertArgs> = z
    .object({
        select: PartnerUserSelectSchema.optional(),
        include: PartnerUserIncludeSchema.optional(),
        where: PartnerUserWhereUniqueInputSchema,
        create: z.union([PartnerUserCreateInputSchema, PartnerUserUncheckedCreateInputSchema]),
        update: z.union([PartnerUserUpdateInputSchema, PartnerUserUncheckedUpdateInputSchema])
    })
    .strict()

export default PartnerUserUpsertArgsSchema
