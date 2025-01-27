import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompanyDetailsWhereInputSchema } from './LeadCompanyDetailsWhereInputSchema';

export const LeadCompanyDetailsNullableRelationFilterSchema: z.ZodType<Prisma.LeadCompanyDetailsNullableRelationFilter> = z.object({
  is: z.lazy(() => LeadCompanyDetailsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LeadCompanyDetailsWhereInputSchema).optional().nullable()
}).strict();

export default LeadCompanyDetailsNullableRelationFilterSchema;
