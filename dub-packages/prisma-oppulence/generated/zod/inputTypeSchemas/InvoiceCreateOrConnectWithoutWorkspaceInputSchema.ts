import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceCreateWithoutWorkspaceInputSchema } from './InvoiceCreateWithoutWorkspaceInputSchema';
import { InvoiceUncheckedCreateWithoutWorkspaceInputSchema } from './InvoiceUncheckedCreateWithoutWorkspaceInputSchema';

export const InvoiceCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutWorkspaceInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default InvoiceCreateOrConnectWithoutWorkspaceInputSchema;
