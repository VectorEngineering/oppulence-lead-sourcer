import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'
import { ProgramEnrollmentCreateWithoutDiscountInputSchema } from './ProgramEnrollmentCreateWithoutDiscountInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema'

export const ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateOrConnectWithoutDiscountInput> =
    z
        .object({
            where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProgramEnrollmentCreateWithoutDiscountInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema)
            ])
        })
        .strict()

export default ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema
