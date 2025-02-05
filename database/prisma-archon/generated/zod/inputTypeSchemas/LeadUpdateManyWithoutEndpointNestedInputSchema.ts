import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutEndpointInputSchema } from './LeadCreateWithoutEndpointInputSchema'
import { LeadUncheckedCreateWithoutEndpointInputSchema } from './LeadUncheckedCreateWithoutEndpointInputSchema'
import { LeadCreateOrConnectWithoutEndpointInputSchema } from './LeadCreateOrConnectWithoutEndpointInputSchema'
import { LeadUpsertWithWhereUniqueWithoutEndpointInputSchema } from './LeadUpsertWithWhereUniqueWithoutEndpointInputSchema'
import { LeadCreateManyEndpointInputEnvelopeSchema } from './LeadCreateManyEndpointInputEnvelopeSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithWhereUniqueWithoutEndpointInputSchema } from './LeadUpdateWithWhereUniqueWithoutEndpointInputSchema'
import { LeadUpdateManyWithWhereWithoutEndpointInputSchema } from './LeadUpdateManyWithWhereWithoutEndpointInputSchema'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'

export const LeadUpdateManyWithoutEndpointNestedInputSchema: z.ZodType<Prisma.LeadUpdateManyWithoutEndpointNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutEndpointInputSchema),
                z.lazy(() => LeadCreateWithoutEndpointInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutEndpointInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutEndpointInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutEndpointInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutEndpointInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutEndpointInputSchema),
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutEndpointInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCreateManyEndpointInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutEndpointInputSchema),
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutEndpointInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadUpdateManyWithWhereWithoutEndpointInputSchema),
                z.lazy(() => LeadUpdateManyWithWhereWithoutEndpointInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LeadUpdateManyWithoutEndpointNestedInputSchema
