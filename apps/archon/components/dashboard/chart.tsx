'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Button } from '../ui/button'

const chartConfig = {
    views: {
        label: 'Overview',
        color: 'hsl(var(--chart-0))'
    },
    leads: {
        label: 'Leads',
        color: 'hsl(var(--chart-1))'
    },
    errors: {
        label: 'Errors',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig

export function Chart({ chartData, className }: { chartData: LeadAndErrorCountResults; className?: string }) {
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('leads')

    const total = React.useMemo(
        () => ({
            leads: chartData.reduce((acc, curr) => acc + curr.leads, 0),
            errors: chartData.reduce((acc, curr) => acc + curr.errors, 0)
        }),
        [chartData]
    )

    return (
        <Card className={cn('overflow-hidden shadow-none', className)}>
            <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:min-h-[99px] sm:flex-row'>
                <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-4'>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>Showing total lead and error counts for the past month</CardDescription>
                </div>
                <div className='grid grid-cols-2 border-t sm:flex sm:flex-row sm:border-t-0'>
                    {['leads', 'errors'].map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <Button
                                key={chart}
                                variant='ghost'
                                data-active={activeChart === chart}
                                className={cn(
                                    'hover:bg-muted/50 data-[active=true]:bg-muted/50 flex h-auto flex-col items-start justify-center gap-1 rounded-none border-0 px-4 py-3 font-normal',
                                    key === 'errors' && 'border-l'
                                )}
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className='text-muted-foreground text-xs'>{chartConfig[chart].label}</span>
                                <span className='text-lg font-bold leading-none sm:text-2xl'>
                                    {total[key as keyof typeof total].toLocaleString()}
                                </span>
                            </Button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className='p-0 sm:p-6'>
                <div className='h-[300px] w-full'>
                    <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width='100%' height='100%'>
                            <LineChart
                                data={chartData}
                                margin={{
                                    top: 16,
                                    right: 16,
                                    bottom: 16,
                                    left: 16
                                }}
                            >
                                <CartesianGrid vertical={false} strokeDasharray='3 3' />
                                <XAxis
                                    dataKey='date'
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    minTickGap={32}
                                    fontSize={12}
                                    tickFormatter={(value) => {
                                        const date = new Date(value)
                                        return date.toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric'
                                        })
                                    }}
                                />
                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent
                                            className='w-[150px]'
                                            nameKey='views'
                                            labelFormatter={(value) => {
                                                return new Date(value).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                    timeZone: 'UTC'
                                                })
                                            }}
                                        />
                                    }
                                />
                                <Line
                                    dataKey={activeChart}
                                    type='monotone'
                                    strokeWidth={2}
                                    dot={false}
                                    stroke={chartConfig[activeChart].color}
                                    activeDot={{
                                        r: 4,
                                        strokeWidth: 2
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    )
}
