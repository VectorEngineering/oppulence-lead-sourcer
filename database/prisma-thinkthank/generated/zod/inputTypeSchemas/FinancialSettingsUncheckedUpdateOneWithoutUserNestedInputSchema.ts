import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FinancialSettingsCreateWithoutUserInputSchema } from './FinancialSettingsCreateWithoutUserInputSchema';
import { FinancialSettingsUncheckedCreateWithoutUserInputSchema } from './FinancialSettingsUncheckedCreateWithoutUserInputSchema';
import { FinancialSettingsCreateOrConnectWithoutUserInputSchema } from './FinancialSettingsCreateOrConnectWithoutUserInputSchema';
import { FinancialSettingsUpsertWithoutUserInputSchema } from './FinancialSettingsUpsertWithoutUserInputSchema';
import { FinancialSettingsWhereInputSchema } from './FinancialSettingsWhereInputSchema';
import { FinancialSettingsWhereUniqueInputSchema } from './FinancialSettingsWhereUniqueInputSchema';
import { FinancialSettingsUpdateToOneWithWhereWithoutUserInputSchema } from './FinancialSettingsUpdateToOneWithWhereWithoutUserInputSchema';
import { FinancialSettingsUpdateWithoutUserInputSchema } from './FinancialSettingsUpdateWithoutUserInputSchema';
import { FinancialSettingsUncheckedUpdateWithoutUserInputSchema } from './FinancialSettingsUncheckedUpdateWithoutUserInputSchema';

export const FinancialSettingsUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.FinancialSettingsUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => FinancialSettingsCreateWithoutUserInputSchema),z.lazy(() => FinancialSettingsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FinancialSettingsCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => FinancialSettingsUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FinancialSettingsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FinancialSettingsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FinancialSettingsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FinancialSettingsUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => FinancialSettingsUpdateWithoutUserInputSchema),z.lazy(() => FinancialSettingsUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default FinancialSettingsUncheckedUpdateOneWithoutUserNestedInputSchema;
