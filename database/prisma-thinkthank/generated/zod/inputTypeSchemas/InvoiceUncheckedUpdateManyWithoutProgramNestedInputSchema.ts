import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutProgramInputSchema } from './InvoiceCreateWithoutProgramInputSchema';
import { InvoiceUncheckedCreateWithoutProgramInputSchema } from './InvoiceUncheckedCreateWithoutProgramInputSchema';
import { InvoiceCreateOrConnectWithoutProgramInputSchema } from './InvoiceCreateOrConnectWithoutProgramInputSchema';
import { InvoiceUpsertWithWhereUniqueWithoutProgramInputSchema } from './InvoiceUpsertWithWhereUniqueWithoutProgramInputSchema';
import { InvoiceCreateManyProgramInputEnvelopeSchema } from './InvoiceCreateManyProgramInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithWhereUniqueWithoutProgramInputSchema } from './InvoiceUpdateWithWhereUniqueWithoutProgramInputSchema';
import { InvoiceUpdateManyWithWhereWithoutProgramInputSchema } from './InvoiceUpdateManyWithWhereWithoutProgramInputSchema';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';

export const InvoiceUncheckedUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutProgramNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutProgramInputSchema),z.lazy(() => InvoiceCreateWithoutProgramInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutProgramInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutProgramInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyProgramInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoiceUpdateManyWithWhereWithoutProgramInputSchema),z.lazy(() => InvoiceUpdateManyWithWhereWithoutProgramInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoiceScalarWhereInputSchema),z.lazy(() => InvoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUncheckedUpdateManyWithoutProgramNestedInputSchema;
