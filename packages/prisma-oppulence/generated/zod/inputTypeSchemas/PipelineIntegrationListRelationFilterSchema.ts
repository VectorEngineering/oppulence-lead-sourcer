import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineIntegrationWhereInputSchema } from './PipelineIntegrationWhereInputSchema';

export const PipelineIntegrationListRelationFilterSchema: z.ZodType<Prisma.PipelineIntegrationListRelationFilter> = z.object({
  every: z.lazy(() => PipelineIntegrationWhereInputSchema).optional(),
  some: z.lazy(() => PipelineIntegrationWhereInputSchema).optional(),
  none: z.lazy(() => PipelineIntegrationWhereInputSchema).optional()
}).strict();

export default PipelineIntegrationListRelationFilterSchema;
