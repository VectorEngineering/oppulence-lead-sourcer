import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxCreateWithoutTransactionInputSchema } from './InboxCreateWithoutTransactionInputSchema';
import { InboxUncheckedCreateWithoutTransactionInputSchema } from './InboxUncheckedCreateWithoutTransactionInputSchema';
import { InboxCreateOrConnectWithoutTransactionInputSchema } from './InboxCreateOrConnectWithoutTransactionInputSchema';
import { InboxUpsertWithWhereUniqueWithoutTransactionInputSchema } from './InboxUpsertWithWhereUniqueWithoutTransactionInputSchema';
import { InboxCreateManyTransactionInputEnvelopeSchema } from './InboxCreateManyTransactionInputEnvelopeSchema';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxUpdateWithWhereUniqueWithoutTransactionInputSchema } from './InboxUpdateWithWhereUniqueWithoutTransactionInputSchema';
import { InboxUpdateManyWithWhereWithoutTransactionInputSchema } from './InboxUpdateManyWithWhereWithoutTransactionInputSchema';
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema';

export const InboxUncheckedUpdateManyWithoutTransactionNestedInputSchema: z.ZodType<Prisma.InboxUncheckedUpdateManyWithoutTransactionNestedInput> = z.object({
  create: z.union([ z.lazy(() => InboxCreateWithoutTransactionInputSchema),z.lazy(() => InboxCreateWithoutTransactionInputSchema).array(),z.lazy(() => InboxUncheckedCreateWithoutTransactionInputSchema),z.lazy(() => InboxUncheckedCreateWithoutTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InboxCreateOrConnectWithoutTransactionInputSchema),z.lazy(() => InboxCreateOrConnectWithoutTransactionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InboxUpsertWithWhereUniqueWithoutTransactionInputSchema),z.lazy(() => InboxUpsertWithWhereUniqueWithoutTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InboxCreateManyTransactionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InboxWhereUniqueInputSchema),z.lazy(() => InboxWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InboxWhereUniqueInputSchema),z.lazy(() => InboxWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InboxWhereUniqueInputSchema),z.lazy(() => InboxWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InboxWhereUniqueInputSchema),z.lazy(() => InboxWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InboxUpdateWithWhereUniqueWithoutTransactionInputSchema),z.lazy(() => InboxUpdateWithWhereUniqueWithoutTransactionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InboxUpdateManyWithWhereWithoutTransactionInputSchema),z.lazy(() => InboxUpdateManyWithWhereWithoutTransactionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InboxScalarWhereInputSchema),z.lazy(() => InboxScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InboxUncheckedUpdateManyWithoutTransactionNestedInputSchema;
