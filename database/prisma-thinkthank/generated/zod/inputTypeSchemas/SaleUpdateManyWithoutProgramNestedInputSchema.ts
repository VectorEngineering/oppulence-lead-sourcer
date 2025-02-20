import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateWithoutProgramInputSchema } from './SaleCreateWithoutProgramInputSchema';
import { SaleUncheckedCreateWithoutProgramInputSchema } from './SaleUncheckedCreateWithoutProgramInputSchema';
import { SaleCreateOrConnectWithoutProgramInputSchema } from './SaleCreateOrConnectWithoutProgramInputSchema';
import { SaleUpsertWithWhereUniqueWithoutProgramInputSchema } from './SaleUpsertWithWhereUniqueWithoutProgramInputSchema';
import { SaleCreateManyProgramInputEnvelopeSchema } from './SaleCreateManyProgramInputEnvelopeSchema';
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema';
import { SaleUpdateWithWhereUniqueWithoutProgramInputSchema } from './SaleUpdateWithWhereUniqueWithoutProgramInputSchema';
import { SaleUpdateManyWithWhereWithoutProgramInputSchema } from './SaleUpdateManyWithWhereWithoutProgramInputSchema';
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema';

export const SaleUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.SaleUpdateManyWithoutProgramNestedInput> = z.object({
  create: z.union([ z.lazy(() => SaleCreateWithoutProgramInputSchema),z.lazy(() => SaleCreateWithoutProgramInputSchema).array(),z.lazy(() => SaleUncheckedCreateWithoutProgramInputSchema),z.lazy(() => SaleUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SaleCreateOrConnectWithoutProgramInputSchema),z.lazy(() => SaleCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SaleUpsertWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => SaleUpsertWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SaleCreateManyProgramInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SaleWhereUniqueInputSchema),z.lazy(() => SaleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SaleUpdateWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => SaleUpdateWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SaleUpdateManyWithWhereWithoutProgramInputSchema),z.lazy(() => SaleUpdateManyWithWhereWithoutProgramInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SaleScalarWhereInputSchema),z.lazy(() => SaleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SaleUpdateManyWithoutProgramNestedInputSchema;
