import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskCreateWithoutAssignedToInputSchema } from './LeadTaskCreateWithoutAssignedToInputSchema'
import { LeadTaskUncheckedCreateWithoutAssignedToInputSchema } from './LeadTaskUncheckedCreateWithoutAssignedToInputSchema'
import { LeadTaskCreateOrConnectWithoutAssignedToInputSchema } from './LeadTaskCreateOrConnectWithoutAssignedToInputSchema'
import { LeadTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema } from './LeadTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema'
import { LeadTaskCreateManyAssignedToInputEnvelopeSchema } from './LeadTaskCreateManyAssignedToInputEnvelopeSchema'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'
import { LeadTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema } from './LeadTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema'
import { LeadTaskUpdateManyWithWhereWithoutAssignedToInputSchema } from './LeadTaskUpdateManyWithWhereWithoutAssignedToInputSchema'
import { LeadTaskScalarWhereInputSchema } from './LeadTaskScalarWhereInputSchema'

export const LeadTaskUncheckedUpdateManyWithoutAssignedToNestedInputSchema: z.ZodType<Prisma.LeadTaskUncheckedUpdateManyWithoutAssignedToNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadTaskCreateWithoutAssignedToInputSchema),
                    z.lazy(() => LeadTaskCreateWithoutAssignedToInputSchema).array(),
                    z.lazy(() => LeadTaskUncheckedCreateWithoutAssignedToInputSchema),
                    z.lazy(() => LeadTaskUncheckedCreateWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadTaskCreateOrConnectWithoutAssignedToInputSchema),
                    z.lazy(() => LeadTaskCreateOrConnectWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema),
                    z.lazy(() => LeadTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadTaskCreateManyAssignedToInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadTaskWhereUniqueInputSchema), z.lazy(() => LeadTaskWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema),
                    z.lazy(() => LeadTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadTaskUpdateManyWithWhereWithoutAssignedToInputSchema),
                    z.lazy(() => LeadTaskUpdateManyWithWhereWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadTaskScalarWhereInputSchema), z.lazy(() => LeadTaskScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadTaskUncheckedUpdateManyWithoutAssignedToNestedInputSchema
