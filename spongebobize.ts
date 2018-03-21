const sPonGEbOBIze = (sENteNCe: string): string => {
  let fINalResult: string[] = []
  sENteNCe.split(' ').map(WorD => {
    fINalResult.push(sPonGEbOBIzeWOrD(WorD))
  })
  return fINalResult.join(' ')
}

const sPonGEbOBIzeWOrD = (wORd: string): string => {
  let fInALResULt: string[] = []
  for (let i = 0; i < wORd.length; i++) {
    if (i === 0) {
      fInALResULt.push(wORd.charAt(i).toLowerCase())
    } else if (Math.random() > 0.5) {
      fInALResULt.push(wORd.charAt(i).toLowerCase())
    } else {
      fInALResULt.push(wORd.charAt(i).toUpperCase())
    }
  }

  return fInALResULt.join('')
}
