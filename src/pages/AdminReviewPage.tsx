/**
 * @file Implements the Admin Review Page.
 * @description An internal-facing page for administrators to review artist
 * verification requests. It displays requests in a table format.
 */
import { MainLayout } from '@/components/layout/MainLayout';
import { mockVerificationRequests } from '@/data/mock-admin-data';
import { VerificationRequest, VerificationRequestStatus } from '@/lib/admin-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from 'lucide-react';
export function AdminReviewPage(): JSX.Element {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Admin Review Panel
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage artist verification requests.
          </p>
        </div>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Artist Name</TableHead>
                <TableHead>Request Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Justification</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVerificationRequests.map((request: VerificationRequest) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.artistName}</TableCell>
                  <TableCell>{new Date(request.requestDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={request.status === 'Denied' ? 'destructive' : 'secondary'}
                      className={cn({
                        'bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80': request.status === 'Pending',
                        'bg-green-100 text-green-800 hover:bg-green-100/80': request.status === 'Approved',
                      })}
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-sm truncate">
                    {request.justification}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => console.log(`Approving request for ${request.artistName}`)}>
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log(`Denying request for ${request.artistName}`)}>
                          Deny
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log(`Viewing profile for ${request.artistName}`)}>
                          View Profile
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}