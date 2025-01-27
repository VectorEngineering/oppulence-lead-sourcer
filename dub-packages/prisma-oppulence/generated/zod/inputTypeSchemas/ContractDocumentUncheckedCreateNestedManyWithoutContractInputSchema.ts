import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentCreateWithoutContractInputSchema } from './ContractDocumentCreateWithoutContractInputSchema';
import { ContractDocumentUncheckedCreateWithoutContractInputSchema } from './ContractDocumentUncheckedCreateWithoutContractInputSchema';
import { ContractDocumentCreateOrConnectWithoutContractInputSchema } from './ContractDocumentCreateOrConnectWithoutContractInputSchema';
import { ContractDocumentCreateManyContractInputEnvelopeSchema } from './ContractDocumentCreateManyContractInputEnvelopeSchema';
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema';

export const ContractDocumentUncheckedCreateNestedManyWithoutContractInputSchema: z.ZodType<Prisma.ContractDocumentUncheckedCreateNestedManyWithoutContractInput> = z.object({
  create: z.union([ z.lazy(() => ContractDocumentCreateWithoutContractInputSchema),z.lazy(() => ContractDocumentCreateWithoutContractInputSchema).array(),z.lazy(() => ContractDocumentUncheckedCreateWithoutContractInputSchema),z.lazy(() => ContractDocumentUncheckedCreateWithoutContractInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContractDocumentCreateOrConnectWithoutContractInputSchema),z.lazy(() => ContractDocumentCreateOrConnectWithoutContractInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContractDocumentCreateManyContractInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContractDocumentWhereUniqueInputSchema),z.lazy(() => ContractDocumentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ContractDocumentUncheckedCreateNestedManyWithoutContractInputSchema;
