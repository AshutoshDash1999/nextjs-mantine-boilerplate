"use client";

import { AppShell } from "@mantine/core";
import { DashboardHeader, DashboardSidebar } from "./_components";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      header={{
        height: 60,
      }}
      navbar={{
        width: 250,
        breakpoint: "sm",
      }}
      padding={0}
    >
      <AppShell.Header>
        <DashboardHeader />
      </AppShell.Header>

      <AppShell.Navbar>
        <DashboardSidebar />
      </AppShell.Navbar>

      <AppShell.Main
        style={{
          overflow: "auto",
        }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
