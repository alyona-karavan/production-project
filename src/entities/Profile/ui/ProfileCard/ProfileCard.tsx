import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Profile } from 'entities/Profile';
import { Input } from 'shared/ui/Input/Input';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка прии загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [styles.editing]: !readOnly,
    };

    return (
        <VStack gap="8" max className={classNames(styles.ProfileCard, {}, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={styles.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={styles.input}
                onChange={onChangeFirstName}
                readOnly={readOnly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={styles.input}
                onChange={onChangeLastName}
                readOnly={readOnly}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={styles.input}
                onChange={onChangeAge}
                readOnly={readOnly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={styles.input}
                onChange={onChangeCity}
                readOnly={readOnly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={styles.input}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={styles.input}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <CurrencySelect
                className={styles.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readOnly}
            />
            <CountrySelect
                className={styles.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readOnly}
            />
        </VStack>
    );
};
