import { useState } from "react";
import {
    ActionIcon,
    Affix,
    Anchor,
    AppShell,
    Burger,
    Button,
    Group,
    Header,
    MediaQuery,
    Navbar,
    Transition,
    useMantineColorScheme,
    useMantineTheme,
    Kbd,
    Badge,
} from "@mantine/core";
import { SiFifa } from "react-icons/si"
import { ArrowUpIcon, MoonIcon, SunIcon } from "@modulz/radix-icons";
import { MainLinks } from "./_mainLinks";
import { useWindowScroll } from "@mantine/hooks";
import { useRouter } from "next/router";

export default function MainLayout(props: { children: React.ReactNode }) {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [scroll, scrollTo] = useWindowScroll();
    const router = useRouter();

    const closeCurtain = () => setOpened(false);
    return (
        <AppShell
            // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
            navbarOffsetBreakpoint="sm"
            // fixed prop on AppShell will be automatically added to Header and Navbar
            fixed
            navbar={
                <Navbar
                    padding="md"
                    // Breakpoint at which navbar will be hidden if hidden prop is true
                    hiddenBreakpoint="sm"
                    // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
                    hidden={!opened}
                    // when viewport size is less than theme.breakpoints.sm navbar width is 100%
                    // viewport size > theme.breakpoints.sm – width is 300px
                    // viewport size > theme.breakpoints.lg – width is 400px
                    width={{ sm: 250, lg: 250 }}
                >
                    <Navbar.Section grow mt="xs">
                        <MainLinks closeCurtain={closeCurtain} />
                    </Navbar.Section>
                    {/* <Navbar.Section>
                        <User closeCuratin={closeCurtain} />
                    </Navbar.Section> */}
                </Navbar>
            }
            header={
                <Header height={70} padding="md">
                    <Group
                        style={{
                            height: "100%",
                            marginTop: 0,
                            marginBottom: 0,
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}
                        position="apart"
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <SiFifa size={40} />
                        <Anchor onClick={() => router.push("/")} color="yellow" underline={false} >
                            <Badge size="xl" radius={5} color="yellow">The FIFA Forum</Badge>
                        </Anchor>
                        <ActionIcon
                            variant="default"
                            onClick={() => toggleColorScheme()}
                            size={30}
                        >
                            {colorScheme === "dark" ? (
                                <SunIcon />
                            ) : (
                                <MoonIcon />
                            )}
                        </ActionIcon>
                    </Group>
                </Header>
            }
        >
            <>
                {props.children}
                <Affix position={{ bottom: 20, right: 20 }}>
                    <Transition transition="slide-up" mounted={scroll.y > 0}>
                        {(transitionStyles) => (
                            <Button
                                leftIcon={<ArrowUpIcon />}
                                style={transitionStyles}
                                onClick={() => scrollTo({ y: 0 })}
                            >
                                Top
                            </Button>
                        )}
                    </Transition>
                </Affix>
            </>
        </AppShell>
    );
}
