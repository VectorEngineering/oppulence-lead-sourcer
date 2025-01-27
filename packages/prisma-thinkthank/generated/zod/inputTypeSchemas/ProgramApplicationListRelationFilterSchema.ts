import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationWhereInputSchema } from './ProgramApplicationWhereInputSchema';

export const ProgramApplicationListRelationFilterSchema: z.ZodType<Prisma.ProgramApplicationListRelationFilter> = z.object({
  every: z.lazy(() => ProgramApplicationWhereInputSchema).optional(),
  some: z.lazy(() => ProgramApplicationWhereInputSchema).optional(),
  none: z.lazy(() => ProgramApplicationWhereInputSchema).optional()
}).strict();

export default ProgramApplicationListRelationFilterSchema;
