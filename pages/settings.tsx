import {
    Title,
    Group,
    Switch,
    Space,
    Divider,
    RadioGroup,
    Radio,
    InputWrapper,
    useMantineColorScheme,
} from "@mantine/core";
import Head from "next/head";
import { useSettings } from "../lib/settings";

export default function Settings() {
    const { colorizeReply, toggleColorizeReply, editor, setEditor, replyOrder, setReplyOrder } =
        useSettings();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <>
            <Head>
                <title>Forum :: Settings</title>
            </Head>
            <Group grow direction="column" spacing="sm">
                <Title order={1}>Settings</Title>
                <Divider
                    variant="dashed"
                    label={<Title order={3}>Appearence</Title>}
                />
                <Group direction="column">
                    <RadioGroup
                        label="Theme"
                        onChange={(theme) =>
                            toggleColorScheme(
                                theme === "dark" ? "dark" : "light"
                            )
                        }
                        value={colorScheme === "dark" ? "dark" : "light"}
                        description="prefered theme of website"
                    >
                        <Radio value="dark">Dark</Radio>
                        <Radio value="light">Light</Radio>
                    </RadioGroup>
                    <InputWrapper
                        label="Reply Colors"
                        description="assigns unique color per user hash"
                    >
                        <Switch
                            checked={colorizeReply === "true" ? true : false}
                            onChange={toggleColorizeReply}
                            label="Enable colored hashes"
                        />
                    </InputWrapper>
                </Group>

                <Space h="lg" />
                <Divider
                    variant="dashed"
                    label={<Title order={3}>Behaviour</Title>}
                />
                <Group direction="column">
                    <RadioGroup
                        label="Editor"
                        onChange={(ed) =>
                            setEditor(ed === "rich" ? "rich" : "plain")
                        }
                        value={editor === "plain" ? "plain" : "rich"}
                        description={
                            editor === "rich"
                                ? "rich editor with WYSIWYG preview"
                                : "simple native html editor with markdown support"
                        }
                    >
                        <Radio value="plain">Plain Editor</Radio>
                        <Radio value="rich">Rich Editor</Radio>
                    </RadioGroup>
                    <RadioGroup
                        label="Reply order"
                        onChange={(ro) =>
                            setReplyOrder(ro === "newer-first" ? "newer-first" : "older-first")
                        }
                        value={replyOrder === "newer-first" ? "newer-first" : "older-first"}
                        description={
                            replyOrder === "newer-first"
                                ? "newer replies will be shown first"
                                : "older replies will be shown first"
                        }
                    >
                        <Radio value="older-first">Older First</Radio>
                        <Radio value="newer-first">Newer First</Radio>
                    </RadioGroup>
                    <InputWrapper
                        label="Dev Tools"
                        description="enables additional options and menu that are used by developers"
                    >
                        <Switch checked disabled label="Use developer tools" />
                    </InputWrapper>
                </Group>
            </Group>
        </>
    );
}
