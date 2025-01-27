import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutDealsInputSchema } from './LeadCreateWithoutDealsInputSchema'
import { LeadUncheckedCreateWithoutDealsInputSchema } from './LeadUncheckedCreateWithoutDealsInputSchema'
import { LeadCreateOrConnectWithoutDealsInputSchema } from './LeadCreateOrConnectWithoutDealsInputSchema'
import { LeadUpsertWithoutDealsInputSchema } from './LeadUpsertWithoutDealsInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutDealsInputSchema } from './LeadUpdateToOneWithWhereWithoutDealsInputSchema'
import { LeadUpdateWithoutDealsInputSchema } from './LeadUpdateWithoutDealsInputSchema'
import { LeadUncheckedUpdateWithoutDealsInputSchema } from './LeadUncheckedUpdateWithoutDealsInputSchema'

export const LeadUpdateOneWithoutDealsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneWithoutDealsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutDealsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutDealsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutDealsInputSchema).optional(),
        upsert: z.lazy(() => LeadUpsertWithoutDealsInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => LeadWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => LeadWhereInputSchema)]).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateToOneWithWhereWithoutDealsInputSchema),
                z.lazy(() => LeadUpdateWithoutDealsInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutDealsInputSchema)
            ])
            .optional()
    })
    .strict()

export default LeadUpdateOneWithoutDealsNestedInputSchema
