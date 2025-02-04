import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/elements.png"
                height={300}
                width={300}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No Favorite Boards!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try favoriting a board
            </p>
        </div>
    )
}