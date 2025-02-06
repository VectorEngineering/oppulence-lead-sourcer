import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutCreateWithoutInvoiceInputSchema } from './PayoutCreateWithoutInvoiceInputSchema';
import { PayoutUncheckedCreateWithoutInvoiceInputSchema } from './PayoutUncheckedCreateWithoutInvoiceInputSchema';
import { PayoutCreateOrConnectWithoutInvoiceInputSchema } from './PayoutCreateOrConnectWithoutInvoiceInputSchema';
import { PayoutUpsertWithWhereUniqueWithoutInvoiceInputSchema } from './PayoutUpsertWithWhereUniqueWithoutInvoiceInputSchema';
import { PayoutCreateManyInvoiceInputEnvelopeSchema } from './PayoutCreateManyInvoiceInputEnvelopeSchema';
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema';
import { PayoutUpdateWithWhereUniqueWithoutInvoiceInputSchema } from './PayoutUpdateWithWhereUniqueWithoutInvoiceInputSchema';
import { PayoutUpdateManyWithWhereWithoutInvoiceInputSchema } from './PayoutUpdateManyWithWhereWithoutInvoiceInputSchema';
import { PayoutScalarWhereInputSchema } from './PayoutScalarWhereInputSchema';

export const PayoutUpdateManyWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.PayoutUpdateManyWithoutInvoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => PayoutCreateWithoutInvoiceInputSchema),z.lazy(() => PayoutCreateWithoutInvoiceInputSchema).array(),z.lazy(() => PayoutUncheckedCreateWithoutInvoiceInputSchema),z.lazy(() => PayoutUncheckedCreateWithoutInvoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PayoutCreateOrConnectWithoutInvoiceInputSchema),z.lazy(() => PayoutCreateOrConnectWithoutInvoiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PayoutUpsertWithWhereUniqueWithoutInvoiceInputSchema),z.lazy(() => PayoutUpsertWithWhereUniqueWithoutInvoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PayoutCreateManyInvoiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PayoutWhereUniqueInputSchema),z.lazy(() => PayoutWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PayoutWhereUniqueInputSchema),z.lazy(() => PayoutWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PayoutWhereUniqueInputSchema),z.lazy(() => PayoutWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PayoutWhereUniqueInputSchema),z.lazy(() => PayoutWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PayoutUpdateWithWhereUniqueWithoutInvoiceInputSchema),z.lazy(() => PayoutUpdateWithWhereUniqueWithoutInvoiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PayoutUpdateManyWithWhereWithoutInvoiceInputSchema),z.lazy(() => PayoutUpdateManyWithWhereWithoutInvoiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PayoutScalarWhereInputSchema),z.lazy(() => PayoutScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PayoutUpdateManyWithoutInvoiceNestedInputSchema;
