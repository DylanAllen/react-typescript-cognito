import { FunctionComponent } from 'react'
import { Anchor } from 'grommet'
import { useRouter } from 'next/router'

type pathProps = {
  path?: String
}

type pProps = typeof Anchor.arguments;

type NewProps = pProps & pathProps

const Link: FunctionComponent<NewProps> = (Props) => {
  const {path, label, href, ...rest} = Props;
  const router = useRouter()
  const goPath = (e: any) => {
    e.preventDefault();
    router.push(path);
  }
  if (path) {
    return (
      <Anchor label={label} onClick={goPath} {...rest} />
    )
  }
  return (
    <Anchor label={label} href={href} {...rest} />
  )
}

export default Link
