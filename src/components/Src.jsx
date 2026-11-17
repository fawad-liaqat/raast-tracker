import React from 'react'
import { SOURCE_INDEX } from '../sources'

// Inline source marker, for example <Src id="R1" p="31" /> renders [1, p. 31]
// and links to the matching entry in the Sources list.
function Src({ id, p }) {
  const n = SOURCE_INDEX[id]
  if (!n) throw new Error(`Unknown source id ${id}`)
  return (
    <a href={`#source-${id}`} className="source-tag" title={`Source ${n}`}>
      [{n}{p ? `, p. ${p}` : ''}]
    </a>
  )
}

export default Src
