import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointCreateWithoutLeadsInputSchema } from './EndpointCreateWithoutLeadsInputSchema'
import { EndpointUncheckedCreateWithoutLeadsInputSchema } from './EndpointUncheckedCreateWithoutLeadsInputSchema'
import { EndpointCreateOrConnectWithoutLeadsInputSchema } from './EndpointCreateOrConnectWithoutLeadsInputSchema'
import { EndpointUpsertWithoutLeadsInputSchema } from './EndpointUpsertWithoutLeadsInputSchema'
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema'
import { EndpointUpdateToOneWithWhereWithoutLeadsInputSchema } from './EndpointUpdateToOneWithWhereWithoutLeadsInputSchema'
import { EndpointUpdateWithoutLeadsInputSchema } from './EndpointUpdateWithoutLeadsInputSchema'
import { EndpointUncheckedUpdateWithoutLeadsInputSchema } from './EndpointUncheckedUpdateWithoutLeadsInputSchema'

export const EndpointUpdateOneRequiredWithoutLeadsNestedInputSchema: z.ZodType<Prisma.EndpointUpdateOneRequiredWithoutLeadsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => EndpointCreateWithoutLeadsInputSchema), z.lazy(() => EndpointUncheckedCreateWithoutLeadsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => EndpointCreateOrConnectWithoutLeadsInputSchema).optional(),
        upsert: z.lazy(() => EndpointUpsertWithoutLeadsInputSchema).optional(),
        connect: z.lazy(() => EndpointWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => EndpointUpdateToOneWithWhereWithoutLeadsInputSchema),
                z.lazy(() => EndpointUpdateWithoutLeadsInputSchema),
                z.lazy(() => EndpointUncheckedUpdateWithoutLeadsInputSchema)
            ])
            .optional()
    })
    .strict()

export default EndpointUpdateOneRequiredWithoutLeadsNestedInputSchema
