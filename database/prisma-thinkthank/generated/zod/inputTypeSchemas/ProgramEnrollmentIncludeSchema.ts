import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { DiscountArgsSchema } from '../outputTypeSchemas/DiscountArgsSchema'
import { ProgramApplicationArgsSchema } from '../outputTypeSchemas/ProgramApplicationArgsSchema'

export const ProgramEnrollmentIncludeSchema: z.ZodType<Prisma.ProgramEnrollmentInclude> = z
    .object({
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional(),
        discount: z.union([z.boolean(), z.lazy(() => DiscountArgsSchema)]).optional(),
        application: z.union([z.boolean(), z.lazy(() => ProgramApplicationArgsSchema)]).optional()
    })
    .strict()

export default ProgramEnrollmentIncludeSchema
