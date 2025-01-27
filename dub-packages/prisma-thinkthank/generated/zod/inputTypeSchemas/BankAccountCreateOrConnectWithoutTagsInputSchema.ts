import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountCreateWithoutTagsInputSchema } from './BankAccountCreateWithoutTagsInputSchema';
import { BankAccountUncheckedCreateWithoutTagsInputSchema } from './BankAccountUncheckedCreateWithoutTagsInputSchema';

export const BankAccountCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.BankAccountCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutTagsInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default BankAccountCreateOrConnectWithoutTagsInputSchema;
