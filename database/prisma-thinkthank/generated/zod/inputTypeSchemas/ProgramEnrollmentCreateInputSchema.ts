import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema'
import { PartnerCreateNestedOneWithoutProgramsInputSchema } from './PartnerCreateNestedOneWithoutProgramsInputSchema'
import { ProgramCreateNestedOneWithoutPartnersInputSchema } from './ProgramCreateNestedOneWithoutPartnersInputSchema'
import { LinkCreateNestedOneWithoutProgramEnrollmentInputSchema } from './LinkCreateNestedOneWithoutProgramEnrollmentInputSchema'
import { DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema } from './DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema'
import { ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema } from './ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema'

export const ProgramEnrollmentCreateInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        commissionAmount: z.number().int().optional().nullable(),
        status: z.lazy(() => ProgramEnrollmentStatusSchema).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        partner: z.lazy(() => PartnerCreateNestedOneWithoutProgramsInputSchema),
        program: z.lazy(() => ProgramCreateNestedOneWithoutPartnersInputSchema),
        link: z.lazy(() => LinkCreateNestedOneWithoutProgramEnrollmentInputSchema).optional(),
        discount: z.lazy(() => DiscountCreateNestedOneWithoutProgramEnrollmentsInputSchema).optional(),
        application: z.lazy(() => ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema).optional()
    })
    .strict()

export default ProgramEnrollmentCreateInputSchema
