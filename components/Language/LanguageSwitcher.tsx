import { LanguageSwitcherProps } from '@/data/global';
import { Link, translateUrl } from 'next-translate-routes';
import { capitalizeFirstLetter } from '@/lib/string';

export default function LanguageSwitcher({
    router
}: LanguageSwitcherProps) {
    const getLocales = () => {
        const locales = router.locales ?? [];
        return locales.filter(l => l !== router.locale);
    }
    const locales = getLocales();
    const href = router.route !== '/404' ? translateUrl(router.pathname, router.locale ?? '') : '/';

    return (
        <>
            {locales.map((locale: string) => (
                <Link
                    key={locale}
                    href={href}
                    locale={locale}
                    scroll={false}
                >
                    {capitalizeFirstLetter(locale)}
                </Link>
            ))}
        </>
    );
};