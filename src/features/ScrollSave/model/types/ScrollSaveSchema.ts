// Адрес страницы, значение скролла
export type ScrollSchema = Record<string, number>;

export interface ScrollSaveSchema {
    scroll: ScrollSchema;
}
