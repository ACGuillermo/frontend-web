import HomeLayout from 'layouts/HomeLayout'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

const Post = ({content}) => (
    <HomeLayout>
        <article className="w-full">
            <div className="markdown mx-auto pt-12 pb-20">
                <ReactMarkdown escapeHtml={false} source={content} />
            </div>
        </article>
    </HomeLayout>
)

export default Post

export async function getStaticPaths() {
    const files = fs.readdirSync(`${process.cwd()}/blogPosts`)
    
    const paths = files
        .filter(fName => fName.endsWith('.md'))
        .map(fName => {
            return {
                params: {
                    slug: fName.replace('.md', '')
                },
            }
        })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: {slug} }) {
    console.log(slug)
    const rawMarkdown = fs
        .readFileSync(path.join('blogPosts', slug + '.md'))
        .toString();

    const { data, content } = matter(rawMarkdown)

    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", dateOptions);

    const frontmatter = {
        ...data,
        date: formattedDate,
    }

    return {
        props: {
          content: `# ${data.title}\n${content}`,
          frontmatter,
        },
      }
}