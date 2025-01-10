"use client";

import { useOrganization } from "@clerk/nextjs";
import { use } from "react";
import { EmptyOrg } from "./empty-org";
import { BoardList } from "./board-list";

interface DashboardPageProps {
    searchParams: {
        search?: string;
        favorites?: string;
    };
}

const DashboardPage = (props: DashboardPageProps) => {
    const { organization } = useOrganization();
    return ( 
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (<EmptyOrg />) : (<BoardList orgId={organization.id} query={props.searchParams}/>)}
        </div> 
    );
};

export default DashboardPage;
