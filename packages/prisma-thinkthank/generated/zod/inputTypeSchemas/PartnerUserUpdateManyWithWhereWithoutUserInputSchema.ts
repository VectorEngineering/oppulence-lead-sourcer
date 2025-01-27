import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserScalarWhereInputSchema } from './PartnerUserScalarWhereInputSchema';
import { PartnerUserUpdateManyMutationInputSchema } from './PartnerUserUpdateManyMutationInputSchema';
import { PartnerUserUncheckedUpdateManyWithoutUserInputSchema } from './PartnerUserUncheckedUpdateManyWithoutUserInputSchema';

export const PartnerUserUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PartnerUserUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => PartnerUserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PartnerUserUpdateManyMutationInputSchema),z.lazy(() => PartnerUserUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default PartnerUserUpdateManyWithWhereWithoutUserInputSchema;
