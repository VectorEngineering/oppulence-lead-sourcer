import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointScalarWhereInputSchema } from './LeadTouchpointScalarWhereInputSchema';
import { LeadTouchpointUpdateManyMutationInputSchema } from './LeadTouchpointUpdateManyMutationInputSchema';
import { LeadTouchpointUncheckedUpdateManyWithoutLeadInputSchema } from './LeadTouchpointUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadTouchpointUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadTouchpointUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadTouchpointScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadTouchpointUpdateManyMutationInputSchema),z.lazy(() => LeadTouchpointUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadTouchpointUpdateManyWithWhereWithoutLeadInputSchema;
