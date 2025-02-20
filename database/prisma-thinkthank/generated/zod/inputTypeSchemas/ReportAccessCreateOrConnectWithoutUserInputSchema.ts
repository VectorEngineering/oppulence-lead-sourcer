import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema'
import { ReportAccessCreateWithoutUserInputSchema } from './ReportAccessCreateWithoutUserInputSchema'
import { ReportAccessUncheckedCreateWithoutUserInputSchema } from './ReportAccessUncheckedCreateWithoutUserInputSchema'

export const ReportAccessCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessCreateOrConnectWithoutUserInput> = z
    .object({
        where: z.lazy(() => ReportAccessWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ReportAccessCreateWithoutUserInputSchema),
            z.lazy(() => ReportAccessUncheckedCreateWithoutUserInputSchema)
        ])
    })
    .strict()

export default ReportAccessCreateOrConnectWithoutUserInputSchema
