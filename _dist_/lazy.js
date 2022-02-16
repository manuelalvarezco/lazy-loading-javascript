const isIntersecting = (entry) => {
  return entry.isIntersecting; // True or False (Dentro de la pantalla)
}

const accion = (entry) => {
  const node = entry.target;
  console.log('Hola');
  observer.unobserve(node);
}

const observer = new IntersectionObserver((entries)=>{
  entries.filter(isIntersecting).forEach(accion)
})

// Intersection Observer
export const registerImage = (image) =>{
  observer.observe(image)
}
