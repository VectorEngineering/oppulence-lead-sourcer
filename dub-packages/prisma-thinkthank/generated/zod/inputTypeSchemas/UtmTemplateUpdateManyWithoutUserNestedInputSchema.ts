import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UtmTemplateCreateWithoutUserInputSchema } from './UtmTemplateCreateWithoutUserInputSchema';
import { UtmTemplateUncheckedCreateWithoutUserInputSchema } from './UtmTemplateUncheckedCreateWithoutUserInputSchema';
import { UtmTemplateCreateOrConnectWithoutUserInputSchema } from './UtmTemplateCreateOrConnectWithoutUserInputSchema';
import { UtmTemplateUpsertWithWhereUniqueWithoutUserInputSchema } from './UtmTemplateUpsertWithWhereUniqueWithoutUserInputSchema';
import { UtmTemplateCreateManyUserInputEnvelopeSchema } from './UtmTemplateCreateManyUserInputEnvelopeSchema';
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema';
import { UtmTemplateUpdateWithWhereUniqueWithoutUserInputSchema } from './UtmTemplateUpdateWithWhereUniqueWithoutUserInputSchema';
import { UtmTemplateUpdateManyWithWhereWithoutUserInputSchema } from './UtmTemplateUpdateManyWithWhereWithoutUserInputSchema';
import { UtmTemplateScalarWhereInputSchema } from './UtmTemplateScalarWhereInputSchema';

export const UtmTemplateUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UtmTemplateUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UtmTemplateCreateWithoutUserInputSchema),z.lazy(() => UtmTemplateCreateWithoutUserInputSchema).array(),z.lazy(() => UtmTemplateUncheckedCreateWithoutUserInputSchema),z.lazy(() => UtmTemplateUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UtmTemplateCreateOrConnectWithoutUserInputSchema),z.lazy(() => UtmTemplateCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UtmTemplateUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UtmTemplateUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UtmTemplateCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UtmTemplateWhereUniqueInputSchema),z.lazy(() => UtmTemplateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UtmTemplateWhereUniqueInputSchema),z.lazy(() => UtmTemplateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UtmTemplateWhereUniqueInputSchema),z.lazy(() => UtmTemplateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UtmTemplateWhereUniqueInputSchema),z.lazy(() => UtmTemplateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UtmTemplateUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UtmTemplateUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UtmTemplateUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UtmTemplateUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UtmTemplateScalarWhereInputSchema),z.lazy(() => UtmTemplateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UtmTemplateUpdateManyWithoutUserNestedInputSchema;
