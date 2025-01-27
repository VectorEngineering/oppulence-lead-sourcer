import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FinancialSettingsWhereUniqueInputSchema } from './FinancialSettingsWhereUniqueInputSchema'
import { FinancialSettingsCreateWithoutUserInputSchema } from './FinancialSettingsCreateWithoutUserInputSchema'
import { FinancialSettingsUncheckedCreateWithoutUserInputSchema } from './FinancialSettingsUncheckedCreateWithoutUserInputSchema'

export const FinancialSettingsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.FinancialSettingsCreateOrConnectWithoutUserInput> = z
    .object({
        where: z.lazy(() => FinancialSettingsWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => FinancialSettingsCreateWithoutUserInputSchema),
            z.lazy(() => FinancialSettingsUncheckedCreateWithoutUserInputSchema)
        ])
    })
    .strict()

export default FinancialSettingsCreateOrConnectWithoutUserInputSchema
