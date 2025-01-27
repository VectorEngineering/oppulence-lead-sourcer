import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutMetadataInputSchema } from './LeadCreateWithoutMetadataInputSchema'
import { LeadUncheckedCreateWithoutMetadataInputSchema } from './LeadUncheckedCreateWithoutMetadataInputSchema'
import { LeadCreateOrConnectWithoutMetadataInputSchema } from './LeadCreateOrConnectWithoutMetadataInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutMetadataInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutMetadataInput> = z
    .object({
        create: z
            .union([z.lazy(() => LeadCreateWithoutMetadataInputSchema), z.lazy(() => LeadUncheckedCreateWithoutMetadataInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutMetadataInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutMetadataInputSchema
