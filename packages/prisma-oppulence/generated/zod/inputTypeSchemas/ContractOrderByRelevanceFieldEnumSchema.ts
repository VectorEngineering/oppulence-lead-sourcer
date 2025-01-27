import { z } from 'zod';

export const ContractOrderByRelevanceFieldEnumSchema = z.enum(['id','customerId','contractNumber','title','description','type','category','department','businessUnit','priority','status','stage','parentContractId','currency','billingFrequency','billingTerms','paymentTerms','renewalTerms','earlyTerminationTerms','terms','conditions','governingLaw','disputeResolution','confidentialityLevel','complianceStatus','riskLevel','contractOwner','counterpartyId','counterpartyName','counterpartyContact','witnesses','signatories','stakeholders','deliverables','milestones','slaTerms','performanceMetrics','obligations','penalties','insuranceRequirements','liabilityTerms','indemnificationTerms','intellectualProperty','licensedAssets','restrictions','documentUrl','supportingDocs','accessLevel','accessControlList','encryptionLevel','createdBy','updatedBy','reviewedBy','approvedBy','archivedBy']);

export default ContractOrderByRelevanceFieldEnumSchema;
