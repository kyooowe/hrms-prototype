//#region Import
import {
    ChevronLeft,
    ChevronRight,
    File,
    ListFilter,
    Pencil,
    Trash,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import MainLayout from "@/components/layout/main"
import {
    Pagination,
    PaginationContent,
    PaginationItem
} from "@/components/ui/pagination"
import Link from "next/link"
//#endregion

const EmployeeDashboard = () => {
    return (
        <MainLayout>
            <Tabs defaultValue="week">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="week">Week</TabsTrigger>
                        <TabsTrigger value="month">Month</TabsTrigger>
                        <TabsTrigger value="year">Year</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-7 gap-1 text-sm"
                                >
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only">Filter</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Regular
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Probitionary
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Resigned
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-7 gap-1 text-sm"
                        >
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">Export</span>
                        </Button>
                        <Button
                            size="sm"
                            className="h-7 gap-1 text-sm"
                        >
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">
                                <Link href="create">New Employee</Link>
                            </span>
                        </Button>
                    </div>
                </div>
                <TabsContent value="week">
                    <Card x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Employees</CardTitle>
                            <CardDescription>
                                Displaying Most Recent Entries First.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Employee</TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Job
                                        </TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Status
                                        </TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Date Hired
                                        </TableHead>
                                        <TableHead className=""></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="bg-accent">
                                        <TableCell>
                                            <div className="font-medium">Jane Doe</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                janedoe@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            Software Developer
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge className="text-xs" variant="secondary">
                                                Regular
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            2023-06-23
                                        </TableCell>
                                        <TableCell className="flex items-center justify-center gap-2">
                                            <Button variant="destructive" size="icon">
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">John Doe</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                johndoe@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            Software Analyst
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge className="text-xs" variant="secondary">
                                                Probitionary
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            2023-06-23
                                        </TableCell>
                                        <TableCell className="flex items-center justify-center gap-2">
                                            <Button variant="destructive" size="icon">
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                            <div className="text-xs text-muted-foreground">
                                Updated <time dateTime="2023-11-23">June 06, 2024</time>
                            </div>
                            <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                    <PaginationItem>
                                        <Button size="icon" variant="outline" className="h-6 w-6">
                                            <ChevronLeft className="h-3.5 w-3.5" />
                                            <span className="sr-only">Previous Order</span>
                                        </Button>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <Button size="icon" variant="outline" className="h-6 w-6">
                                            <ChevronRight className="h-3.5 w-3.5" />
                                            <span className="sr-only">Next Order</span>
                                        </Button>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </MainLayout>
    )
}

export default EmployeeDashboard
