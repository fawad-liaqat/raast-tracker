import React, { createContext, useContext } from 'react'
import { SOURCE_INDEX } from '../sources'

// Each page can provide its own numbering (the FY25 edition lists only the
// sources it uses). Default: the current edition's full list.
export const SourceIndexContext = createContext(SOURCE_INDEX)

// Inline source marker, for example <Src id="R1" p="31" /> renders [1, p. 31]
// and links to the matching entry in the Sources list.
function Src({ id, p }) {
  const index = useContext(SourceIndexContext)
  const n = index[id]
  if (!n) throw new Error(`Unknown source id ${id}`)
  return (
    <a href={`#source-${id}`} className="source-tag" title={`Source ${n}`}>
      [{n}{p ? `, p. ${p}` : ''}]
    </a>
  )
}

export default Src
