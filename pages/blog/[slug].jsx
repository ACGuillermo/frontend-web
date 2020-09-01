import HomeLayout from 'layouts/HomeLayout'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('js', js);

function Image(props) {
    return <img {...props} className="w-full mx-auto" />
  }

const CodeBlock = ({ language, value }) => {
return <SyntaxHighlighter style={prism} showLineNumbers={true} language={language}>{value}</SyntaxHighlighter>;
};

const Post = ({content}) => (
    <HomeLayout>
        <article className="w-full">
            <div className="prose prose-sm md:prose-lg pt-12 pb-20">
                <ReactMarkdown escapeHtml={false} source={content} renderers={{image: Image, code: CodeBlock}}/>
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