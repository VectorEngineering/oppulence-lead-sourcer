import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationWhereInputSchema } from './ProgramApplicationWhereInputSchema';

export const ProgramApplicationNullableRelationFilterSchema: z.ZodType<Prisma.ProgramApplicationNullableRelationFilter> = z.object({
  is: z.lazy(() => ProgramApplicationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProgramApplicationWhereInputSchema).optional().nullable()
}).strict();

export default ProgramApplicationNullableRelationFilterSchema;
