import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const RegisteredDomainScalarWhereInputSchema: z.ZodType<Prisma.RegisteredDomainScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegisteredDomainScalarWhereInputSchema),z.lazy(() => RegisteredDomainScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegisteredDomainScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegisteredDomainScalarWhereInputSchema),z.lazy(() => RegisteredDomainScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  domainId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default RegisteredDomainScalarWhereInputSchema;
