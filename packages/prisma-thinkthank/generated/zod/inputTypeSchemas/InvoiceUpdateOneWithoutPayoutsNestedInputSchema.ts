import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutPayoutsInputSchema } from './InvoiceCreateWithoutPayoutsInputSchema';
import { InvoiceUncheckedCreateWithoutPayoutsInputSchema } from './InvoiceUncheckedCreateWithoutPayoutsInputSchema';
import { InvoiceCreateOrConnectWithoutPayoutsInputSchema } from './InvoiceCreateOrConnectWithoutPayoutsInputSchema';
import { InvoiceUpsertWithoutPayoutsInputSchema } from './InvoiceUpsertWithoutPayoutsInputSchema';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateToOneWithWhereWithoutPayoutsInputSchema } from './InvoiceUpdateToOneWithWhereWithoutPayoutsInputSchema';
import { InvoiceUpdateWithoutPayoutsInputSchema } from './InvoiceUpdateWithoutPayoutsInputSchema';
import { InvoiceUncheckedUpdateWithoutPayoutsInputSchema } from './InvoiceUncheckedUpdateWithoutPayoutsInputSchema';

export const InvoiceUpdateOneWithoutPayoutsNestedInputSchema: z.ZodType<Prisma.InvoiceUpdateOneWithoutPayoutsNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutPayoutsInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutPayoutsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutPayoutsInputSchema).optional(),
  upsert: z.lazy(() => InvoiceUpsertWithoutPayoutsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InvoiceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InvoiceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InvoiceUpdateToOneWithWhereWithoutPayoutsInputSchema),z.lazy(() => InvoiceUpdateWithoutPayoutsInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutPayoutsInputSchema) ]).optional(),
}).strict();

export default InvoiceUpdateOneWithoutPayoutsNestedInputSchema;
