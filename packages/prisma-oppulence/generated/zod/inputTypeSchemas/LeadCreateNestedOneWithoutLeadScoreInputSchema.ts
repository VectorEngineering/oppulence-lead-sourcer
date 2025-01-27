import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadScoreInputSchema } from './LeadCreateWithoutLeadScoreInputSchema';
import { LeadUncheckedCreateWithoutLeadScoreInputSchema } from './LeadUncheckedCreateWithoutLeadScoreInputSchema';
import { LeadCreateOrConnectWithoutLeadScoreInputSchema } from './LeadCreateOrConnectWithoutLeadScoreInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadScoreInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadScoreInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadScoreInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadScoreInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLeadScoreInputSchema;
