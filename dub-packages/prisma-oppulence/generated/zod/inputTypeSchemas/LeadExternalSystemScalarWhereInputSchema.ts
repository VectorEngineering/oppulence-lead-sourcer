import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumLeadExternalSystemProviderFilterSchema } from './EnumLeadExternalSystemProviderFilterSchema';
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const LeadExternalSystemScalarWhereInputSchema: z.ZodType<Prisma.LeadExternalSystemScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadExternalSystemScalarWhereInputSchema),z.lazy(() => LeadExternalSystemScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadExternalSystemScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadExternalSystemScalarWhereInputSchema),z.lazy(() => LeadExternalSystemScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => EnumLeadExternalSystemProviderFilterSchema),z.lazy(() => LeadExternalSystemProviderSchema) ]).optional(),
  externalId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastSynced: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  syncStatus: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default LeadExternalSystemScalarWhereInputSchema;
