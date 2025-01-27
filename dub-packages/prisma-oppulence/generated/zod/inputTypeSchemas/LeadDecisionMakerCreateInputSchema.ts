import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateNestedOneWithoutDecisionMakersInputSchema } from './LeadCreateNestedOneWithoutDecisionMakersInputSchema';

export const LeadDecisionMakerCreateInputSchema: z.ZodType<Prisma.LeadDecisionMakerCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  influence: z.string(),
  notes: z.string().optional().nullable(),
  lead: z.lazy(() => LeadCreateNestedOneWithoutDecisionMakersInputSchema)
}).strict();

export default LeadDecisionMakerCreateInputSchema;
