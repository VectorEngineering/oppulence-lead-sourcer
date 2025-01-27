import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutExternalSystemsInputSchema } from './LeadCreateWithoutExternalSystemsInputSchema'
import { LeadUncheckedCreateWithoutExternalSystemsInputSchema } from './LeadUncheckedCreateWithoutExternalSystemsInputSchema'
import { LeadCreateOrConnectWithoutExternalSystemsInputSchema } from './LeadCreateOrConnectWithoutExternalSystemsInputSchema'
import { LeadUpsertWithoutExternalSystemsInputSchema } from './LeadUpsertWithoutExternalSystemsInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutExternalSystemsInputSchema } from './LeadUpdateToOneWithWhereWithoutExternalSystemsInputSchema'
import { LeadUpdateWithoutExternalSystemsInputSchema } from './LeadUpdateWithoutExternalSystemsInputSchema'
import { LeadUncheckedUpdateWithoutExternalSystemsInputSchema } from './LeadUncheckedUpdateWithoutExternalSystemsInputSchema'

export const LeadUpdateOneRequiredWithoutExternalSystemsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutExternalSystemsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutExternalSystemsInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutExternalSystemsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutExternalSystemsInputSchema).optional(),
            upsert: z.lazy(() => LeadUpsertWithoutExternalSystemsInputSchema).optional(),
            connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadUpdateToOneWithWhereWithoutExternalSystemsInputSchema),
                    z.lazy(() => LeadUpdateWithoutExternalSystemsInputSchema),
                    z.lazy(() => LeadUncheckedUpdateWithoutExternalSystemsInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadUpdateOneRequiredWithoutExternalSystemsNestedInputSchema
