import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutBankAccountInputSchema } from './TagCreateWithoutBankAccountInputSchema';
import { TagUncheckedCreateWithoutBankAccountInputSchema } from './TagUncheckedCreateWithoutBankAccountInputSchema';

export const TagCreateOrConnectWithoutBankAccountInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutBankAccountInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutBankAccountInputSchema),z.lazy(() => TagUncheckedCreateWithoutBankAccountInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutBankAccountInputSchema;
