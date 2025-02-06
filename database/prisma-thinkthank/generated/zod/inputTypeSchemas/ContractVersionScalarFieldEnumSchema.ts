import { z } from 'zod';

export const ContractVersionScalarFieldEnumSchema = z.enum(['id','contractId','versionNumber','changeType','content','contentDiff','title','description','changelog','tags','fileUrl','fileType','fileSize','fileHash','status','isLatestVersion','isMajorVersion','reviewStatus','reviewedBy','reviewedAt','approvedBy','approvedAt','rejectionReason','signatures','signatureStatus','signedBy','signedAt','complianceStatus','complianceNotes','viewCount','downloadCount','lastViewedBy','lastViewedAt','createdAt','updatedAt','createdBy','updatedBy','archivedAt','archivedBy']);

export default ContractVersionScalarFieldEnumSchema;
