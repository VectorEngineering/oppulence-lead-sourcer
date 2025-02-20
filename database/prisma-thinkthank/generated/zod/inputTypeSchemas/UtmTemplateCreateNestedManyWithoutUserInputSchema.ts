import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UtmTemplateCreateWithoutUserInputSchema } from './UtmTemplateCreateWithoutUserInputSchema';
import { UtmTemplateUncheckedCreateWithoutUserInputSchema } from './UtmTemplateUncheckedCreateWithoutUserInputSchema';
import { UtmTemplateCreateOrConnectWithoutUserInputSchema } from './UtmTemplateCreateOrConnectWithoutUserInputSchema';
import { UtmTemplateCreateManyUserInputEnvelopeSchema } from './UtmTemplateCreateManyUserInputEnvelopeSchema';
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema';

export const UtmTemplateCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UtmTemplateCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UtmTemplateCreateWithoutUserInputSchema),z.lazy(() => UtmTemplateCreateWithoutUserInputSchema).array(),z.lazy(() => UtmTemplateUncheckedCreateWithoutUserInputSchema),z.lazy(() => UtmTemplateUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UtmTemplateCreateOrConnectWithoutUserInputSchema),z.lazy(() => UtmTemplateCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UtmTemplateCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UtmTemplateWhereUniqueInputSchema),z.lazy(() => UtmTemplateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UtmTemplateCreateNestedManyWithoutUserInputSchema;
