export enum FilterType {
    'AGENCY',
    'CHATBOT',
    'DIGITAL_MARKETING',
    'GENERATION_LEADS',
    'PAID_MEDIA'
}

export type OrderByType = 'DATE'| 'NAME';

export type DataFilter = {
    id:FilterType;
    name: string;
}
export type DataOrderBy= {
    id:OrderByType;
    name: string;
}