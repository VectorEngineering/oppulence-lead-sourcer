import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionCreateWithoutProjectInputSchema } from './BankConnectionCreateWithoutProjectInputSchema'
import { BankConnectionUncheckedCreateWithoutProjectInputSchema } from './BankConnectionUncheckedCreateWithoutProjectInputSchema'
import { BankConnectionCreateOrConnectWithoutProjectInputSchema } from './BankConnectionCreateOrConnectWithoutProjectInputSchema'
import { BankConnectionCreateManyProjectInputEnvelopeSchema } from './BankConnectionCreateManyProjectInputEnvelopeSchema'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'

export const BankConnectionCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.BankConnectionCreateNestedManyWithoutProjectInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankConnectionCreateWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => BankConnectionUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => BankConnectionCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => BankConnectionCreateManyProjectInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => BankConnectionWhereUniqueInputSchema), z.lazy(() => BankConnectionWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default BankConnectionCreateNestedManyWithoutProjectInputSchema
