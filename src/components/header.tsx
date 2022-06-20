import Head from 'next/head'
import Link from 'next/link'

const Header: React.FC = () => (
  <>
    <Head>
      <title>FormationBoard</title>
    </Head>
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/' as='/'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>FormationBoard</span>
          </a>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='/board' as='/board'>
            <a className='mr-5 hover:text-gray-900'>戦術ボード</a>
          </Link>
        </nav>
      </div>
      <hr />
    </header>
  </>
)

export default Header
