import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FinancialSettingsCreateWithoutUserInputSchema } from './FinancialSettingsCreateWithoutUserInputSchema';
import { FinancialSettingsUncheckedCreateWithoutUserInputSchema } from './FinancialSettingsUncheckedCreateWithoutUserInputSchema';
import { FinancialSettingsCreateOrConnectWithoutUserInputSchema } from './FinancialSettingsCreateOrConnectWithoutUserInputSchema';
import { FinancialSettingsWhereUniqueInputSchema } from './FinancialSettingsWhereUniqueInputSchema';

export const FinancialSettingsUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.FinancialSettingsUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => FinancialSettingsCreateWithoutUserInputSchema),z.lazy(() => FinancialSettingsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FinancialSettingsCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => FinancialSettingsWhereUniqueInputSchema).optional()
}).strict();

export default FinancialSettingsUncheckedCreateNestedOneWithoutUserInputSchema;
