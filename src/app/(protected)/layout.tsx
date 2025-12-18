"use client";

import { AppShell, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DashboardHeader, DashboardSidebar } from "./_components";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <AppShell
      header={{
        height: 60,
      }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: {
          mobile: true,
          desktop: false,
        },
      }}
      padding={0}
    >
      <AppShell.Header>
        <DashboardHeader
          onBurgerClick={toggleDrawer}
          drawerOpened={drawerOpened}
        />
      </AppShell.Header>

      <AppShell.Navbar>
        <DashboardSidebar />
      </AppShell.Navbar>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Navigation"
        size="xs"
        padding="md"
      >
        <DashboardSidebar onItemClick={closeDrawer} />
      </Drawer>

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
