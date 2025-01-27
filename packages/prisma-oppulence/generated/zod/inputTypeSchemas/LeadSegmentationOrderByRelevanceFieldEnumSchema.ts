import { z } from 'zod';

export const LeadSegmentationOrderByRelevanceFieldEnumSchema = z.enum(['id','leadId','industrySegment','companySize','geographicRegion','engagementLevel','decisionMaking','innovationLevel','riskTolerance','profitabilitySegment','growthPotential','segmentTags']);

export default LeadSegmentationOrderByRelevanceFieldEnumSchema;
