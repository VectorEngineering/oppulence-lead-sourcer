import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskCreateWithoutLeadInputSchema } from './LeadTaskCreateWithoutLeadInputSchema'
import { LeadTaskUncheckedCreateWithoutLeadInputSchema } from './LeadTaskUncheckedCreateWithoutLeadInputSchema'
import { LeadTaskCreateOrConnectWithoutLeadInputSchema } from './LeadTaskCreateOrConnectWithoutLeadInputSchema'
import { LeadTaskUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadTaskUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadTaskCreateManyLeadInputEnvelopeSchema } from './LeadTaskCreateManyLeadInputEnvelopeSchema'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'
import { LeadTaskUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadTaskUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadTaskUpdateManyWithWhereWithoutLeadInputSchema } from './LeadTaskUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadTaskScalarWhereInputSchema } from './LeadTaskScalarWhereInputSchema'

export const LeadTaskUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadTaskUpdateManyWithoutLeadNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadTaskCreateWithoutLeadInputSchema),
                z.lazy(() => LeadTaskCreateWithoutLeadInputSchema).array(),
                z.lazy(() => LeadTaskUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => LeadTaskUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadTaskCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => LeadTaskCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadTaskUpsertWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadTaskUpsertWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadTaskCreateManyLeadInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()])
            .optional(),
        delete: z.union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LeadTaskUpdateWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadTaskUpdateWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadTaskUpdateManyWithWhereWithoutLeadInputSchema),
                z.lazy(() => LeadTaskUpdateManyWithWhereWithoutLeadInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LeadTaskScalarWhereInputSchema), z.lazy(() => LeadTaskScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LeadTaskUpdateManyWithoutLeadNestedInputSchema
