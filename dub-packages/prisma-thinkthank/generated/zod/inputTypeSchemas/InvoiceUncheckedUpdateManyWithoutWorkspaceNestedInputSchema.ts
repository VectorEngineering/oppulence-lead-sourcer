import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutWorkspaceInputSchema } from './InvoiceCreateWithoutWorkspaceInputSchema';
import { InvoiceUncheckedCreateWithoutWorkspaceInputSchema } from './InvoiceUncheckedCreateWithoutWorkspaceInputSchema';
import { InvoiceCreateOrConnectWithoutWorkspaceInputSchema } from './InvoiceCreateOrConnectWithoutWorkspaceInputSchema';
import { InvoiceUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './InvoiceUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { InvoiceCreateManyWorkspaceInputEnvelopeSchema } from './InvoiceCreateManyWorkspaceInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './InvoiceUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { InvoiceUpdateManyWithWhereWithoutWorkspaceInputSchema } from './InvoiceUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';

export const InvoiceUncheckedUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutWorkspaceInputSchema),z.lazy(() => InvoiceCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoiceUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => InvoiceUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoiceScalarWhereInputSchema),z.lazy(() => InvoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUncheckedUpdateManyWithoutWorkspaceNestedInputSchema;
