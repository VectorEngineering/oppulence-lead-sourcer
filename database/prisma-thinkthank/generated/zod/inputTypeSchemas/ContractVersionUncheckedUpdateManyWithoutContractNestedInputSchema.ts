import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractVersionCreateWithoutContractInputSchema } from './ContractVersionCreateWithoutContractInputSchema';
import { ContractVersionUncheckedCreateWithoutContractInputSchema } from './ContractVersionUncheckedCreateWithoutContractInputSchema';
import { ContractVersionCreateOrConnectWithoutContractInputSchema } from './ContractVersionCreateOrConnectWithoutContractInputSchema';
import { ContractVersionUpsertWithWhereUniqueWithoutContractInputSchema } from './ContractVersionUpsertWithWhereUniqueWithoutContractInputSchema';
import { ContractVersionCreateManyContractInputEnvelopeSchema } from './ContractVersionCreateManyContractInputEnvelopeSchema';
import { ContractVersionWhereUniqueInputSchema } from './ContractVersionWhereUniqueInputSchema';
import { ContractVersionUpdateWithWhereUniqueWithoutContractInputSchema } from './ContractVersionUpdateWithWhereUniqueWithoutContractInputSchema';
import { ContractVersionUpdateManyWithWhereWithoutContractInputSchema } from './ContractVersionUpdateManyWithWhereWithoutContractInputSchema';
import { ContractVersionScalarWhereInputSchema } from './ContractVersionScalarWhereInputSchema';

export const ContractVersionUncheckedUpdateManyWithoutContractNestedInputSchema: z.ZodType<Prisma.ContractVersionUncheckedUpdateManyWithoutContractNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContractVersionCreateWithoutContractInputSchema),z.lazy(() => ContractVersionCreateWithoutContractInputSchema).array(),z.lazy(() => ContractVersionUncheckedCreateWithoutContractInputSchema),z.lazy(() => ContractVersionUncheckedCreateWithoutContractInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContractVersionCreateOrConnectWithoutContractInputSchema),z.lazy(() => ContractVersionCreateOrConnectWithoutContractInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ContractVersionUpsertWithWhereUniqueWithoutContractInputSchema),z.lazy(() => ContractVersionUpsertWithWhereUniqueWithoutContractInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContractVersionCreateManyContractInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ContractVersionWhereUniqueInputSchema),z.lazy(() => ContractVersionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ContractVersionWhereUniqueInputSchema),z.lazy(() => ContractVersionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ContractVersionWhereUniqueInputSchema),z.lazy(() => ContractVersionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ContractVersionWhereUniqueInputSchema),z.lazy(() => ContractVersionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ContractVersionUpdateWithWhereUniqueWithoutContractInputSchema),z.lazy(() => ContractVersionUpdateWithWhereUniqueWithoutContractInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ContractVersionUpdateManyWithWhereWithoutContractInputSchema),z.lazy(() => ContractVersionUpdateManyWithWhereWithoutContractInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ContractVersionScalarWhereInputSchema),z.lazy(() => ContractVersionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ContractVersionUncheckedUpdateManyWithoutContractNestedInputSchema;
