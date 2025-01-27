import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportScalarWhereInputSchema } from './ReportScalarWhereInputSchema'
import { ReportUpdateManyMutationInputSchema } from './ReportUpdateManyMutationInputSchema'
import { ReportUncheckedUpdateManyWithoutCreatorInputSchema } from './ReportUncheckedUpdateManyWithoutCreatorInputSchema'

export const ReportUpdateManyWithWhereWithoutCreatorInputSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCreatorInput> = z
    .object({
        where: z.lazy(() => ReportScalarWhereInputSchema),
        data: z.union([z.lazy(() => ReportUpdateManyMutationInputSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCreatorInputSchema)])
    })
    .strict()

export default ReportUpdateManyWithWhereWithoutCreatorInputSchema
