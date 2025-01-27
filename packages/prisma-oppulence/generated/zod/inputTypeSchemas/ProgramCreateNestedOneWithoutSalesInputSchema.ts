import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutSalesInputSchema } from './ProgramCreateWithoutSalesInputSchema';
import { ProgramUncheckedCreateWithoutSalesInputSchema } from './ProgramUncheckedCreateWithoutSalesInputSchema';
import { ProgramCreateOrConnectWithoutSalesInputSchema } from './ProgramCreateOrConnectWithoutSalesInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutSalesInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutSalesInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutSalesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutSalesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutSalesInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutSalesInputSchema;
