import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema'
import { ReportAccessUpdateWithoutUserInputSchema } from './ReportAccessUpdateWithoutUserInputSchema'
import { ReportAccessUncheckedUpdateWithoutUserInputSchema } from './ReportAccessUncheckedUpdateWithoutUserInputSchema'

export const ReportAccessUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessUpdateWithWhereUniqueWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => ReportAccessWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => ReportAccessUpdateWithoutUserInputSchema),
                z.lazy(() => ReportAccessUncheckedUpdateWithoutUserInputSchema)
            ])
        })
        .strict()

export default ReportAccessUpdateWithWhereUniqueWithoutUserInputSchema
