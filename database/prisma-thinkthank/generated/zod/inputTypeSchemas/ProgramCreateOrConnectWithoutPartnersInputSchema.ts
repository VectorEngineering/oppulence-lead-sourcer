import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramCreateWithoutPartnersInputSchema } from './ProgramCreateWithoutPartnersInputSchema';
import { ProgramUncheckedCreateWithoutPartnersInputSchema } from './ProgramUncheckedCreateWithoutPartnersInputSchema';

export const ProgramCreateOrConnectWithoutPartnersInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutPartnersInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramCreateWithoutPartnersInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutPartnersInputSchema) ]),
}).strict();

export default ProgramCreateOrConnectWithoutPartnersInputSchema;
