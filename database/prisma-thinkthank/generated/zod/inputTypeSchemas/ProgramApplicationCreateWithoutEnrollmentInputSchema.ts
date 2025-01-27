import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerCreateNestedOneWithoutApplicationsInputSchema } from './PartnerCreateNestedOneWithoutApplicationsInputSchema'
import { ProgramCreateNestedOneWithoutApplicationsInputSchema } from './ProgramCreateNestedOneWithoutApplicationsInputSchema'

export const ProgramApplicationCreateWithoutEnrollmentInputSchema: z.ZodType<Prisma.ProgramApplicationCreateWithoutEnrollmentInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        email: z.string(),
        proposal: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        comments: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        partner: z.lazy(() => PartnerCreateNestedOneWithoutApplicationsInputSchema).optional(),
        program: z.lazy(() => ProgramCreateNestedOneWithoutApplicationsInputSchema)
    })
    .strict()

export default ProgramApplicationCreateWithoutEnrollmentInputSchema
