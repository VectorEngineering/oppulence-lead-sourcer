import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema';
import { PartnerOrderByWithRelationInputSchema } from './PartnerOrderByWithRelationInputSchema';
import { InvoiceOrderByWithRelationInputSchema } from './InvoiceOrderByWithRelationInputSchema';
import { SaleOrderByRelationAggregateInputSchema } from './SaleOrderByRelationAggregateInputSchema';
import { PayoutOrderByRelevanceInputSchema } from './PayoutOrderByRelevanceInputSchema';

export const PayoutOrderByWithRelationInputSchema: z.ZodType<Prisma.PayoutOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  periodStart: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  periodEnd: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  stripeTransferId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
  partner: z.lazy(() => PartnerOrderByWithRelationInputSchema).optional(),
  invoice: z.lazy(() => InvoiceOrderByWithRelationInputSchema).optional(),
  sales: z.lazy(() => SaleOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => PayoutOrderByRelevanceInputSchema).optional()
}).strict();

export default PayoutOrderByWithRelationInputSchema;
