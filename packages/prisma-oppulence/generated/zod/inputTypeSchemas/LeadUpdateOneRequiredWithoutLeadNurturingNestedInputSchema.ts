import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutLeadNurturingInputSchema } from './LeadCreateWithoutLeadNurturingInputSchema'
import { LeadUncheckedCreateWithoutLeadNurturingInputSchema } from './LeadUncheckedCreateWithoutLeadNurturingInputSchema'
import { LeadCreateOrConnectWithoutLeadNurturingInputSchema } from './LeadCreateOrConnectWithoutLeadNurturingInputSchema'
import { LeadUpsertWithoutLeadNurturingInputSchema } from './LeadUpsertWithoutLeadNurturingInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutLeadNurturingInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadNurturingInputSchema'
import { LeadUpdateWithoutLeadNurturingInputSchema } from './LeadUpdateWithoutLeadNurturingInputSchema'
import { LeadUncheckedUpdateWithoutLeadNurturingInputSchema } from './LeadUncheckedUpdateWithoutLeadNurturingInputSchema'

export const LeadUpdateOneRequiredWithoutLeadNurturingNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadNurturingNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutLeadNurturingInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutLeadNurturingInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadNurturingInputSchema).optional(),
            upsert: z.lazy(() => LeadUpsertWithoutLeadNurturingInputSchema).optional(),
            connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadNurturingInputSchema),
                    z.lazy(() => LeadUpdateWithoutLeadNurturingInputSchema),
                    z.lazy(() => LeadUncheckedUpdateWithoutLeadNurturingInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadUpdateOneRequiredWithoutLeadNurturingNestedInputSchema
