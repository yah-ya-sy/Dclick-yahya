document.addEventListener("DOMContentLoaded", function () {
    const bouton = document.querySelector(".button_div button");
  
    bouton.addEventListener("click", function (e) {
      e.preventDefault();
  
      const fields = [
        document.getElementById("prenom"),
        document.getElementById("nom"),
        document.getElementById("sujet"),
        document.getElementById("message")
      ];
  
      let allValid = true;
      let firstInvalidField = null;
  
      fields.forEach((field, index) => {
        const value = field.value.trim();
  
        if (!value) {
          field.style.border = "2px solid red";
          if (!firstInvalidField) firstInvalidField = field;
          allValid = false;
        } else {
          field.style.border = "";
        }
      });
  
      if (!allValid) {
        alert("Merci de remplir tous les champs.");
        firstInvalidField.focus(); 
        return;
      }
  
      alert("Merci pour votre message ! Je reviendrai vers vous dès que possible.");
  
      
      fields.forEach(field => {
        field.value = "";
        field.style.border = "";
      });
  
      fields[0].focus(); 
    });
  
    
    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const sujet = document.getElementById("sujet");
    const message = document.getElementById("message");
  
    prenom.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && prenom.value.trim()) {
        e.preventDefault();
        nom.focus();
      }
    });
  
    nom.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && nom.value.trim()) {
        e.preventDefault();
        sujet.focus();
      }
    });
  
    sujet.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && sujet.value.trim()) {
        e.preventDefault();
        message.focus();
      }
    });
  });
  


function menuAppart() {
    document.getElementById('openMenu').style.display = "none";
    document.getElementById('closeMenu').style.display = "block";
    document.querySelector('nav').style.display = "block";
    const elements = [
        { id: 'elementA', delay: 175 },
        { id: 'elementB', delay: 250 },
        { id: 'elementC', delay: 325 },
        { id: 'elementD', delay: 400 },
        { id: 'elementE', delay: 475 },
    ];

    elements.forEach(({ id, delay }) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display='block';
                element.style.opacity='1';
            }
        }, delay);
    });
}
function menuDisppart() {
    document.getElementById('closeMenu').style.display = "none";
    document.getElementById('openMenu').style.display = "block";
    
    const elements = [
        { id: 'elementA', delay: 475 },
        { id: 'elementB', delay: 400 },
        { id: 'elementC', delay: 325 },
        { id: 'elementD', delay: 250 },
        { id: 'elementE', delay: 175 },
    ];

    elements.forEach(({ id, delay }) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display='none';
                element.style.opacity='1';
            }
        }, delay);
    });
    setTimeout(() => {
        document.querySelector('nav').style.display = "none";
    }, 400);
    
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 1114) {
        document.querySelector('nav').style.display = "flex";

        document.getElementById('openMenu').style.display = "none";
        document.getElementById('closeMenu').style.display = "none";

        const elements = ['elementA', 'elementB', 'elementC', 'elementD', 'elementE'];
        elements.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = "block";
                el.style.opacity = "1";
            }
        });
    }
});


const listItems = document.querySelectorAll('nav ul li a');

listItems.forEach(a => {
    a.addEventListener('click', () => {
        listItems.forEach(item => item.classList.remove('active'));
        a.classList.add('active');
    });
});
listItems.forEach(a => {
    a.addEventListener('click', () => {
      
      listItems.forEach(item => item.classList.remove('active'));
      a.classList.add('active');
  
    
      if (window.innerWidth <= 1114) {
        document.getElementById('closeMenu').style.display = "none";
        document.getElementById('openMenu').style.display = "block";
  
        const elements = ['elementA', 'elementB', 'elementC', 'elementD', 'elementE'];
        elements.forEach(id => {
          const el = document.getElementById(id);
          if (el) {
            el.style.display = "none";
            el.style.opacity = "0";
          }
        });
  
        setTimeout(() => {
          document.querySelector('nav').style.display = "none";
        }, 400);
      }
    });
  });
  