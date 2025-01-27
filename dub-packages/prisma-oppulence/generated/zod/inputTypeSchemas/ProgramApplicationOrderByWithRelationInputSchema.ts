import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PartnerOrderByWithRelationInputSchema } from './PartnerOrderByWithRelationInputSchema';
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema';
import { ProgramEnrollmentOrderByWithRelationInputSchema } from './ProgramEnrollmentOrderByWithRelationInputSchema';
import { ProgramApplicationOrderByRelevanceInputSchema } from './ProgramApplicationOrderByRelevanceInputSchema';

export const ProgramApplicationOrderByWithRelationInputSchema: z.ZodType<Prisma.ProgramApplicationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  proposal: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  website: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  partner: z.lazy(() => PartnerOrderByWithRelationInputSchema).optional(),
  program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
  enrollment: z.lazy(() => ProgramEnrollmentOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ProgramApplicationOrderByRelevanceInputSchema).optional()
}).strict();

export default ProgramApplicationOrderByWithRelationInputSchema;
