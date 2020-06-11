import Link from 'next/link'
import Layout from '../components/Layout'
import MenuIcon from '@material-ui/icons/Menu'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a><MenuIcon /> About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
