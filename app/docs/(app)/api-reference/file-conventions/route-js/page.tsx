
import { RouteJSPage } from "./(_shared)/server/RouteJS";
import { Article } from "@/components/server/ServerComponents";

export default function Page() {
    return (
        <Article title="route.js"
                 preview={<RouteJSPage />}  
                 architecture={null}
                 >
        </Article>
    )
}
