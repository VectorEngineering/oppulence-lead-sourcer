import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerUserCreateWithoutPartnerInputSchema } from './PartnerUserCreateWithoutPartnerInputSchema';
import { PartnerUserUncheckedCreateWithoutPartnerInputSchema } from './PartnerUserUncheckedCreateWithoutPartnerInputSchema';
import { PartnerUserCreateOrConnectWithoutPartnerInputSchema } from './PartnerUserCreateOrConnectWithoutPartnerInputSchema';
import { PartnerUserUpsertWithWhereUniqueWithoutPartnerInputSchema } from './PartnerUserUpsertWithWhereUniqueWithoutPartnerInputSchema';
import { PartnerUserCreateManyPartnerInputEnvelopeSchema } from './PartnerUserCreateManyPartnerInputEnvelopeSchema';
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema';
import { PartnerUserUpdateWithWhereUniqueWithoutPartnerInputSchema } from './PartnerUserUpdateWithWhereUniqueWithoutPartnerInputSchema';
import { PartnerUserUpdateManyWithWhereWithoutPartnerInputSchema } from './PartnerUserUpdateManyWithWhereWithoutPartnerInputSchema';
import { PartnerUserScalarWhereInputSchema } from './PartnerUserScalarWhereInputSchema';

export const PartnerUserUpdateManyWithoutPartnerNestedInputSchema: z.ZodType<Prisma.PartnerUserUpdateManyWithoutPartnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => PartnerUserCreateWithoutPartnerInputSchema),z.lazy(() => PartnerUserCreateWithoutPartnerInputSchema).array(),z.lazy(() => PartnerUserUncheckedCreateWithoutPartnerInputSchema),z.lazy(() => PartnerUserUncheckedCreateWithoutPartnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PartnerUserCreateOrConnectWithoutPartnerInputSchema),z.lazy(() => PartnerUserCreateOrConnectWithoutPartnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PartnerUserUpsertWithWhereUniqueWithoutPartnerInputSchema),z.lazy(() => PartnerUserUpsertWithWhereUniqueWithoutPartnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PartnerUserCreateManyPartnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PartnerUserWhereUniqueInputSchema),z.lazy(() => PartnerUserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PartnerUserWhereUniqueInputSchema),z.lazy(() => PartnerUserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PartnerUserWhereUniqueInputSchema),z.lazy(() => PartnerUserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PartnerUserWhereUniqueInputSchema),z.lazy(() => PartnerUserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PartnerUserUpdateWithWhereUniqueWithoutPartnerInputSchema),z.lazy(() => PartnerUserUpdateWithWhereUniqueWithoutPartnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PartnerUserUpdateManyWithWhereWithoutPartnerInputSchema),z.lazy(() => PartnerUserUpdateManyWithWhereWithoutPartnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PartnerUserScalarWhereInputSchema),z.lazy(() => PartnerUserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PartnerUserUpdateManyWithoutPartnerNestedInputSchema;
