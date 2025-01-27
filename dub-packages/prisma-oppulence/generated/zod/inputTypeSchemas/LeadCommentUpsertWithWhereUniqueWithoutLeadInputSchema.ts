import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommentWhereUniqueInputSchema } from './LeadCommentWhereUniqueInputSchema';
import { LeadCommentUpdateWithoutLeadInputSchema } from './LeadCommentUpdateWithoutLeadInputSchema';
import { LeadCommentUncheckedUpdateWithoutLeadInputSchema } from './LeadCommentUncheckedUpdateWithoutLeadInputSchema';
import { LeadCommentCreateWithoutLeadInputSchema } from './LeadCommentCreateWithoutLeadInputSchema';
import { LeadCommentUncheckedCreateWithoutLeadInputSchema } from './LeadCommentUncheckedCreateWithoutLeadInputSchema';

export const LeadCommentUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommentUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadCommentUpdateWithoutLeadInputSchema),z.lazy(() => LeadCommentUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCommentCreateWithoutLeadInputSchema),z.lazy(() => LeadCommentUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadCommentUpsertWithWhereUniqueWithoutLeadInputSchema;
