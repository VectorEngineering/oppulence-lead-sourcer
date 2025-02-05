import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutEndpointInputSchema } from './LeadCreateWithoutEndpointInputSchema'
import { LeadUncheckedCreateWithoutEndpointInputSchema } from './LeadUncheckedCreateWithoutEndpointInputSchema'
import { LeadCreateOrConnectWithoutEndpointInputSchema } from './LeadCreateOrConnectWithoutEndpointInputSchema'
import { LeadCreateManyEndpointInputEnvelopeSchema } from './LeadCreateManyEndpointInputEnvelopeSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedManyWithoutEndpointInputSchema: z.ZodType<Prisma.LeadCreateNestedManyWithoutEndpointInput> = z
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
        createMany: z.lazy(() => LeadCreateManyEndpointInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LeadCreateNestedManyWithoutEndpointInputSchema
