import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegisteredDomainWhereInputSchema } from './RegisteredDomainWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { DomainNullableRelationFilterSchema } from './DomainNullableRelationFilterSchema';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';

export const RegisteredDomainWhereUniqueInputSchema: z.ZodType<Prisma.RegisteredDomainWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    domainId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    domainId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  domainId: z.string().optional(),
  AND: z.union([ z.lazy(() => RegisteredDomainWhereInputSchema),z.lazy(() => RegisteredDomainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegisteredDomainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegisteredDomainWhereInputSchema),z.lazy(() => RegisteredDomainWhereInputSchema).array() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  domain: z.union([ z.lazy(() => DomainNullableRelationFilterSchema),z.lazy(() => DomainWhereInputSchema) ]).optional().nullable(),
}).strict());

export default RegisteredDomainWhereUniqueInputSchema;
