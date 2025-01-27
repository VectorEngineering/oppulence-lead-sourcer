import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommentWhereUniqueInputSchema } from './LeadCommentWhereUniqueInputSchema';
import { LeadCommentCreateWithoutLeadInputSchema } from './LeadCommentCreateWithoutLeadInputSchema';
import { LeadCommentUncheckedCreateWithoutLeadInputSchema } from './LeadCommentUncheckedCreateWithoutLeadInputSchema';

export const LeadCommentCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommentCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCommentCreateWithoutLeadInputSchema),z.lazy(() => LeadCommentUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadCommentCreateOrConnectWithoutLeadInputSchema;
