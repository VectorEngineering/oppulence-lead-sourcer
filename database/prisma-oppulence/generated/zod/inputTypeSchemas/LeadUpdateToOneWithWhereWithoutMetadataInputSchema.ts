import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutMetadataInputSchema } from './LeadUpdateWithoutMetadataInputSchema'
import { LeadUncheckedUpdateWithoutMetadataInputSchema } from './LeadUncheckedUpdateWithoutMetadataInputSchema'

export const LeadUpdateToOneWithWhereWithoutMetadataInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutMetadataInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutMetadataInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutMetadataInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutMetadataInputSchema
