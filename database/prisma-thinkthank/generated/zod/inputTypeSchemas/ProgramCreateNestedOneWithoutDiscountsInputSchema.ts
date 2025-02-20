import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutDiscountsInputSchema } from './ProgramCreateWithoutDiscountsInputSchema';
import { ProgramUncheckedCreateWithoutDiscountsInputSchema } from './ProgramUncheckedCreateWithoutDiscountsInputSchema';
import { ProgramCreateOrConnectWithoutDiscountsInputSchema } from './ProgramCreateOrConnectWithoutDiscountsInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutDiscountsInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutDiscountsInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutDiscountsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutDiscountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutDiscountsInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutDiscountsInputSchema;
