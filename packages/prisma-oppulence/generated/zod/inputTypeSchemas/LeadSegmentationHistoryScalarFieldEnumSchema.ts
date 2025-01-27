import { z } from 'zod';

export const LeadSegmentationHistoryScalarFieldEnumSchema = z.enum(['id','segmentationId','previousSegments','newSegments','reason','createdAt']);

export default LeadSegmentationHistoryScalarFieldEnumSchema;
