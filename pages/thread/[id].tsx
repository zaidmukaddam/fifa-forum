import { useRouter } from "next/router";
import { useEffect } from "react";
import { Text } from "@mantine/core"

export default function Thread() {
   
    const router = useRouter();
    const { query  } = useRouter();
    const { id } = query
    useEffect(() => {
        if(id) {
            router.push(`/b/fifa-2022/${id}`)
        }
    }, [id, router])

    return <Text>Redirecting to the default board...</Text>
}
