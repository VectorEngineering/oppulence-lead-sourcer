import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumPartnerRoleWithAggregatesFilterSchema } from './EnumPartnerRoleWithAggregatesFilterSchema';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PartnerUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PartnerUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PartnerUserScalarWhereWithAggregatesInputSchema),z.lazy(() => PartnerUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PartnerUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PartnerUserScalarWhereWithAggregatesInputSchema),z.lazy(() => PartnerUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumPartnerRoleWithAggregatesFilterSchema),z.lazy(() => PartnerRoleSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PartnerUserScalarWhereWithAggregatesInputSchema;
