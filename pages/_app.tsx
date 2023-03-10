import { AppProps } from "next/app";
import Head from "next/head";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import MainLayout from "../components/layouts/MainLayout";
import { useColorScheme, useLocalStorageValue } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

// @ts-ignore
import PrismRenderer from "prism-react-renderer/prism";

((typeof global !== "undefined" ? global : window) as any).Prism =
    PrismRenderer;

require("prismjs/components/prism-zig");
require("prismjs/components/prism-fsharp");
require("prismjs/components/prism-rust");

import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
import { SettingsContext, useSettings, __useSettingValues } from "../lib/settings";

NProgress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

process.env.FORUM = "http://localhost:3000";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: "color-scheme",
        defaultValue: preferredColorScheme,
    });
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    const settingValues = __useSettingValues()

    return (
        <>
            <Head>
                <title>Fifa&apos;s Cool Forum Software</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/fifa48.png"
                ></link>
                <link rel="icon" type="image/png" href="/fifa48.png"></link>
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{ colorScheme }}
                >
                    <ModalsProvider>
                        <NotificationsProvider>
                            <SettingsContext.Provider value={settingValues}>
                            <MainLayout>
                                <Component {...pageProps} />
                            </MainLayout>
                            </SettingsContext.Provider>
                        </NotificationsProvider>
                    </ModalsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}
