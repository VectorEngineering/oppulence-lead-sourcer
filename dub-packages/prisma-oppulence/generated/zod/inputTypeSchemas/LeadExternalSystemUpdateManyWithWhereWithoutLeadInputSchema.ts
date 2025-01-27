import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadExternalSystemScalarWhereInputSchema } from './LeadExternalSystemScalarWhereInputSchema';
import { LeadExternalSystemUpdateManyMutationInputSchema } from './LeadExternalSystemUpdateManyMutationInputSchema';
import { LeadExternalSystemUncheckedUpdateManyWithoutLeadInputSchema } from './LeadExternalSystemUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadExternalSystemUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadExternalSystemUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadExternalSystemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadExternalSystemUpdateManyMutationInputSchema),z.lazy(() => LeadExternalSystemUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadExternalSystemUpdateManyWithWhereWithoutLeadInputSchema;
