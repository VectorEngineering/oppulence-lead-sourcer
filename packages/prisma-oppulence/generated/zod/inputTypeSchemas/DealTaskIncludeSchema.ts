import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealArgsSchema } from '../outputTypeSchemas/DealArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const DealTaskIncludeSchema: z.ZodType<Prisma.DealTaskInclude> = z
    .object({
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional(),
        assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export default DealTaskIncludeSchema
