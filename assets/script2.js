const search = async (e) => {
    try{
        const res = await fetch (`http://localhost:4000/ten-websites`);
        const data = await res.json();
        data.forEach(element => {
            const siteDiv = document.createElement('div');
            siteDiv.classList.add('siteDiv');

            const linkDiv = document.createElement('div');
            linkDiv.classList.add('linkDiv');
            const a = document.createElement('a');
            const linkText = document.createTextNode(element.link);
            a.appendChild(linkText);
            a.href = element.link;
            linkDiv.appendChild(a);

            const titleDiv = document.createElement('div');
            titleDiv.classList.add('titleDiv');
            const a1 = document.createElement('a');
            const linkText1 = document.createTextNode(element.title);
            a1.appendChild(linkText1);
            a1.href = element.link;
            titleDiv.appendChild(a1);

            const descriptionDiv = document.createElement('div');
            descriptionDiv.classList.add('descriptionDiv');
            descriptionDiv.textContent = element.description;

            siteDiv.appendChild(linkDiv)
            siteDiv.appendChild(titleDiv)
            siteDiv.appendChild(descriptionDiv)

            const mainDiv = document.querySelector('#website-list')
            mainDiv.appendChild(siteDiv)

        });   
  
        
        
    }
    catch (error){
        console.log(error)
    }
  }

  search();
