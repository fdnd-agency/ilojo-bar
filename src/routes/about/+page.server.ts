import type { PageServerLoad } from './$types';
import { client } from '../../utils/utils'

export const load: PageServerLoad  = async () => {
	const query = `
    query Stories {
        stories {
            createdAt
            id
            publishedAt
            title
            updatedAt
        thumbnail {
            id
            url
        }
    }
}`;
	const data = await client({ query, fetch: fetch });

	return {
		stories: data.stories
	};
};
