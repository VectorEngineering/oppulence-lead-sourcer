import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessScalarWhereInputSchema } from './ReportAccessScalarWhereInputSchema'
import { ReportAccessUpdateManyMutationInputSchema } from './ReportAccessUpdateManyMutationInputSchema'
import { ReportAccessUncheckedUpdateManyWithoutUserInputSchema } from './ReportAccessUncheckedUpdateManyWithoutUserInputSchema'

export const ReportAccessUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessUpdateManyWithWhereWithoutUserInput> = z
    .object({
        where: z.lazy(() => ReportAccessScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => ReportAccessUpdateManyMutationInputSchema),
            z.lazy(() => ReportAccessUncheckedUpdateManyWithoutUserInputSchema)
        ])
    })
    .strict()

export default ReportAccessUpdateManyWithWhereWithoutUserInputSchema
