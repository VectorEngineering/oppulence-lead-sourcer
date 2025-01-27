import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountCreateWithoutTagsInputSchema } from './BankAccountCreateWithoutTagsInputSchema';
import { BankAccountUncheckedCreateWithoutTagsInputSchema } from './BankAccountUncheckedCreateWithoutTagsInputSchema';
import { BankAccountCreateOrConnectWithoutTagsInputSchema } from './BankAccountCreateOrConnectWithoutTagsInputSchema';
import { BankAccountUpsertWithWhereUniqueWithoutTagsInputSchema } from './BankAccountUpsertWithWhereUniqueWithoutTagsInputSchema';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithWhereUniqueWithoutTagsInputSchema } from './BankAccountUpdateWithWhereUniqueWithoutTagsInputSchema';
import { BankAccountUpdateManyWithWhereWithoutTagsInputSchema } from './BankAccountUpdateManyWithWhereWithoutTagsInputSchema';
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema';

export const BankAccountUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BankAccountCreateWithoutTagsInputSchema),z.lazy(() => BankAccountCreateWithoutTagsInputSchema).array(),z.lazy(() => BankAccountUncheckedCreateWithoutTagsInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankAccountCreateOrConnectWithoutTagsInputSchema),z.lazy(() => BankAccountCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BankAccountUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => BankAccountUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BankAccountScalarWhereInputSchema),z.lazy(() => BankAccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BankAccountUpdateManyWithoutTagsNestedInputSchema;
