import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateWithoutProjectInputSchema } from './BankAccountCreateWithoutProjectInputSchema'
import { BankAccountUncheckedCreateWithoutProjectInputSchema } from './BankAccountUncheckedCreateWithoutProjectInputSchema'
import { BankAccountCreateOrConnectWithoutProjectInputSchema } from './BankAccountCreateOrConnectWithoutProjectInputSchema'
import { BankAccountCreateManyProjectInputEnvelopeSchema } from './BankAccountCreateManyProjectInputEnvelopeSchema'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'

export const BankAccountCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.BankAccountCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => BankAccountCreateWithoutProjectInputSchema),
                z.lazy(() => BankAccountCreateWithoutProjectInputSchema).array(),
                z.lazy(() => BankAccountUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => BankAccountUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BankAccountCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => BankAccountCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => BankAccountCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => BankAccountWhereUniqueInputSchema), z.lazy(() => BankAccountWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default BankAccountCreateNestedManyWithoutProjectInputSchema
