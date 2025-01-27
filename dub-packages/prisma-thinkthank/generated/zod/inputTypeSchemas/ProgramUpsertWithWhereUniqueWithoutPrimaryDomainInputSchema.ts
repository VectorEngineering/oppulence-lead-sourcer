import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateWithoutPrimaryDomainInputSchema } from './ProgramUpdateWithoutPrimaryDomainInputSchema';
import { ProgramUncheckedUpdateWithoutPrimaryDomainInputSchema } from './ProgramUncheckedUpdateWithoutPrimaryDomainInputSchema';
import { ProgramCreateWithoutPrimaryDomainInputSchema } from './ProgramCreateWithoutPrimaryDomainInputSchema';
import { ProgramUncheckedCreateWithoutPrimaryDomainInputSchema } from './ProgramUncheckedCreateWithoutPrimaryDomainInputSchema';

export const ProgramUpsertWithWhereUniqueWithoutPrimaryDomainInputSchema: z.ZodType<Prisma.ProgramUpsertWithWhereUniqueWithoutPrimaryDomainInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProgramUpdateWithoutPrimaryDomainInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutPrimaryDomainInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramCreateWithoutPrimaryDomainInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutPrimaryDomainInputSchema) ]),
}).strict();

export default ProgramUpsertWithWhereUniqueWithoutPrimaryDomainInputSchema;
