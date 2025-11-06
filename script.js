document.querySelectorAll('a[href]').forEach(link=>{
  const same=link.host===window.location.host
  if(!same)return
  link.addEventListener('click',e=>{
    e.preventDefault()
    document.body.style.opacity=0
    setTimeout(()=>window.location=link.href,150)
  })
})