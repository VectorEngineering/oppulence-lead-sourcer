import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutMetadataInputSchema } from './LeadCreateWithoutMetadataInputSchema'
import { LeadUncheckedCreateWithoutMetadataInputSchema } from './LeadUncheckedCreateWithoutMetadataInputSchema'
import { LeadCreateOrConnectWithoutMetadataInputSchema } from './LeadCreateOrConnectWithoutMetadataInputSchema'
import { LeadUpsertWithoutMetadataInputSchema } from './LeadUpsertWithoutMetadataInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutMetadataInputSchema } from './LeadUpdateToOneWithWhereWithoutMetadataInputSchema'
import { LeadUpdateWithoutMetadataInputSchema } from './LeadUpdateWithoutMetadataInputSchema'
import { LeadUncheckedUpdateWithoutMetadataInputSchema } from './LeadUncheckedUpdateWithoutMetadataInputSchema'

export const LeadUpdateOneRequiredWithoutMetadataNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutMetadataNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutMetadataInputSchema), z.lazy(() => LeadUncheckedCreateWithoutMetadataInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutMetadataInputSchema).optional(),
        upsert: z.lazy(() => LeadUpsertWithoutMetadataInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateToOneWithWhereWithoutMetadataInputSchema),
                z.lazy(() => LeadUpdateWithoutMetadataInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutMetadataInputSchema)
            ])
            .optional()
    })
    .strict()

export default LeadUpdateOneRequiredWithoutMetadataNestedInputSchema
