import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutLinksInputSchema } from './ProgramCreateWithoutLinksInputSchema';
import { ProgramUncheckedCreateWithoutLinksInputSchema } from './ProgramUncheckedCreateWithoutLinksInputSchema';
import { ProgramCreateOrConnectWithoutLinksInputSchema } from './ProgramCreateOrConnectWithoutLinksInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutLinksInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutLinksInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutLinksInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutLinksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutLinksInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutLinksInputSchema;
