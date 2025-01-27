import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { ProgramEnrollmentArgsSchema } from '../outputTypeSchemas/ProgramEnrollmentArgsSchema'

export const ProgramApplicationIncludeSchema: z.ZodType<Prisma.ProgramApplicationInclude> = z
    .object({
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        enrollment: z.union([z.boolean(), z.lazy(() => ProgramEnrollmentArgsSchema)]).optional()
    })
    .strict()

export default ProgramApplicationIncludeSchema
