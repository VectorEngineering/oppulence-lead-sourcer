import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { ContractArgsSchema } from "../outputTypeSchemas/ContractArgsSchema"
import { ContractFindManyArgsSchema } from "../outputTypeSchemas/ContractFindManyArgsSchema"
import { ContractEventFindManyArgsSchema } from "../outputTypeSchemas/ContractEventFindManyArgsSchema"
import { ContractApprovalFindManyArgsSchema } from "../outputTypeSchemas/ContractApprovalFindManyArgsSchema"
import { ContractDocumentFindManyArgsSchema } from "../outputTypeSchemas/ContractDocumentFindManyArgsSchema"
import { ContractVersionFindManyArgsSchema } from "../outputTypeSchemas/ContractVersionFindManyArgsSchema"
import { ContractCountOutputTypeArgsSchema } from "../outputTypeSchemas/ContractCountOutputTypeArgsSchema"

export const ContractIncludeSchema: z.ZodType<Prisma.ContractInclude> = z.object({
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  parentContract: z.union([z.boolean(),z.lazy(() => ContractArgsSchema)]).optional(),
  childContracts: z.union([z.boolean(),z.lazy(() => ContractFindManyArgsSchema)]).optional(),
  contractEvents: z.union([z.boolean(),z.lazy(() => ContractEventFindManyArgsSchema)]).optional(),
  contractApprovals: z.union([z.boolean(),z.lazy(() => ContractApprovalFindManyArgsSchema)]).optional(),
  contractDocuments: z.union([z.boolean(),z.lazy(() => ContractDocumentFindManyArgsSchema)]).optional(),
  contractVersions: z.union([z.boolean(),z.lazy(() => ContractVersionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ContractCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ContractIncludeSchema;
