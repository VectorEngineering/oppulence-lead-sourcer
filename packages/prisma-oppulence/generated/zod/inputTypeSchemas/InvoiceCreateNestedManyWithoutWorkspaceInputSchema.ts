import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutWorkspaceInputSchema } from './InvoiceCreateWithoutWorkspaceInputSchema';
import { InvoiceUncheckedCreateWithoutWorkspaceInputSchema } from './InvoiceUncheckedCreateWithoutWorkspaceInputSchema';
import { InvoiceCreateOrConnectWithoutWorkspaceInputSchema } from './InvoiceCreateOrConnectWithoutWorkspaceInputSchema';
import { InvoiceCreateManyWorkspaceInputEnvelopeSchema } from './InvoiceCreateManyWorkspaceInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';

export const InvoiceCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.InvoiceCreateNestedManyWithoutWorkspaceInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutWorkspaceInputSchema),z.lazy(() => InvoiceCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyWorkspaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoiceCreateNestedManyWithoutWorkspaceInputSchema;
