import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'

export const PartnerUserIncludeSchema: z.ZodType<Prisma.PartnerUserInclude> = z
    .object({
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional()
    })
    .strict()

export default PartnerUserIncludeSchema
