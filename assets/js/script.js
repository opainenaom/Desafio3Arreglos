
const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña.',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      costo: 4500,
      smoke: false,
      pets: true
    },

  ];
  
  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09',
      descripcion: 'Hermoso apartamento con vista impresionante al mar.',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a',
      descripcion: 'Condominio elegante en una zona residencial tranquila.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },

  ];
  

function renderizarPropiedades(propiedades, contenedorId) {

    const contenedor = document.getElementById(contenedorId);
    
    contenedor.innerHTML = '';
  
    propiedades.forEach(propiedad => {

      const propiedadCard = document.createElement('div');
      propiedadCard.classList.add('col-md-4', 'mb-4');
      
      propiedadCard.innerHTML = `
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad" />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
            
            <!-- Permitir fumar -->
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
              <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
              ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            
            <!-- Permitir mascotas -->
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
              <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> 
              ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      `;
      
      contenedor.appendChild(propiedadCard);
    });
  }
    