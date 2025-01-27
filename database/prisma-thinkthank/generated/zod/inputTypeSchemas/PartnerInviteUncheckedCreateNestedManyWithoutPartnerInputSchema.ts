import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerInviteCreateWithoutPartnerInputSchema } from './PartnerInviteCreateWithoutPartnerInputSchema'
import { PartnerInviteUncheckedCreateWithoutPartnerInputSchema } from './PartnerInviteUncheckedCreateWithoutPartnerInputSchema'
import { PartnerInviteCreateOrConnectWithoutPartnerInputSchema } from './PartnerInviteCreateOrConnectWithoutPartnerInputSchema'
import { PartnerInviteCreateManyPartnerInputEnvelopeSchema } from './PartnerInviteCreateManyPartnerInputEnvelopeSchema'
import { PartnerInviteWhereUniqueInputSchema } from './PartnerInviteWhereUniqueInputSchema'

export const PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerInviteUncheckedCreateNestedManyWithoutPartnerInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PartnerInviteCreateWithoutPartnerInputSchema),
                    z.lazy(() => PartnerInviteCreateWithoutPartnerInputSchema).array(),
                    z.lazy(() => PartnerInviteUncheckedCreateWithoutPartnerInputSchema),
                    z.lazy(() => PartnerInviteUncheckedCreateWithoutPartnerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => PartnerInviteCreateOrConnectWithoutPartnerInputSchema),
                    z.lazy(() => PartnerInviteCreateOrConnectWithoutPartnerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => PartnerInviteCreateManyPartnerInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => PartnerInviteWhereUniqueInputSchema), z.lazy(() => PartnerInviteWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema
