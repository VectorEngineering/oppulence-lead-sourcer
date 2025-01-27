import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutResourcesInputSchema } from './ProgramCreateWithoutResourcesInputSchema';
import { ProgramUncheckedCreateWithoutResourcesInputSchema } from './ProgramUncheckedCreateWithoutResourcesInputSchema';
import { ProgramCreateOrConnectWithoutResourcesInputSchema } from './ProgramCreateOrConnectWithoutResourcesInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutResourcesInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutResourcesInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutResourcesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutResourcesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutResourcesInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutResourcesInputSchema;
