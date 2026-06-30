const categories = [
    {
      title: "Polk Up",
      projects: [
        {
          student: "Mateo Mackay",
          image: "assets/img/mateo.png",
          gif: "assets/gif/mateo.gif",
          url: "https://mmackay7exe.github.io/PolkUp---Mateo-Mackay-O/"
        },
        {
          student: "Antonia Pino",
          image: "assets/img/antonia-pino.png",
          gif: "assets/gif/antonia-pino.gif",
          url: "https://antoniapinosalinas.github.io/PolkUp.sitioweb.ap/"
        },
        {
          student: "Sofía Rojas",
          image: "assets/img/sofia-rojas.png",
          gif: "assets/gif/sofia-rojas.gif",
          url: "https://sofiarojasm01-creator.github.io/Repositorio-ciclo-3-Polkup-srm/"
        }
      ]
    },
    {
      title: "Cuadriculando",
      projects: [
        {
          student: "Fernanda Cortés",
          image: "assets/img/fernanda-cortes.png",
          gif: "assets/gif/fernanda-cortes.gif",
          url: "https://cortesfernanda.github.io/Cuadriculando_FernandaCortes/"
        },
        {
          student: "Catalina González",
          image: "assets/img/catalina-gonzalez.png",
          gif: "assets/gif/catalina-gonzalez.gif",
          url: "https://cataagonz.github.io/Repositorio-cuadriculando/"
        },
        {
          student: "Elizabeth Hormazabal",
          image: "assets/img/elizabeth.png",
          gif: "assets/gif/elizabeth.gif",
          url: "https://bethieve.github.io/U3-Cuadriculando-Elizabeth/"
        }
      ]
    },
    {
      title: "Dale Forma",
      projects: [
        {
          student: "Renata Bocca",
          image: "assets/img/renata.png",
          gif: "assets/gif/renata.gif",
          url: "https://renataboccau-ship-it.github.io/U3_Dale-Forma.Renata-Bocca/"
        },
        {
          student: "Mauro Silva",
          image: "assets/img/mauro.png",
          gif: "assets/gif/mauro.gif",
          url: "https://maurisv.github.io/U3-Mauro-Silva/"
        },
        {
          student: "Misael Vergara",
          image: "assets/img/misael.png",
          gif: "assets/gif/misael.gif",
          url: "https://misver-c.github.io/Dale-Forma---Misael-Vergara-2026/"
        }
      ]
    },
    {
      title: "Conectando",
      projects: [
        {
          student: "Martina Elizondo",
          image: "assets/img/martina.png",
          gif: "assets/gif/martina.gif",
          url: "https://martielzs.github.io/Conectando_Martina.Elizondo/"
        },
        {
          student: "Annelys Mendez",
          image: "assets/img/annelys.png",
          gif: "assets/gif/annelys.gif",
          url: "https://amfeliz.github.io/U3-Annelys-Mendez-Feliz-Landing/"
        },
        {
          student: "Sofía Segura",
          image: "assets/img/sofia-segura.png",
          gif: "assets/gif/sofia-segura.gif",
          url: "https://sofiasegura.github.io/TDI-U3-SOF-ASEGURA-CONECTANDO-REPOSITORIO/"
        }
      ]
    },
    {
      title: "Catapultazo",
      projects: [
        {
          student: "Fernanda Moya",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://fernanda-mlep.github.io/U3 Fernanda-Moya/"
        },
        {
          student: "Julieta Ungerer",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-15/"
        }
      ]
    },
    {
      title: "Zona Inestable",
      projects: [
        {
          student: "Pedro Beltrán",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-16/"
        },
        {
          student: "Vicente Bravo",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-17/"
        },
        {
          student: "Catalina Cabezas",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-18/"
        }
      ]
    },
    {
      title: "Enlace Fatal",
      projects: [
        {
          student: "Fernanda Costa",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-19/"
        },
        {
          student: "Constanza Cruz",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-20/"
        },
        {
          student: "Antonio Diaz",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-21/"
        }
      ]
    },
    {
      title: "Enrútate",
      projects: [
        {
          student: "Fabián Flores",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-22/"
        },
        {
          student: "Antonia Gonzalez",
          image: "assets/img/placeholder.jpg",
          gif: "assets/gif/placeholder.gif",
          url: "https://usuario.github.io/proyecto-23/"
        }
      ]
    }
  ];
  
  const container = document.getElementById("projectsContainer");
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");
  
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const modalOverlay = document.getElementById("modalOverlay");
  
  function getAllProjects() {
    return categories.flatMap(category =>
      category.projects.map(project => ({
        ...project,
        category: category.title
      }))
    );
  }
  
  function renderGrid() {
    const allProjects = getAllProjects();
  
    container.innerHTML = "";
    container.className = "projects grid-view";
  
    allProjects.forEach(project => {
      const card = document.createElement("a");
  
      card.className = "project-card";
      card.href = project.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", `Abrir proyecto de ${project.student}`);
  
      card.innerHTML = `
        <div class="project-media">
          <img class="static-image" src="${project.image}" alt="${project.student}" loading="lazy">
          <img class="gif-image" src="${project.gif}" alt="" aria-hidden="true" loading="lazy">
          <span class="project-arrow">↗</span>
        </div>
  
        <div class="project-info">
          <span class="project-title">${project.student}</span>
          <span class="project-title-ghost">${project.student}</span>
          <span class="project-category">${project.category}</span>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  function renderList() {
    container.innerHTML = "";
    container.className = "projects list-view";
  
    categories.forEach(category => {
      const categoryCard = document.createElement("article");
      categoryCard.className = "category-card";
  
      categoryCard.innerHTML = `
        <h3 class="category-title">${category.title}</h3>
  
        <div class="category-students">
          ${category.projects
            .map(project => `
              <a href="${project.url}" target="_blank" rel="noopener noreferrer">
                ${project.student}
                <span class="external-icon">↗</span>
              </a>
            `)
            .join("")}
        </div>
      `;
  
      container.appendChild(categoryCard);
    });
  }
  
  function changeView(view) {
    container.classList.add("is-changing");
  
    setTimeout(() => {
      if (view === "grid") {
        renderGrid();
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
      }
  
      if (view === "list") {
        renderList();
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
      }
  
      requestAnimationFrame(() => {
        container.classList.remove("is-changing");
      });
    }, 230);
  }
  
  function showModal() {
    modalOverlay.classList.add("visible");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  
  function hideModal() {
    modalOverlay.classList.remove("visible");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  
  gridBtn.addEventListener("click", () => changeView("grid"));
  listBtn.addEventListener("click", () => changeView("list"));
  
  openModal.addEventListener("click", showModal);
  closeModal.addEventListener("click", hideModal);
  
  modalOverlay.addEventListener("click", event => {
    if (event.target === modalOverlay) hideModal();
  });
  
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") hideModal();
  });
  
  renderGrid();