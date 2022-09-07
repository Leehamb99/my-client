document.getElementById("button1").onclick = function (e) {
        e.preventDefault()
        location.href = "http://localhost:8000/results.html?";
    };


    
    const random = async (e) => {
      try{
          const res = await fetch (`http://localhost:4000/ten-websites/random`);
          const data = await res.text();
          location.href = data;
    
          
          
      }
      catch (error){
          console.log(error)
      }
    }

  document.getElementById("button2").onclick = random() 
