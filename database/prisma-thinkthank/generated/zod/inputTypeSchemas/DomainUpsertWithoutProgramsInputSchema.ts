import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainUpdateWithoutProgramsInputSchema } from './DomainUpdateWithoutProgramsInputSchema';
import { DomainUncheckedUpdateWithoutProgramsInputSchema } from './DomainUncheckedUpdateWithoutProgramsInputSchema';
import { DomainCreateWithoutProgramsInputSchema } from './DomainCreateWithoutProgramsInputSchema';
import { DomainUncheckedCreateWithoutProgramsInputSchema } from './DomainUncheckedCreateWithoutProgramsInputSchema';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';

export const DomainUpsertWithoutProgramsInputSchema: z.ZodType<Prisma.DomainUpsertWithoutProgramsInput> = z.object({
  update: z.union([ z.lazy(() => DomainUpdateWithoutProgramsInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutProgramsInputSchema) ]),
  create: z.union([ z.lazy(() => DomainCreateWithoutProgramsInputSchema),z.lazy(() => DomainUncheckedCreateWithoutProgramsInputSchema) ]),
  where: z.lazy(() => DomainWhereInputSchema).optional()
}).strict();

export default DomainUpsertWithoutProgramsInputSchema;
