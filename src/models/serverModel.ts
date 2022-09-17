import {PlotFull, PlotShort} from "./clientModel";

export interface ServerResponse<T> {
    searchType: string;
    expression: string;
    results: T[];
    errorMessage: string;
}

export interface Wikipedia {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    language: string;
    titleInLanguage: string;
    url: string;
    plotShort: PlotShort;
    plotFull: PlotFull;
    errorMessage: string;
}
