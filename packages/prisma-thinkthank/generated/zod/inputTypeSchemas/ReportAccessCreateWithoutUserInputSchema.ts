import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateNestedOneWithoutAccessUsersInputSchema } from './ReportCreateNestedOneWithoutAccessUsersInputSchema'

export const ReportAccessCreateWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessCreateWithoutUserInput> = z
    .object({
        id: z.string().cuid().optional(),
        accessType: z.string(),
        report: z.lazy(() => ReportCreateNestedOneWithoutAccessUsersInputSchema)
    })
    .strict()

export default ReportAccessCreateWithoutUserInputSchema
