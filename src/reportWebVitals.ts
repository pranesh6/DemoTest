import { type ReportCallback } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportCallback): boolean => {
  if (onPerfEntry !== null && onPerfEntry !== undefined) {
    if (onPerfEntry instanceof Function) {
      import('web-vitals').then(({ onCLS, onFCP, onFID, onINP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry)
        onFCP(onPerfEntry)
        onFID(onPerfEntry)
        onINP(onPerfEntry)
        onLCP(onPerfEntry)
        onTTFB(onPerfEntry)
      }).catch((err) => { console.log(err) })
    }
  }
  return true
}

export default reportWebVitals
