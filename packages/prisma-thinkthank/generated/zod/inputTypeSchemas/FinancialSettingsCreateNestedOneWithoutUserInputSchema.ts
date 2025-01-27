import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FinancialSettingsCreateWithoutUserInputSchema } from './FinancialSettingsCreateWithoutUserInputSchema'
import { FinancialSettingsUncheckedCreateWithoutUserInputSchema } from './FinancialSettingsUncheckedCreateWithoutUserInputSchema'
import { FinancialSettingsCreateOrConnectWithoutUserInputSchema } from './FinancialSettingsCreateOrConnectWithoutUserInputSchema'
import { FinancialSettingsWhereUniqueInputSchema } from './FinancialSettingsWhereUniqueInputSchema'

export const FinancialSettingsCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.FinancialSettingsCreateNestedOneWithoutUserInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => FinancialSettingsCreateWithoutUserInputSchema),
                z.lazy(() => FinancialSettingsUncheckedCreateWithoutUserInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => FinancialSettingsCreateOrConnectWithoutUserInputSchema).optional(),
        connect: z.lazy(() => FinancialSettingsWhereUniqueInputSchema).optional()
    })
    .strict()

export default FinancialSettingsCreateNestedOneWithoutUserInputSchema
