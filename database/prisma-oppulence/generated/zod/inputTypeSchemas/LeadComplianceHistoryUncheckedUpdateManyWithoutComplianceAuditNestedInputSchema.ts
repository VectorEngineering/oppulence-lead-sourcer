import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema'
import { LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema'
import { LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema'
import { LeadComplianceHistoryUpsertWithWhereUniqueWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUpsertWithWhereUniqueWithoutComplianceAuditInputSchema'
import { LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema } from './LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema'
import { LeadComplianceHistoryWhereUniqueInputSchema } from './LeadComplianceHistoryWhereUniqueInputSchema'
import { LeadComplianceHistoryUpdateWithWhereUniqueWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUpdateWithWhereUniqueWithoutComplianceAuditInputSchema'
import { LeadComplianceHistoryUpdateManyWithWhereWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUpdateManyWithWhereWithoutComplianceAuditInputSchema'
import { LeadComplianceHistoryScalarWhereInputSchema } from './LeadComplianceHistoryScalarWhereInputSchema'

export const LeadComplianceHistoryUncheckedUpdateManyWithoutComplianceAuditNestedInputSchema: z.ZodType<Prisma.LeadComplianceHistoryUncheckedUpdateManyWithoutComplianceAuditNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema),
                    z.lazy(() => LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema).array(),
                    z.lazy(() => LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema),
                    z.lazy(() => LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema),
                    z.lazy(() => LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadComplianceHistoryUpsertWithWhereUniqueWithoutComplianceAuditInputSchema),
                    z.lazy(() => LeadComplianceHistoryUpsertWithWhereUniqueWithoutComplianceAuditInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),
                    z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadComplianceHistoryUpdateWithWhereUniqueWithoutComplianceAuditInputSchema),
                    z.lazy(() => LeadComplianceHistoryUpdateWithWhereUniqueWithoutComplianceAuditInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadComplianceHistoryUpdateManyWithWhereWithoutComplianceAuditInputSchema),
                    z.lazy(() => LeadComplianceHistoryUpdateManyWithWhereWithoutComplianceAuditInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => LeadComplianceHistoryScalarWhereInputSchema),
                    z.lazy(() => LeadComplianceHistoryScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadComplianceHistoryUncheckedUpdateManyWithoutComplianceAuditNestedInputSchema
