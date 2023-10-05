import type { MovieListResult } from "./types";

export interface View {
    title: string;
    endpoint: string;
    href?: string;
}

export interface ViewWithPendingResults extends View {
    results: Promise<MovieListResult[]>;
};

export interface ViewWithResults extends View {
    results: MovieListResult[];
};

export const views: Record<string, View> = {
    trending: {
        title: 'Trending',
        endpoint: 'trending/movie/day'
    },
    nowPlaying: {
        title: 'Now playing',
        endpoint: 'movie/now_playing',
    },
    upcoming: {
        title: 'Upcoming',
        endpoint: 'movie/upcoming',
    }
}