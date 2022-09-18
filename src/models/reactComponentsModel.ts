import {
    ActorList, BoxOffice,
    CompanyList,
    CountryList,
    DirectorList,
    GenreList,
    LanguageList, Similar,
    StarList,
    WriterList
} from "./clientModel";
import {Wikipedia} from "./serverModel";

export interface IFilm {
    id: string;
    resultType: string;
    image: string;
    title: string;
    description: string;
}

export interface IWiki {
    id: string;
    title: string;
    originalTitle: string;
    fullTitle: string;
    type: string;
    year: string;
    image: string;
    releaseDate: string;
    runtimeMins: string;
    runtimeStr: string;
    plot: string;
    plotLocal: string;
    plotLocalIsRtl: boolean;
    awards: string;
    directors: string;
    directorList: DirectorList[];
    writers: string;
    writerList: WriterList[];
    stars: string;
    starList: StarList[];
    actorList: ActorList[];
    fullCast?: any;
    genres: string;
    genreList: GenreList[];
    companies: string;
    companyList: CompanyList[];
    countries: string;
    countryList: CountryList[];
    languages: string;
    languageList: LanguageList[];
    contentRating: string;
    imDbRating: string;
    imDbRatingVotes: string;
    metacriticRating: string;
    ratings?: any;
    wikipedia: Wikipedia;
    posters?: any;
    images?: any;
    trailer?: any;
    boxOffice: BoxOffice;
    tagline?: any;
    keywords: string;
    keywordList: string[];
    similars: Similar[];
    tvSeriesInfo?: any;
    tvEpisodeInfo?: any;
    errorMessage?: any;
}