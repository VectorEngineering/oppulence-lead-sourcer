import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommunicationScalarWhereInputSchema } from './LeadCommunicationScalarWhereInputSchema'
import { LeadCommunicationUpdateManyMutationInputSchema } from './LeadCommunicationUpdateManyMutationInputSchema'
import { LeadCommunicationUncheckedUpdateManyWithoutLeadInputSchema } from './LeadCommunicationUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadCommunicationUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommunicationUpdateManyWithWhereWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadCommunicationScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadCommunicationUpdateManyMutationInputSchema),
                z.lazy(() => LeadCommunicationUncheckedUpdateManyWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadCommunicationUpdateManyWithWhereWithoutLeadInputSchema
