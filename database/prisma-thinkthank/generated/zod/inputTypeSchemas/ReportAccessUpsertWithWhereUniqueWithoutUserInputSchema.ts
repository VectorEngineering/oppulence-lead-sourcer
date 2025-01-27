import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema'
import { ReportAccessUpdateWithoutUserInputSchema } from './ReportAccessUpdateWithoutUserInputSchema'
import { ReportAccessUncheckedUpdateWithoutUserInputSchema } from './ReportAccessUncheckedUpdateWithoutUserInputSchema'
import { ReportAccessCreateWithoutUserInputSchema } from './ReportAccessCreateWithoutUserInputSchema'
import { ReportAccessUncheckedCreateWithoutUserInputSchema } from './ReportAccessUncheckedCreateWithoutUserInputSchema'

export const ReportAccessUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessUpsertWithWhereUniqueWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => ReportAccessWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ReportAccessUpdateWithoutUserInputSchema),
                z.lazy(() => ReportAccessUncheckedUpdateWithoutUserInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ReportAccessCreateWithoutUserInputSchema),
                z.lazy(() => ReportAccessUncheckedCreateWithoutUserInputSchema)
            ])
        })
        .strict()

export default ReportAccessUpsertWithWhereUniqueWithoutUserInputSchema
