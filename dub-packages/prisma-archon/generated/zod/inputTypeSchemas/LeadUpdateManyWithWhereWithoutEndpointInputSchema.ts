import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema';
import { LeadUpdateManyMutationInputSchema } from './LeadUpdateManyMutationInputSchema';
import { LeadUncheckedUpdateManyWithoutEndpointInputSchema } from './LeadUncheckedUpdateManyWithoutEndpointInputSchema';

export const LeadUpdateManyWithWhereWithoutEndpointInputSchema: z.ZodType<Prisma.LeadUpdateManyWithWhereWithoutEndpointInput> = z.object({
  where: z.lazy(() => LeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateManyMutationInputSchema),z.lazy(() => LeadUncheckedUpdateManyWithoutEndpointInputSchema) ]),
}).strict();

export default LeadUpdateManyWithWhereWithoutEndpointInputSchema;
