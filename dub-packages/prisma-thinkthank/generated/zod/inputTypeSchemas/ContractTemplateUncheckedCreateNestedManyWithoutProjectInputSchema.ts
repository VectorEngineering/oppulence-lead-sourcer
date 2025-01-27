import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractTemplateCreateWithoutProjectInputSchema } from './ContractTemplateCreateWithoutProjectInputSchema';
import { ContractTemplateUncheckedCreateWithoutProjectInputSchema } from './ContractTemplateUncheckedCreateWithoutProjectInputSchema';
import { ContractTemplateCreateOrConnectWithoutProjectInputSchema } from './ContractTemplateCreateOrConnectWithoutProjectInputSchema';
import { ContractTemplateCreateManyProjectInputEnvelopeSchema } from './ContractTemplateCreateManyProjectInputEnvelopeSchema';
import { ContractTemplateWhereUniqueInputSchema } from './ContractTemplateWhereUniqueInputSchema';

export const ContractTemplateUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ContractTemplateUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ContractTemplateCreateWithoutProjectInputSchema),z.lazy(() => ContractTemplateCreateWithoutProjectInputSchema).array(),z.lazy(() => ContractTemplateUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ContractTemplateUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContractTemplateCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ContractTemplateCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContractTemplateCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContractTemplateWhereUniqueInputSchema),z.lazy(() => ContractTemplateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ContractTemplateUncheckedCreateNestedManyWithoutProjectInputSchema;
