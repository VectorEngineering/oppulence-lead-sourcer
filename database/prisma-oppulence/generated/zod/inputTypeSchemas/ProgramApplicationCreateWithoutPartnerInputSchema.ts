import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramCreateNestedOneWithoutApplicationsInputSchema } from './ProgramCreateNestedOneWithoutApplicationsInputSchema'
import { ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema } from './ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema'

export const ProgramApplicationCreateWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramApplicationCreateWithoutPartnerInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        email: z.string(),
        proposal: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        comments: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        program: z.lazy(() => ProgramCreateNestedOneWithoutApplicationsInputSchema),
        enrollment: z.lazy(() => ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema).optional()
    })
    .strict()

export default ProgramApplicationCreateWithoutPartnerInputSchema
