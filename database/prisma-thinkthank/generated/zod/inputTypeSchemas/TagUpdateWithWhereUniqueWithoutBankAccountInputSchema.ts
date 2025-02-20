import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutBankAccountInputSchema } from './TagUpdateWithoutBankAccountInputSchema';
import { TagUncheckedUpdateWithoutBankAccountInputSchema } from './TagUncheckedUpdateWithoutBankAccountInputSchema';

export const TagUpdateWithWhereUniqueWithoutBankAccountInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutBankAccountInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutBankAccountInputSchema),z.lazy(() => TagUncheckedUpdateWithoutBankAccountInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutBankAccountInputSchema;
