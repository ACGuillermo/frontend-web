import Head from 'next/head';
import Header from 'components/header/Header';

const HomeLayout = (props) => (
    <>
        <Head>
            <title>Guillermo Aguilar - Full Stack Developer</title>
            <meta name='description' content={props.description}/>
        </Head>
        <Header />
        <main className="w-5/6 xl:w-4/6 mx-auto mt-6 xl:mt-20">
            {props.children}
        </main>
    </>
)

export default HomeLayout