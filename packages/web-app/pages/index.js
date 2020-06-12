import foo from 'foo'
import Bar from 'bar'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


export default function Home() {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
      <ChevronLeftIcon />

    </div>
  )
}
