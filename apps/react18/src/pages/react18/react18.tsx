// import { microApp } from '@micro-app'

export default function React18() {
    function handleCreate() {
        console.log('child-react17 创建了')
    }

    function handleBeforeMount() {
        console.log('child-react17 即将被渲染')
    }

    function handleMount() {
        console.log('child-react17 已经渲染完成')

        setTimeout(() => {
            // changeMicroAppData({ msg: '来自基座的新数据' })
        }, 2000)
    }

    function handleUnmount() {
        console.log('child-react17 卸载了')
    }

    function handleError() {
        console.log('child-react17 加载出错了')
    }

    function handleDataChange(e: CustomEvent) {
        console.log('来自子应用 child-react17 的数据:', e.detail.data)
    }
    return <>
        <micro-app
            name="appname-react18"
            url={import.meta.env.VITE_CHILD_REACT18_URL || '/child/react18/'}
            onCreated={handleCreate}
            onBeforemount={handleBeforeMount}
            onMounted={handleMount}
            onUnmount={handleUnmount}
            onError={handleError}
            onDataChange={handleDataChange}
        ></micro-app>
    </>
}