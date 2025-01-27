import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutSalesInputSchema } from './ProgramCreateWithoutSalesInputSchema';
import { ProgramUncheckedCreateWithoutSalesInputSchema } from './ProgramUncheckedCreateWithoutSalesInputSchema';
import { ProgramCreateOrConnectWithoutSalesInputSchema } from './ProgramCreateOrConnectWithoutSalesInputSchema';
import { ProgramUpsertWithoutSalesInputSchema } from './ProgramUpsertWithoutSalesInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutSalesInputSchema } from './ProgramUpdateToOneWithWhereWithoutSalesInputSchema';
import { ProgramUpdateWithoutSalesInputSchema } from './ProgramUpdateWithoutSalesInputSchema';
import { ProgramUncheckedUpdateWithoutSalesInputSchema } from './ProgramUncheckedUpdateWithoutSalesInputSchema';

export const ProgramUpdateOneRequiredWithoutSalesNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutSalesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutSalesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutSalesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutSalesInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutSalesInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutSalesInputSchema),z.lazy(() => ProgramUpdateWithoutSalesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutSalesInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneRequiredWithoutSalesNestedInputSchema;
