import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';
import { LinkUpdateWithoutProgramInviteInputSchema } from './LinkUpdateWithoutProgramInviteInputSchema';
import { LinkUncheckedUpdateWithoutProgramInviteInputSchema } from './LinkUncheckedUpdateWithoutProgramInviteInputSchema';

export const LinkUpdateToOneWithWhereWithoutProgramInviteInputSchema: z.ZodType<Prisma.LinkUpdateToOneWithWhereWithoutProgramInviteInput> = z.object({
  where: z.lazy(() => LinkWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LinkUpdateWithoutProgramInviteInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutProgramInviteInputSchema) ]),
}).strict();

export default LinkUpdateToOneWithWhereWithoutProgramInviteInputSchema;
