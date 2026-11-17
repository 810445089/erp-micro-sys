

export default function Vue3() {


    return <>
        <micro-app
            name="appname-vue3"
            url={import.meta.env.VITE_CHILD_VUE3_URL || '/child/vue3/'}
        ></micro-app>
    </>
}