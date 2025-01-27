import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadPersonalDetailsWhereInputSchema: z.ZodType<Prisma.LeadPersonalDetailsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadPersonalDetailsWhereInputSchema),z.lazy(() => LeadPersonalDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadPersonalDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadPersonalDetailsWhereInputSchema),z.lazy(() => LeadPersonalDetailsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  department: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phoneWork: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phoneMobile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  jobLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  yearsInRole: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  yearsInCompany: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  birthday: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  languages: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addressLine1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addressLine2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postalCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  communicationPreference: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeZone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  education: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  certifications: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  skills: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  decisionMaker: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  budgetAuthority: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  influenceLevel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict();

export default LeadPersonalDetailsWhereInputSchema;
