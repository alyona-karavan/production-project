import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(styles.navbar, {}, [className])}>
        <nav className={styles.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/about"
                className={styles.mainLink}
            >
                About Page
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">Main Page</AppLink>
        </nav>

    </div>
);
