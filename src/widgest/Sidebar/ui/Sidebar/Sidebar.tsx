import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgest/ThemeSwitcher';
import { LangSwitcher } from 'widgest/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>

    );
};
