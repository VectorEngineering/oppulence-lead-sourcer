import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompanyDetailsUpdateWithoutLeadInputSchema } from './LeadCompanyDetailsUpdateWithoutLeadInputSchema';
import { LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema';
import { LeadCompanyDetailsCreateWithoutLeadInputSchema } from './LeadCompanyDetailsCreateWithoutLeadInputSchema';
import { LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema';
import { LeadCompanyDetailsWhereInputSchema } from './LeadCompanyDetailsWhereInputSchema';

export const LeadCompanyDetailsUpsertWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompanyDetailsUpsertWithoutLeadInput> = z.object({
  update: z.union([ z.lazy(() => LeadCompanyDetailsUpdateWithoutLeadInputSchema),z.lazy(() => LeadCompanyDetailsUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCompanyDetailsCreateWithoutLeadInputSchema),z.lazy(() => LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema) ]),
  where: z.lazy(() => LeadCompanyDetailsWhereInputSchema).optional()
}).strict();

export default LeadCompanyDetailsUpsertWithoutLeadInputSchema;
