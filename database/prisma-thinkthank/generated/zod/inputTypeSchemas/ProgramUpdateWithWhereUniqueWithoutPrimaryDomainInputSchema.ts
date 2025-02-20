import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateWithoutPrimaryDomainInputSchema } from './ProgramUpdateWithoutPrimaryDomainInputSchema';
import { ProgramUncheckedUpdateWithoutPrimaryDomainInputSchema } from './ProgramUncheckedUpdateWithoutPrimaryDomainInputSchema';

export const ProgramUpdateWithWhereUniqueWithoutPrimaryDomainInputSchema: z.ZodType<Prisma.ProgramUpdateWithWhereUniqueWithoutPrimaryDomainInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutPrimaryDomainInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutPrimaryDomainInputSchema) ]),
}).strict();

export default ProgramUpdateWithWhereUniqueWithoutPrimaryDomainInputSchema;
