import { client } from '@/api/generated/client.gen';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

client.setConfig({ baseUrl: API_URL });

export { client };
