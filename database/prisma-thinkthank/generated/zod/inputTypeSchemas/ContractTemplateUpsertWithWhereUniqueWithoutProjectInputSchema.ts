import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractTemplateWhereUniqueInputSchema } from './ContractTemplateWhereUniqueInputSchema';
import { ContractTemplateUpdateWithoutProjectInputSchema } from './ContractTemplateUpdateWithoutProjectInputSchema';
import { ContractTemplateUncheckedUpdateWithoutProjectInputSchema } from './ContractTemplateUncheckedUpdateWithoutProjectInputSchema';
import { ContractTemplateCreateWithoutProjectInputSchema } from './ContractTemplateCreateWithoutProjectInputSchema';
import { ContractTemplateUncheckedCreateWithoutProjectInputSchema } from './ContractTemplateUncheckedCreateWithoutProjectInputSchema';

export const ContractTemplateUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ContractTemplateUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => ContractTemplateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ContractTemplateUpdateWithoutProjectInputSchema),z.lazy(() => ContractTemplateUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ContractTemplateCreateWithoutProjectInputSchema),z.lazy(() => ContractTemplateUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default ContractTemplateUpsertWithWhereUniqueWithoutProjectInputSchema;
