import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramCreateWithoutLinksInputSchema } from './ProgramCreateWithoutLinksInputSchema';
import { ProgramUncheckedCreateWithoutLinksInputSchema } from './ProgramUncheckedCreateWithoutLinksInputSchema';

export const ProgramCreateOrConnectWithoutLinksInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutLinksInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramCreateWithoutLinksInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutLinksInputSchema) ]),
}).strict();

export default ProgramCreateOrConnectWithoutLinksInputSchema;
