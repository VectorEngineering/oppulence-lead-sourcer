import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutTemplateInputSchema } from './InvoiceCreateWithoutTemplateInputSchema';
import { InvoiceUncheckedCreateWithoutTemplateInputSchema } from './InvoiceUncheckedCreateWithoutTemplateInputSchema';
import { InvoiceCreateOrConnectWithoutTemplateInputSchema } from './InvoiceCreateOrConnectWithoutTemplateInputSchema';
import { InvoiceUpsertWithWhereUniqueWithoutTemplateInputSchema } from './InvoiceUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { InvoiceCreateManyTemplateInputEnvelopeSchema } from './InvoiceCreateManyTemplateInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithWhereUniqueWithoutTemplateInputSchema } from './InvoiceUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { InvoiceUpdateManyWithWhereWithoutTemplateInputSchema } from './InvoiceUpdateManyWithWhereWithoutTemplateInputSchema';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';

export const InvoiceUncheckedUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutTemplateInputSchema),z.lazy(() => InvoiceCreateWithoutTemplateInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoiceUpdateManyWithWhereWithoutTemplateInputSchema),z.lazy(() => InvoiceUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoiceScalarWhereInputSchema),z.lazy(() => InvoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUncheckedUpdateManyWithoutTemplateNestedInputSchema;
