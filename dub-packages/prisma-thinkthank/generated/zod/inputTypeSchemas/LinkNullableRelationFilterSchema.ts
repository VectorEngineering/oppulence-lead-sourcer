import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';

export const LinkNullableRelationFilterSchema: z.ZodType<Prisma.LinkNullableRelationFilter> = z.object({
  is: z.lazy(() => LinkWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LinkWhereInputSchema).optional().nullable()
}).strict();

export default LinkNullableRelationFilterSchema;
