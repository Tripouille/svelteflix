import type { MovieListResult } from './types';

export interface View {
	title: string;
	endpoint: string;
	href: string;
}

export interface ViewWithPendingResults extends View {
	results: Promise<MovieListResult[]>;
}

export interface ViewWithResults extends View {
	results: MovieListResult[];
}

export const views: Record<string, View> = {
	trending: {
		title: 'Trending',
		endpoint: 'trending/movie/day',
		href: '/movies/trending'
	},
	'now-playing': {
		title: 'Now playing',
		endpoint: 'movie/now_playing',
		href: '/movies/now-playing'
	},
	upcoming: {
		title: 'Upcoming',
		endpoint: 'movie/upcoming',
		href: '/movies/upcoming'
	}
};
