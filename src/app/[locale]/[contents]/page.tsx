import React from "react";
import DataLayout from "@/components/data";

export default async function Page({
    params,
}: {
    params: Promise<{ contents: string }>
}) {
    const { contents } = await params;

    return (
        <div>
            <DataLayout contents={contents} />
        </div>
    );
}
