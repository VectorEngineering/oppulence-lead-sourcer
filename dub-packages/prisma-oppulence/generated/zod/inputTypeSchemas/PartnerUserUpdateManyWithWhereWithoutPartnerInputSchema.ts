import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserScalarWhereInputSchema } from './PartnerUserScalarWhereInputSchema';
import { PartnerUserUpdateManyMutationInputSchema } from './PartnerUserUpdateManyMutationInputSchema';
import { PartnerUserUncheckedUpdateManyWithoutPartnerInputSchema } from './PartnerUserUncheckedUpdateManyWithoutPartnerInputSchema';

export const PartnerUserUpdateManyWithWhereWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerUserUpdateManyWithWhereWithoutPartnerInput> = z.object({
  where: z.lazy(() => PartnerUserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PartnerUserUpdateManyMutationInputSchema),z.lazy(() => PartnerUserUncheckedUpdateManyWithoutPartnerInputSchema) ]),
}).strict();

export default PartnerUserUpdateManyWithWhereWithoutPartnerInputSchema;
