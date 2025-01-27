import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutCompanyDetailsInputSchema } from './LeadCreateWithoutCompanyDetailsInputSchema';
import { LeadUncheckedCreateWithoutCompanyDetailsInputSchema } from './LeadUncheckedCreateWithoutCompanyDetailsInputSchema';

export const LeadCreateOrConnectWithoutCompanyDetailsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutCompanyDetailsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutCompanyDetailsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCompanyDetailsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutCompanyDetailsInputSchema;
