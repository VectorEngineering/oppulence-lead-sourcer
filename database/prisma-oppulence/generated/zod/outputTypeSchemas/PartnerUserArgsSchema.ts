import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserSelectSchema } from '../inputTypeSchemas/PartnerUserSelectSchema'
import { PartnerUserIncludeSchema } from '../inputTypeSchemas/PartnerUserIncludeSchema'

export const PartnerUserArgsSchema: z.ZodType<Prisma.PartnerUserDefaultArgs> = z
    .object({
        select: z.lazy(() => PartnerUserSelectSchema).optional(),
        include: z.lazy(() => PartnerUserIncludeSchema).optional()
    })
    .strict()

export default PartnerUserArgsSchema
