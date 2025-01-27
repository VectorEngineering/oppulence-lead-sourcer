import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteWhereInputSchema } from './ProgramInviteWhereInputSchema';
import { ProgramInviteUpdateWithoutLinkInputSchema } from './ProgramInviteUpdateWithoutLinkInputSchema';
import { ProgramInviteUncheckedUpdateWithoutLinkInputSchema } from './ProgramInviteUncheckedUpdateWithoutLinkInputSchema';

export const ProgramInviteUpdateToOneWithWhereWithoutLinkInputSchema: z.ZodType<Prisma.ProgramInviteUpdateToOneWithWhereWithoutLinkInput> = z.object({
  where: z.lazy(() => ProgramInviteWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramInviteUpdateWithoutLinkInputSchema),z.lazy(() => ProgramInviteUncheckedUpdateWithoutLinkInputSchema) ]),
}).strict();

export default ProgramInviteUpdateToOneWithWhereWithoutLinkInputSchema;
