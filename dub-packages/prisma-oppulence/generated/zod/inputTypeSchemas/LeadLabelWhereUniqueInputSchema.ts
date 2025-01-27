import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadLabelLeadIdNameCompoundUniqueInputSchema } from './LeadLabelLeadIdNameCompoundUniqueInputSchema';
import { LeadLabelWhereInputSchema } from './LeadLabelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadLabelWhereUniqueInputSchema: z.ZodType<Prisma.LeadLabelWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    leadId_name: z.lazy(() => LeadLabelLeadIdNameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    leadId_name: z.lazy(() => LeadLabelLeadIdNameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  leadId_name: z.lazy(() => LeadLabelLeadIdNameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => LeadLabelWhereInputSchema),z.lazy(() => LeadLabelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadLabelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadLabelWhereInputSchema),z.lazy(() => LeadLabelWhereInputSchema).array() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict());

export default LeadLabelWhereUniqueInputSchema;
