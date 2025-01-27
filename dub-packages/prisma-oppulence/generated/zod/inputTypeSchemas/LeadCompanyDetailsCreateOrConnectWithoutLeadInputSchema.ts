import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompanyDetailsWhereUniqueInputSchema } from './LeadCompanyDetailsWhereUniqueInputSchema';
import { LeadCompanyDetailsCreateWithoutLeadInputSchema } from './LeadCompanyDetailsCreateWithoutLeadInputSchema';
import { LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema';

export const LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompanyDetailsCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCompanyDetailsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCompanyDetailsCreateWithoutLeadInputSchema),z.lazy(() => LeadCompanyDetailsUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadCompanyDetailsCreateOrConnectWithoutLeadInputSchema;
