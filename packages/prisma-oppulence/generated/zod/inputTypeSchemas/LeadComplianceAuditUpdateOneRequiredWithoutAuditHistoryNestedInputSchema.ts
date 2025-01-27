import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceAuditCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditCreateWithoutAuditHistoryInputSchema'
import { LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema'
import { LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema } from './LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema'
import { LeadComplianceAuditUpsertWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUpsertWithoutAuditHistoryInputSchema'
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema'
import { LeadComplianceAuditUpdateToOneWithWhereWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUpdateToOneWithWhereWithoutAuditHistoryInputSchema'
import { LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema'
import { LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema'

export const LeadComplianceAuditUpdateOneRequiredWithoutAuditHistoryNestedInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateOneRequiredWithoutAuditHistoryNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadComplianceAuditCreateWithoutAuditHistoryInputSchema),
                    z.lazy(() => LeadComplianceAuditUncheckedCreateWithoutAuditHistoryInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadComplianceAuditCreateOrConnectWithoutAuditHistoryInputSchema).optional(),
            upsert: z.lazy(() => LeadComplianceAuditUpsertWithoutAuditHistoryInputSchema).optional(),
            connect: z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadComplianceAuditUpdateToOneWithWhereWithoutAuditHistoryInputSchema),
                    z.lazy(() => LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema),
                    z.lazy(() => LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadComplianceAuditUpdateOneRequiredWithoutAuditHistoryNestedInputSchema
