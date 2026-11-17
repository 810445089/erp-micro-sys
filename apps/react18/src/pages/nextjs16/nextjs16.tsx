
import macroApp from '@micro-zoe/micro-app'


export default function Nextjs() {

    return <>
        <micro-app
            name="appname-nextjs16"
            url={import.meta.env.VITE_CHILD_NEXTJS_URL || '/child/nextjs/'}
            ssr
        ></micro-app>
    </>
}