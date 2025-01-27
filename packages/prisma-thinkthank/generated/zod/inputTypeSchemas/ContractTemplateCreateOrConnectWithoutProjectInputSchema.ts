import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractTemplateWhereUniqueInputSchema } from './ContractTemplateWhereUniqueInputSchema';
import { ContractTemplateCreateWithoutProjectInputSchema } from './ContractTemplateCreateWithoutProjectInputSchema';
import { ContractTemplateUncheckedCreateWithoutProjectInputSchema } from './ContractTemplateUncheckedCreateWithoutProjectInputSchema';

export const ContractTemplateCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ContractTemplateCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => ContractTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractTemplateCreateWithoutProjectInputSchema),z.lazy(() => ContractTemplateUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ContractTemplateCreateOrConnectWithoutProjectInputSchema;
