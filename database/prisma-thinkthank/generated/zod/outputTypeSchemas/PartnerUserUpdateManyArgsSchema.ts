import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserUpdateManyMutationInputSchema } from '../inputTypeSchemas/PartnerUserUpdateManyMutationInputSchema'
import { PartnerUserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PartnerUserUncheckedUpdateManyInputSchema'
import { PartnerUserWhereInputSchema } from '../inputTypeSchemas/PartnerUserWhereInputSchema'

export const PartnerUserUpdateManyArgsSchema: z.ZodType<Prisma.PartnerUserUpdateManyArgs> = z
    .object({
        data: z.union([PartnerUserUpdateManyMutationInputSchema, PartnerUserUncheckedUpdateManyInputSchema]),
        where: PartnerUserWhereInputSchema.optional()
    })
    .strict()

export default PartnerUserUpdateManyArgsSchema
