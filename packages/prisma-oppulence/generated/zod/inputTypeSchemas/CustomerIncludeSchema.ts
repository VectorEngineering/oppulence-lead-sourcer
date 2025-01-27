import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { LinkArgsSchema } from "../outputTypeSchemas/LinkArgsSchema"
import { SaleFindManyArgsSchema } from "../outputTypeSchemas/SaleFindManyArgsSchema"
import { CustomerTagFindManyArgsSchema } from "../outputTypeSchemas/CustomerTagFindManyArgsSchema"
import { ContractFindManyArgsSchema } from "../outputTypeSchemas/ContractFindManyArgsSchema"
import { InvoiceFindManyArgsSchema } from "../outputTypeSchemas/InvoiceFindManyArgsSchema"
import { CustomerCountOutputTypeArgsSchema } from "../outputTypeSchemas/CustomerCountOutputTypeArgsSchema"

export const CustomerIncludeSchema: z.ZodType<Prisma.CustomerInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
  sales: z.union([z.boolean(),z.lazy(() => SaleFindManyArgsSchema)]).optional(),
  CustomerTags: z.union([z.boolean(),z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
  Contracts: z.union([z.boolean(),z.lazy(() => ContractFindManyArgsSchema)]).optional(),
  Invoice: z.union([z.boolean(),z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CustomerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CustomerIncludeSchema;
