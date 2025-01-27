import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutAttachmentsInputSchema } from './DealCreateWithoutAttachmentsInputSchema';
import { DealUncheckedCreateWithoutAttachmentsInputSchema } from './DealUncheckedCreateWithoutAttachmentsInputSchema';
import { DealCreateOrConnectWithoutAttachmentsInputSchema } from './DealCreateOrConnectWithoutAttachmentsInputSchema';
import { DealUpsertWithWhereUniqueWithoutAttachmentsInputSchema } from './DealUpsertWithWhereUniqueWithoutAttachmentsInputSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithWhereUniqueWithoutAttachmentsInputSchema } from './DealUpdateWithWhereUniqueWithoutAttachmentsInputSchema';
import { DealUpdateManyWithWhereWithoutAttachmentsInputSchema } from './DealUpdateManyWithWhereWithoutAttachmentsInputSchema';
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema';

export const DealUncheckedUpdateManyWithoutAttachmentsNestedInputSchema: z.ZodType<Prisma.DealUncheckedUpdateManyWithoutAttachmentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutAttachmentsInputSchema),z.lazy(() => DealCreateWithoutAttachmentsInputSchema).array(),z.lazy(() => DealUncheckedCreateWithoutAttachmentsInputSchema),z.lazy(() => DealUncheckedCreateWithoutAttachmentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DealCreateOrConnectWithoutAttachmentsInputSchema),z.lazy(() => DealCreateOrConnectWithoutAttachmentsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DealUpsertWithWhereUniqueWithoutAttachmentsInputSchema),z.lazy(() => DealUpsertWithWhereUniqueWithoutAttachmentsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DealWhereUniqueInputSchema),z.lazy(() => DealWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DealUpdateWithWhereUniqueWithoutAttachmentsInputSchema),z.lazy(() => DealUpdateWithWhereUniqueWithoutAttachmentsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DealUpdateManyWithWhereWithoutAttachmentsInputSchema),z.lazy(() => DealUpdateManyWithWhereWithoutAttachmentsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DealScalarWhereInputSchema),z.lazy(() => DealScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DealUncheckedUpdateManyWithoutAttachmentsNestedInputSchema;
