import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationScalarWhereInputSchema } from './ProgramApplicationScalarWhereInputSchema';
import { ProgramApplicationUpdateManyMutationInputSchema } from './ProgramApplicationUpdateManyMutationInputSchema';
import { ProgramApplicationUncheckedUpdateManyWithoutPartnerInputSchema } from './ProgramApplicationUncheckedUpdateManyWithoutPartnerInputSchema';

export const ProgramApplicationUpdateManyWithWhereWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateManyWithWhereWithoutPartnerInput> = z.object({
  where: z.lazy(() => ProgramApplicationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProgramApplicationUpdateManyMutationInputSchema),z.lazy(() => ProgramApplicationUncheckedUpdateManyWithoutPartnerInputSchema) ]),
}).strict();

export default ProgramApplicationUpdateManyWithWhereWithoutPartnerInputSchema;
