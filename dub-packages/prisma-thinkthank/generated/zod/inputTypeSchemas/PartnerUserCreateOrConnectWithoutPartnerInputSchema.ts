import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema';
import { PartnerUserCreateWithoutPartnerInputSchema } from './PartnerUserCreateWithoutPartnerInputSchema';
import { PartnerUserUncheckedCreateWithoutPartnerInputSchema } from './PartnerUserUncheckedCreateWithoutPartnerInputSchema';

export const PartnerUserCreateOrConnectWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerUserCreateOrConnectWithoutPartnerInput> = z.object({
  where: z.lazy(() => PartnerUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PartnerUserCreateWithoutPartnerInputSchema),z.lazy(() => PartnerUserUncheckedCreateWithoutPartnerInputSchema) ]),
}).strict();

export default PartnerUserCreateOrConnectWithoutPartnerInputSchema;
