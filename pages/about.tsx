import { Title, Text, Anchor, List, Group } from "@mantine/core";
import Head from "next/head";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Forum :: About</title>
            </Head>
            <Group direction="column" spacing="sm">
                <Title>About Project</Title>
                <Text>
                    you can learn more about this project and contribute to it
                    using these links:
                </Text>
                <List>
                    <List.Item>
                        ImageBoard2 (backend and POC ui):&nbsp;
                        <Anchor href="https://github.com/zaidmukaddam/imageboard2">
                            zaidmukaddam/imageboard2
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        Actual React UI (this app):&nbsp;
                        <Anchor href="https://github.com/zaidmukaddam/fifa-forum">
                            zaidmukaddam/fifa-forum
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        Efficient binary serialization format:&nbsp;
                        <Anchor href="https://github.com/zaidmukaddam/RoryBufs">
                            zaidmukaddam/RoryBufs
                        </Anchor>
                    </List.Item>
                </List>
            </Group>
        </>
    );
}
