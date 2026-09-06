import { defaultLocale, locales, ui, type Locale, type UIKey } from './ui';

export function isLocale(x: string | undefined): x is Locale {
  return (locales as readonly string[]).includes(x ?? '');
}

/** Locale from Astro.currentLocale, falling back to the default. */
export function resolveLocale(current: string | undefined): Locale {
  return isLocale(current) ? current : defaultLocale;
}

/** `t('nav.home')` — typed keys, `{email}`-style placeholders. */
export function useTranslations(locale: Locale) {
  return (key: UIKey, vars: Record<string, string> = {}): string =>
    Object.entries(vars).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, v), ui[locale][key] as string);
}

/** Path for `slug` in `locale` ('' = home). Default locale lives at the root, others under /<locale>/. */
export function localePath(locale: Locale, slug = ''): string {
  const base = locale === defaultLocale ? '/' : `/${locale}/`;
  return slug ? `${base}${slug}/` : base;
}

export function otherLocale(locale: Locale): Locale {
  return locales.find((l) => l !== locale) ?? defaultLocale;
}

export const htmlLang: Record<Locale, string> = { zh: 'zh-Hans', en: 'en' };
