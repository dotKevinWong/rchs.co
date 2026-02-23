import fs from 'fs';
import path from 'path';

export async function getServerSideProps(context: { query: { slug: any; }; }) {
    const { slug } = context.query;
    const normalizedSlug = (Array.isArray(slug) ? slug[0] : slug)?.toLowerCase();
    try {
        const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'links', `${normalizedSlug}.json`), 'utf8'));
        return {
            redirect: {
                destination: config.invite,
                permanent: false,
            },
        }
    } catch (e) {
        return {
            redirect: {
                notFound: true,
            }
        }

    }
}

export default function Server() {
    return (
        <div>
        </div>
    )
}
