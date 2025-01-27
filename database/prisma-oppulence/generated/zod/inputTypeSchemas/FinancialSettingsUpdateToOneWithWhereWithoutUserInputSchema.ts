import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FinancialSettingsWhereInputSchema } from './FinancialSettingsWhereInputSchema'
import { FinancialSettingsUpdateWithoutUserInputSchema } from './FinancialSettingsUpdateWithoutUserInputSchema'
import { FinancialSettingsUncheckedUpdateWithoutUserInputSchema } from './FinancialSettingsUncheckedUpdateWithoutUserInputSchema'

export const FinancialSettingsUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.FinancialSettingsUpdateToOneWithWhereWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => FinancialSettingsWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => FinancialSettingsUpdateWithoutUserInputSchema),
                z.lazy(() => FinancialSettingsUncheckedUpdateWithoutUserInputSchema)
            ])
        })
        .strict()

export default FinancialSettingsUpdateToOneWithWhereWithoutUserInputSchema
