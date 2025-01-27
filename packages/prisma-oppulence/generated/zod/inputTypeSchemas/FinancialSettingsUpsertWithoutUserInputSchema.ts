import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FinancialSettingsUpdateWithoutUserInputSchema } from './FinancialSettingsUpdateWithoutUserInputSchema'
import { FinancialSettingsUncheckedUpdateWithoutUserInputSchema } from './FinancialSettingsUncheckedUpdateWithoutUserInputSchema'
import { FinancialSettingsCreateWithoutUserInputSchema } from './FinancialSettingsCreateWithoutUserInputSchema'
import { FinancialSettingsUncheckedCreateWithoutUserInputSchema } from './FinancialSettingsUncheckedCreateWithoutUserInputSchema'
import { FinancialSettingsWhereInputSchema } from './FinancialSettingsWhereInputSchema'

export const FinancialSettingsUpsertWithoutUserInputSchema: z.ZodType<Prisma.FinancialSettingsUpsertWithoutUserInput> = z
    .object({
        update: z.union([
            z.lazy(() => FinancialSettingsUpdateWithoutUserInputSchema),
            z.lazy(() => FinancialSettingsUncheckedUpdateWithoutUserInputSchema)
        ]),
        create: z.union([
            z.lazy(() => FinancialSettingsCreateWithoutUserInputSchema),
            z.lazy(() => FinancialSettingsUncheckedCreateWithoutUserInputSchema)
        ]),
        where: z.lazy(() => FinancialSettingsWhereInputSchema).optional()
    })
    .strict()

export default FinancialSettingsUpsertWithoutUserInputSchema
