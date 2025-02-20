import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationCreateWithoutPartnerInputSchema } from './ProgramApplicationCreateWithoutPartnerInputSchema'
import { ProgramApplicationUncheckedCreateWithoutPartnerInputSchema } from './ProgramApplicationUncheckedCreateWithoutPartnerInputSchema'
import { ProgramApplicationCreateOrConnectWithoutPartnerInputSchema } from './ProgramApplicationCreateOrConnectWithoutPartnerInputSchema'
import { ProgramApplicationCreateManyPartnerInputEnvelopeSchema } from './ProgramApplicationCreateManyPartnerInputEnvelopeSchema'
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema'

export const ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramApplicationCreateWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationCreateWithoutPartnerInputSchema).array(),
                    z.lazy(() => ProgramApplicationUncheckedCreateWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationUncheckedCreateWithoutPartnerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramApplicationCreateOrConnectWithoutPartnerInputSchema),
                    z.lazy(() => ProgramApplicationCreateOrConnectWithoutPartnerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramApplicationCreateManyPartnerInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
                    z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInputSchema
