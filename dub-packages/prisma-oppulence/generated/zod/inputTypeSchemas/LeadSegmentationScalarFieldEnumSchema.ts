import { z } from 'zod';

export const LeadSegmentationScalarFieldEnumSchema = z.enum(['id','leadId','industrySegment','companySize','geographicRegion','purchaseHistory','productUsage','engagementLevel','decisionMaking','innovationLevel','riskTolerance','customerLifetimeValue','profitabilitySegment','growthPotential','segmentTags','createdAt','updatedAt']);

export default LeadSegmentationScalarFieldEnumSchema;
