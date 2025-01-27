import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { NestedEnumPartnerRoleFilterSchema } from './NestedEnumPartnerRoleFilterSchema';

export const EnumPartnerRoleFilterSchema: z.ZodType<Prisma.EnumPartnerRoleFilter> = z.object({
  equals: z.lazy(() => PartnerRoleSchema).optional(),
  in: z.lazy(() => PartnerRoleSchema).array().optional(),
  notIn: z.lazy(() => PartnerRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => PartnerRoleSchema),z.lazy(() => NestedEnumPartnerRoleFilterSchema) ]).optional(),
}).strict();

export default EnumPartnerRoleFilterSchema;
