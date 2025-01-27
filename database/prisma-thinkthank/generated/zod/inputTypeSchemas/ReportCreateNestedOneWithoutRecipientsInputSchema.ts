import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateWithoutRecipientsInputSchema } from './ReportCreateWithoutRecipientsInputSchema'
import { ReportUncheckedCreateWithoutRecipientsInputSchema } from './ReportUncheckedCreateWithoutRecipientsInputSchema'
import { ReportCreateOrConnectWithoutRecipientsInputSchema } from './ReportCreateOrConnectWithoutRecipientsInputSchema'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'

export const ReportCreateNestedOneWithoutRecipientsInputSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutRecipientsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ReportCreateWithoutRecipientsInputSchema),
                z.lazy(() => ReportUncheckedCreateWithoutRecipientsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutRecipientsInputSchema).optional(),
        connect: z.lazy(() => ReportWhereUniqueInputSchema).optional()
    })
    .strict()

export default ReportCreateNestedOneWithoutRecipientsInputSchema
