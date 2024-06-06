import { Skeleton } from "../../components/ui/skeleton"


export default function TableSkeleton() {
    return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="ml-auto flex items-center gap-2 pe-8">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[120px]" />
            </div>
            <div className="ps-8 mr-auto flex items-center gap-2">
                <Skeleton className="h-10 w-[360px]" />
            </div>

            <div className="h-96 w-full bg-white flex flex-col mt-12 p-8">
                <Skeleton className="h-10 w-full mb-4" />
                <Skeleton className="h-10 w-full mb-4" />
                <Skeleton className="h-10 w-full mb-4" />
            </div>

        </div>
    )
}