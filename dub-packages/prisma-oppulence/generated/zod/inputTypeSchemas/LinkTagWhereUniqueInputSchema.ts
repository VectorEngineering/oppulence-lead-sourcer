import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagLinkIdTagIdCompoundUniqueInputSchema } from './LinkTagLinkIdTagIdCompoundUniqueInputSchema';
import { LinkTagWhereInputSchema } from './LinkTagWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { LinkRelationFilterSchema } from './LinkRelationFilterSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const LinkTagWhereUniqueInputSchema: z.ZodType<Prisma.LinkTagWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    linkId_tagId: z.lazy(() => LinkTagLinkIdTagIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    linkId_tagId: z.lazy(() => LinkTagLinkIdTagIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  linkId_tagId: z.lazy(() => LinkTagLinkIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => LinkTagWhereInputSchema),z.lazy(() => LinkTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkTagWhereInputSchema),z.lazy(() => LinkTagWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => LinkRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict());

export default LinkTagWhereUniqueInputSchema;
