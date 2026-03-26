import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ChronologicalPanel from "@/components/milestones/ChronologicalPanel";
import YearGridPanel from "@/components/milestones/YearGridPanel";
import MapViewPanel from "@/components/milestones/MapViewPanel";

export default function MilestonesTabs() {
  return (
    <Tabs defaultValue="chronological" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-4">
        <TabsTrigger value="chronological">Chronological</TabsTrigger>
        <TabsTrigger value="yeargrid">Year Grid</TabsTrigger>
        <TabsTrigger value="mapview">Map View</TabsTrigger>
      </TabsList>
      <TabsContent value="chronological">
        <ChronologicalPanel />
      </TabsContent>
      <TabsContent value="yeargrid">
        <YearGridPanel />
      </TabsContent>
      <TabsContent value="mapview">
        <MapViewPanel />
      </TabsContent>
    </Tabs>
  );
}
