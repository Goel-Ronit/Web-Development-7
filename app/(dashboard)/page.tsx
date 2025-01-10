import DashboardPage from "./_components/dashboard";

interface PageProps {
    searchParams: Promise<{
        search?: string;
        favorites?: string;
    }>;
}

const Page = async (props: PageProps) => {
    const searchParams = await props.searchParams;
    return ( 
        <DashboardPage searchParams={searchParams} />
    );
};

export default Page;
