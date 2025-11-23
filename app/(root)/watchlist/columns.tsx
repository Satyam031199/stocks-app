"use client"

import { Button } from "@/components/ui/button";
import { formatChangePercent, getChangeColorClass } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<StockWithData>[] = [
    {
        accessorKey: "company",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Company
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "symbol",
        header: "Symbol",
    },
    {
        accessorKey: "currentPrice",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "changePercent",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Change
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const percentChange = formatChangePercent(row.getValue("changePercent"));
            return <span className={getChangeColorClass(row.getValue("changePercent"))}>{percentChange}</span>
        }
    },
    {
        accessorKey: "marketCap",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Market Cap
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "peRatio",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    P/E Ratio
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "alert",
        header: "Alert",
        cell: () => {
            return <Button className="add-alert">Add Alert</Button>
        }
    }
]
