import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumPartnerRoleFilterSchema } from './EnumPartnerRoleFilterSchema';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PartnerUserScalarWhereInputSchema: z.ZodType<Prisma.PartnerUserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PartnerUserScalarWhereInputSchema),z.lazy(() => PartnerUserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PartnerUserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PartnerUserScalarWhereInputSchema),z.lazy(() => PartnerUserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumPartnerRoleFilterSchema),z.lazy(() => PartnerRoleSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PartnerUserScalarWhereInputSchema;
