import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function SchemaTable({ schema }: { schema: GeneralSchema[] }) {
    return (
        <div className='prose dark:prose-invert max-w-lg pb-6'>
            <h3>Schema</h3>
            <Table className='not-prose'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Field</TableHead>
                        <TableHead>Type</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {schema.map((field, index) => (
                        <TableRow key={`${field?.key}-${index}`}>
                            <TableCell>{field?.key}</TableCell>
                            <TableCell>{field?.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
