export default async function avifSupport() {
  return new Promise((resolve, reject)=>{
      const img = new Image()
      let avifSupport = true
      img.src = '../assets/sprint-images/content-first.avif'
      img.onerror = ()=>{
          avifSupport = false
          reject(avifSupport)
      }
      img.onload = ()=>{
          resolve(avifSupport)
      }
  })
}
