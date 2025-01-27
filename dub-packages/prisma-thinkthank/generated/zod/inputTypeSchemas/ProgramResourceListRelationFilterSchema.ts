import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceWhereInputSchema } from './ProgramResourceWhereInputSchema';

export const ProgramResourceListRelationFilterSchema: z.ZodType<Prisma.ProgramResourceListRelationFilter> = z.object({
  every: z.lazy(() => ProgramResourceWhereInputSchema).optional(),
  some: z.lazy(() => ProgramResourceWhereInputSchema).optional(),
  none: z.lazy(() => ProgramResourceWhereInputSchema).optional()
}).strict();

export default ProgramResourceListRelationFilterSchema;
