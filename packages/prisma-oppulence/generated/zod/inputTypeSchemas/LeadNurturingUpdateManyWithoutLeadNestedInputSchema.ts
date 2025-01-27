import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadNurturingCreateWithoutLeadInputSchema } from './LeadNurturingCreateWithoutLeadInputSchema'
import { LeadNurturingUncheckedCreateWithoutLeadInputSchema } from './LeadNurturingUncheckedCreateWithoutLeadInputSchema'
import { LeadNurturingCreateOrConnectWithoutLeadInputSchema } from './LeadNurturingCreateOrConnectWithoutLeadInputSchema'
import { LeadNurturingUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadNurturingUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadNurturingCreateManyLeadInputEnvelopeSchema } from './LeadNurturingCreateManyLeadInputEnvelopeSchema'
import { LeadNurturingWhereUniqueInputSchema } from './LeadNurturingWhereUniqueInputSchema'
import { LeadNurturingUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadNurturingUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadNurturingUpdateManyWithWhereWithoutLeadInputSchema } from './LeadNurturingUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadNurturingScalarWhereInputSchema } from './LeadNurturingScalarWhereInputSchema'

export const LeadNurturingUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadNurturingUpdateManyWithoutLeadNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadNurturingCreateWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingCreateWithoutLeadInputSchema).array(),
                z.lazy(() => LeadNurturingUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadNurturingCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadNurturingUpsertWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingUpsertWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadNurturingCreateManyLeadInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => LeadNurturingWhereUniqueInputSchema), z.lazy(() => LeadNurturingWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => LeadNurturingWhereUniqueInputSchema), z.lazy(() => LeadNurturingWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => LeadNurturingWhereUniqueInputSchema), z.lazy(() => LeadNurturingWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => LeadNurturingWhereUniqueInputSchema), z.lazy(() => LeadNurturingWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => LeadNurturingUpdateWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingUpdateWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadNurturingUpdateManyWithWhereWithoutLeadInputSchema),
                z.lazy(() => LeadNurturingUpdateManyWithWhereWithoutLeadInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => LeadNurturingScalarWhereInputSchema), z.lazy(() => LeadNurturingScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadNurturingUpdateManyWithoutLeadNestedInputSchema
