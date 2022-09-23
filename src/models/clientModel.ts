export interface DirectorList {
    id: string;
    name: string;
}

export interface WriterList {
    id: string;
    name: string;
}

export interface StarList {
    id: string;
    name: string;
}

export interface ActorList {
    id: string;
    image: string;
    name: string;
    asCharacter: string;
}

export interface GenreList {
    key: string;
    value: string;
}

export interface CompanyList {
    id: string;
    name: string;
}

export interface CountryList {
    key: string;
    value: string;
}

export interface LanguageList {
    key: string;
    value: string;
}

export interface PlotShort {
    plainText: string;
    html: string;
}

export interface PlotFull {
    plainText: string;
    html: string;
}

export interface BoxOffice {
    budget: string;
    openingWeekendUSA: string;
    grossUSA: string;
    cumulativeWorldwideGross: string;
}

export interface Similar {
    id: string;
    title: string;
    image: string;
    imDbRating: string;
}
