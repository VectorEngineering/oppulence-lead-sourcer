import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema';
import { PartnerUserUpdateWithoutPartnerInputSchema } from './PartnerUserUpdateWithoutPartnerInputSchema';
import { PartnerUserUncheckedUpdateWithoutPartnerInputSchema } from './PartnerUserUncheckedUpdateWithoutPartnerInputSchema';
import { PartnerUserCreateWithoutPartnerInputSchema } from './PartnerUserCreateWithoutPartnerInputSchema';
import { PartnerUserUncheckedCreateWithoutPartnerInputSchema } from './PartnerUserUncheckedCreateWithoutPartnerInputSchema';

export const PartnerUserUpsertWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerUserUpsertWithWhereUniqueWithoutPartnerInput> = z.object({
  where: z.lazy(() => PartnerUserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PartnerUserUpdateWithoutPartnerInputSchema),z.lazy(() => PartnerUserUncheckedUpdateWithoutPartnerInputSchema) ]),
  create: z.union([ z.lazy(() => PartnerUserCreateWithoutPartnerInputSchema),z.lazy(() => PartnerUserUncheckedCreateWithoutPartnerInputSchema) ]),
}).strict();

export default PartnerUserUpsertWithWhereUniqueWithoutPartnerInputSchema;
