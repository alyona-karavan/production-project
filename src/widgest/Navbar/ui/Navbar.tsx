import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <nav className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                    className={styles.mainLink}
                >
                    {t('О нас')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Главная')}</AppLink>
            </nav>

        </div>
    );
};
