import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentCreateWithoutLinkInputSchema } from './ProgramEnrollmentCreateWithoutLinkInputSchema'
import { ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema'
import { ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema'
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema'

export const ProgramEnrollmentCreateNestedOneWithoutLinkInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateNestedOneWithoutLinkInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProgramEnrollmentCreateWithoutLinkInputSchema),
                z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema).optional(),
        connect: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).optional()
    })
    .strict()

export default ProgramEnrollmentCreateNestedOneWithoutLinkInputSchema
