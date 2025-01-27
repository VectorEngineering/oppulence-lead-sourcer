import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationTypeSchema } from './IntegrationTypeSchema';
import { NestedEnumIntegrationTypeFilterSchema } from './NestedEnumIntegrationTypeFilterSchema';

export const EnumIntegrationTypeFilterSchema: z.ZodType<Prisma.EnumIntegrationTypeFilter> = z.object({
  equals: z.lazy(() => IntegrationTypeSchema).optional(),
  in: z.lazy(() => IntegrationTypeSchema).array().optional(),
  notIn: z.lazy(() => IntegrationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => IntegrationTypeSchema),z.lazy(() => NestedEnumIntegrationTypeFilterSchema) ]).optional(),
}).strict();

export default EnumIntegrationTypeFilterSchema;
