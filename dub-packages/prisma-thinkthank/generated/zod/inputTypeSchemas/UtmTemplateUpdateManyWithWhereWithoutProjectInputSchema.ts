import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UtmTemplateScalarWhereInputSchema } from './UtmTemplateScalarWhereInputSchema';
import { UtmTemplateUpdateManyMutationInputSchema } from './UtmTemplateUpdateManyMutationInputSchema';
import { UtmTemplateUncheckedUpdateManyWithoutProjectInputSchema } from './UtmTemplateUncheckedUpdateManyWithoutProjectInputSchema';

export const UtmTemplateUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.UtmTemplateUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => UtmTemplateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UtmTemplateUpdateManyMutationInputSchema),z.lazy(() => UtmTemplateUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default UtmTemplateUpdateManyWithWhereWithoutProjectInputSchema;
