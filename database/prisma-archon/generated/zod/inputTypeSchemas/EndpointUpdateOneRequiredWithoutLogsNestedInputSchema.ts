import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointCreateWithoutLogsInputSchema } from './EndpointCreateWithoutLogsInputSchema'
import { EndpointUncheckedCreateWithoutLogsInputSchema } from './EndpointUncheckedCreateWithoutLogsInputSchema'
import { EndpointCreateOrConnectWithoutLogsInputSchema } from './EndpointCreateOrConnectWithoutLogsInputSchema'
import { EndpointUpsertWithoutLogsInputSchema } from './EndpointUpsertWithoutLogsInputSchema'
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema'
import { EndpointUpdateToOneWithWhereWithoutLogsInputSchema } from './EndpointUpdateToOneWithWhereWithoutLogsInputSchema'
import { EndpointUpdateWithoutLogsInputSchema } from './EndpointUpdateWithoutLogsInputSchema'
import { EndpointUncheckedUpdateWithoutLogsInputSchema } from './EndpointUncheckedUpdateWithoutLogsInputSchema'

export const EndpointUpdateOneRequiredWithoutLogsNestedInputSchema: z.ZodType<Prisma.EndpointUpdateOneRequiredWithoutLogsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => EndpointCreateWithoutLogsInputSchema), z.lazy(() => EndpointUncheckedCreateWithoutLogsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => EndpointCreateOrConnectWithoutLogsInputSchema).optional(),
        upsert: z.lazy(() => EndpointUpsertWithoutLogsInputSchema).optional(),
        connect: z.lazy(() => EndpointWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => EndpointUpdateToOneWithWhereWithoutLogsInputSchema),
                z.lazy(() => EndpointUpdateWithoutLogsInputSchema),
                z.lazy(() => EndpointUncheckedUpdateWithoutLogsInputSchema)
            ])
            .optional()
    })
    .strict()

export default EndpointUpdateOneRequiredWithoutLogsNestedInputSchema
