import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgest/ThemeSwitcher'
import { LangSwitcher } from 'widgest/LangSwitcher/ui/LangSwitcher'

interface SidebarProps {
    className?: string
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>

    )
}