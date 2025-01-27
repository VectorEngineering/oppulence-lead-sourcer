import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateWithoutCreatorInputSchema } from './BankAccountCreateWithoutCreatorInputSchema'
import { BankAccountUncheckedCreateWithoutCreatorInputSchema } from './BankAccountUncheckedCreateWithoutCreatorInputSchema'
import { BankAccountCreateOrConnectWithoutCreatorInputSchema } from './BankAccountCreateOrConnectWithoutCreatorInputSchema'
import { BankAccountCreateManyCreatorInputEnvelopeSchema } from './BankAccountCreateManyCreatorInputEnvelopeSchema'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'

export const BankAccountCreateNestedManyWithoutCreatorInputSchema: z.ZodType<Prisma.BankAccountCreateNestedManyWithoutCreatorInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => BankAccountCreateWithoutCreatorInputSchema),
                z.lazy(() => BankAccountCreateWithoutCreatorInputSchema).array(),
                z.lazy(() => BankAccountUncheckedCreateWithoutCreatorInputSchema),
                z.lazy(() => BankAccountUncheckedCreateWithoutCreatorInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BankAccountCreateOrConnectWithoutCreatorInputSchema),
                z.lazy(() => BankAccountCreateOrConnectWithoutCreatorInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => BankAccountCreateManyCreatorInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => BankAccountWhereUniqueInputSchema), z.lazy(() => BankAccountWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default BankAccountCreateNestedManyWithoutCreatorInputSchema
