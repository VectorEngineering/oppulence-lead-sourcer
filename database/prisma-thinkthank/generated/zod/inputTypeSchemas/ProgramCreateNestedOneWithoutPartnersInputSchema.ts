import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutPartnersInputSchema } from './ProgramCreateWithoutPartnersInputSchema';
import { ProgramUncheckedCreateWithoutPartnersInputSchema } from './ProgramUncheckedCreateWithoutPartnersInputSchema';
import { ProgramCreateOrConnectWithoutPartnersInputSchema } from './ProgramCreateOrConnectWithoutPartnersInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutPartnersInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutPartnersInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutPartnersInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutPartnersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutPartnersInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutPartnersInputSchema;
