import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountCreateWithoutTagsInputSchema } from './BankAccountCreateWithoutTagsInputSchema';
import { BankAccountUncheckedCreateWithoutTagsInputSchema } from './BankAccountUncheckedCreateWithoutTagsInputSchema';
import { BankAccountCreateOrConnectWithoutTagsInputSchema } from './BankAccountCreateOrConnectWithoutTagsInputSchema';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';

export const BankAccountCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.BankAccountCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => BankAccountCreateWithoutTagsInputSchema),z.lazy(() => BankAccountCreateWithoutTagsInputSchema).array(),z.lazy(() => BankAccountUncheckedCreateWithoutTagsInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankAccountCreateOrConnectWithoutTagsInputSchema),z.lazy(() => BankAccountCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BankAccountCreateNestedManyWithoutTagsInputSchema;
