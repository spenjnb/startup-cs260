const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData);

        console.log(obj);       
        
        const json = JSON.stringify(obj);
        localStorage.setItem('form', json);

        window.location.href = "ideas.html"        
    })