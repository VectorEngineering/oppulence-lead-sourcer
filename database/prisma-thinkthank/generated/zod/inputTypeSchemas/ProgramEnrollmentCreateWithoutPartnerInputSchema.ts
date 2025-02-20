import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema'
import { ProgramCreateNestedOneWithoutPartnersInputSchema } from './ProgramCreateNestedOneWithoutPartnersInputSchema'
import { LinkCreateNestedOneWithoutProgramEnrollmentInputSchema } from './LinkCreateNestedOneWithoutProgramEnrollmentInputSchema'
import { DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema } from './DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema'
import { ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema } from './ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema'

export const ProgramEnrollmentCreateWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateWithoutPartnerInput> = z
    .object({
        id: z.string().cuid().optional(),
        commissionAmount: z.number().int().optional().nullable(),
        status: z.lazy(() => ProgramEnrollmentStatusSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        program: z.lazy(() => ProgramCreateNestedOneWithoutPartnersInputSchema),
        link: z.lazy(() => LinkCreateNestedOneWithoutProgramEnrollmentInputSchema).optional(),
        discount: z.lazy(() => DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema).optional(),
        application: z.lazy(() => ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema).optional()
    })
    .strict()

export default ProgramEnrollmentCreateWithoutPartnerInputSchema
