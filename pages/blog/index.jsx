import HomeLayout from 'layouts/HomeLayout'
import Link from 'next/link'



export default function Blog({posts}){
    console.log(posts[0].frontmatter)
    return(
        <HomeLayout>
            <div className="flex">
                <div className="w-full">
                    <h1 className="text-gray-800 text-lg font-bold md:w-1/3">Blog personal de <a href="/" className="text-indigo-600 underline hover:no-underline">Guillermo Aguilar</a></h1>
                    <p className="text-gray-600 text-sm">Lo intento...</p>
                </div>
            </div>
            <section id="posts">
                {posts.map(({ frontmatter: { title, description, date }, slug }) => (
                    <article key={title} className="mt-12">
                        <header>
                            <h2 className="text-4xl leading-10 font-bold text-indigo-600">
                                <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                                    <a>{title}</a>
                                </Link>
                            </h2>
                            <div className="mt-2">
                                <span className="text-xs">{date} <span className="font-bold">&middot;</span> ☕ 2 min lectura</span>
                            </div>
                        </header>
                        <section className="mt-1">
                            <p>{description}</p>
                        </section>
                    </article>
                ))}
            </section>
        </HomeLayout>
    )
}

export async function getStaticProps() {
    const fs = require('fs');
    const matter = require('gray-matter');

    const files = fs.readdirSync(`${process.cwd()}/blogPosts`)

    const posts = files
        .filter(fName => fName.endsWith('.md'))
        .map(fName => {
            console.log(fName)
            const rawMarkdownContent = fs
                .readFileSync(`${process.cwd()}/blogPosts/${fName}`)
                .toString();
            
            const { data } = matter(rawMarkdownContent);

            const dateOptions = {year: "numeric", month: "short", day: "numeric"}
            const formattedDate = data.date.toLocaleDateString("en-US", dateOptions)

            const frontmatter = {
                ...data,
                date: formattedDate
            }

            return {
                slug: fName.replace('.md', ''),
                frontmatter
            }
        })
    return {
        props: {
            posts,
        }
    }
}

