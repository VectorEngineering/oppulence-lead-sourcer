import { z } from 'zod';

export const ContractApprovalScalarFieldEnumSchema = z.enum(['id','contractId','stage','status','approverRole','approverId','comments','createdAt','updatedAt']);

export default ContractApprovalScalarFieldEnumSchema;
