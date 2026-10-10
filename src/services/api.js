const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const IMG_URL = "https://image.tmdb.org/t/p/w500";

async function request(endpoint, params = {}) {
    const query = new URLSearchParams({ language: "pt-BR", ...params });

    const response = await fetch(`${BASE_URL}${endpoint}?${query}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Erro ${response.status} ao buscar ${endpoint}`);
    }

    return response.json();
}

export const getPopularMovies = (page = 1) =>
    request("/movie/popular", { page });

export const searchMovies = (query, page = 1) =>
    request("/search/movie", { query, page });

export const getMovieDetails = (id) =>
    request(`/movie/${id}`);
