import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserCreateWithoutUserInputSchema } from './PartnerUserCreateWithoutUserInputSchema';
import { PartnerUserUncheckedCreateWithoutUserInputSchema } from './PartnerUserUncheckedCreateWithoutUserInputSchema';
import { PartnerUserCreateOrConnectWithoutUserInputSchema } from './PartnerUserCreateOrConnectWithoutUserInputSchema';
import { PartnerUserCreateManyUserInputEnvelopeSchema } from './PartnerUserCreateManyUserInputEnvelopeSchema';
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema';

export const PartnerUserUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PartnerUserUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => PartnerUserCreateWithoutUserInputSchema),z.lazy(() => PartnerUserCreateWithoutUserInputSchema).array(),z.lazy(() => PartnerUserUncheckedCreateWithoutUserInputSchema),z.lazy(() => PartnerUserUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PartnerUserCreateOrConnectWithoutUserInputSchema),z.lazy(() => PartnerUserCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PartnerUserCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PartnerUserWhereUniqueInputSchema),z.lazy(() => PartnerUserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PartnerUserUncheckedCreateNestedManyWithoutUserInputSchema;
