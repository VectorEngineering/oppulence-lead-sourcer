import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserCreateWithoutPartnerInputSchema } from './PartnerUserCreateWithoutPartnerInputSchema'
import { PartnerUserUncheckedCreateWithoutPartnerInputSchema } from './PartnerUserUncheckedCreateWithoutPartnerInputSchema'
import { PartnerUserCreateOrConnectWithoutPartnerInputSchema } from './PartnerUserCreateOrConnectWithoutPartnerInputSchema'
import { PartnerUserCreateManyPartnerInputEnvelopeSchema } from './PartnerUserCreateManyPartnerInputEnvelopeSchema'
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema'

export const PartnerUserUncheckedCreateNestedManyWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerUserUncheckedCreateNestedManyWithoutPartnerInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PartnerUserCreateWithoutPartnerInputSchema),
                    z.lazy(() => PartnerUserCreateWithoutPartnerInputSchema).array(),
                    z.lazy(() => PartnerUserUncheckedCreateWithoutPartnerInputSchema),
                    z.lazy(() => PartnerUserUncheckedCreateWithoutPartnerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => PartnerUserCreateOrConnectWithoutPartnerInputSchema),
                    z.lazy(() => PartnerUserCreateOrConnectWithoutPartnerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => PartnerUserCreateManyPartnerInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => PartnerUserWhereUniqueInputSchema), z.lazy(() => PartnerUserWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default PartnerUserUncheckedCreateNestedManyWithoutPartnerInputSchema
