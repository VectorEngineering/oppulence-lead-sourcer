import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema';
import { UtmTemplateCreateWithoutUserInputSchema } from './UtmTemplateCreateWithoutUserInputSchema';
import { UtmTemplateUncheckedCreateWithoutUserInputSchema } from './UtmTemplateUncheckedCreateWithoutUserInputSchema';

export const UtmTemplateCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UtmTemplateCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UtmTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UtmTemplateCreateWithoutUserInputSchema),z.lazy(() => UtmTemplateUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UtmTemplateCreateOrConnectWithoutUserInputSchema;
