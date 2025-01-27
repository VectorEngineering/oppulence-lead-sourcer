import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadNurturingScalarWhereInputSchema } from './LeadNurturingScalarWhereInputSchema';
import { LeadNurturingUpdateManyMutationInputSchema } from './LeadNurturingUpdateManyMutationInputSchema';
import { LeadNurturingUncheckedUpdateManyWithoutLeadInputSchema } from './LeadNurturingUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadNurturingUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadNurturingUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadNurturingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadNurturingUpdateManyMutationInputSchema),z.lazy(() => LeadNurturingUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadNurturingUpdateManyWithWhereWithoutLeadInputSchema;
