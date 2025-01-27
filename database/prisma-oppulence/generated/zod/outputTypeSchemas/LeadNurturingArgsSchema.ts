import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadNurturingSelectSchema } from '../inputTypeSchemas/LeadNurturingSelectSchema'
import { LeadNurturingIncludeSchema } from '../inputTypeSchemas/LeadNurturingIncludeSchema'

export const LeadNurturingArgsSchema: z.ZodType<Prisma.LeadNurturingDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadNurturingSelectSchema).optional(),
        include: z.lazy(() => LeadNurturingIncludeSchema).optional()
    })
    .strict()

export default LeadNurturingArgsSchema
