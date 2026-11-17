
import Sidebar from '@/components/sidebar'
import { Outlet } from 'react-router-dom'
export default function BasicLayout() {
    return <>
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <div className="router-container" style={{ }}>
                <Outlet />
            </div>
        </div>
    </>
}