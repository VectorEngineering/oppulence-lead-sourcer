import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumIntegrationTypeFilterSchema } from './EnumIntegrationTypeFilterSchema';
import { IntegrationTypeSchema } from './IntegrationTypeSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { PipelineRelationFilterSchema } from './PipelineRelationFilterSchema';
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema';

export const PipelineIntegrationWhereInputSchema: z.ZodType<Prisma.PipelineIntegrationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PipelineIntegrationWhereInputSchema),z.lazy(() => PipelineIntegrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PipelineIntegrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PipelineIntegrationWhereInputSchema),z.lazy(() => PipelineIntegrationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pipelineId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumIntegrationTypeFilterSchema),z.lazy(() => IntegrationTypeSchema) ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  config: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  lastSyncedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  pipeline: z.union([ z.lazy(() => PipelineRelationFilterSchema),z.lazy(() => PipelineWhereInputSchema) ]).optional(),
}).strict();

export default PipelineIntegrationWhereInputSchema;
