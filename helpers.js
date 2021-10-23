function fighter(luptatori){
    let f=[];
    while(f.length<2){
        let n=Math.floor(Math.random()*6)
        let l=luptatori[n];

        if(f.includes(l)==false){
            f.push(l)
        }
    }
    return f
}


let f=fighter(luptatori)
console.log(f)

function randomCota(){
    c=(Math.random()*5+1).toFixed(2)
    return c
}

cota1=randomCota();
cota2=randomCota();



function win(){

    let method=["TKO","KO","Unanimous Decision","Split Decision","Submision"]
    m=Math.floor(Math.random()*5)
    w=method[m]

    return w
}

method=win()

function winner(){
    let w=["Winner","Losser"]
    let m=Math.floor(Math.random()*2)
    let n=w[m];
    
    return n
}

let verdict=winner()


function pariu(f,cota1,cota2,verdict){

   let obj={
       name:"",
    //    cota:0,
       SumaPariata:0,
       SumaCastigata:0,
   }

   obj.name=prompt("Pe care luptator doriti sa pariati");

   obj.SumaPariata=prompt("Ce suma doriti sa pariati");

   if(obj.name==f[0].name){
       if(verdict=="Winner"){
           obj.SumaCastigata=obj.SumaPariata*cota1
       }
   }else if(obj.name==f[1].name){
      
    if(verdict=="Losser"){
        obj.SumaCastigata=obj.SumaPariata*cota2
    }
}


   return obj
}



function setHome(){
    let body=document.querySelector("body")


    body.innerHTML=`
    
    <section class="main">
       
        <div class="shadow">

            <div class="title">
                <h1>ArtFight Night</h1>
                <img src="img/logo.jpg">
            </div>

            
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non vel ad repellat officiis aliquid sed vero, veritatis voluptates, eveniet voluptate itaque? Pariatur, rerum? Voluptate assumenda omnis iure suscipit dolorem!</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque natus debitis ut sapiente magnam numquam reiciendis. Quis quas sequi asperiores similique dolore reprehenderit voluptatem excepturi corporis, illo facere quidem.</p>
            </div>

            <button class="btn1">Tonight Fight</button>
        </div>
    </section>
    
    `

    let btn1=document.querySelector(".btn1")

    btn1.addEventListener('click',()=>{

        card()
    })
}



function card(){
    let body=document.querySelector("body")

    body.innerHTML=`
    
    <section class="main">
       
    <div class="shadow">

        <div class="title">
            <h1>ArtFight Night</h1>
            <img src="img/logo.jpg">
        </div>


        <div class="cards">
            <div class="card fighter1">
                <img src="${f[0].url}">
                <p>Name: ${f[0].name}</p>
                <p>Record: ${f[0].record}</p>
                <p>Age: ${f[0].age}</p>
                <p>Nickname: ${f[0].nickname}</p>
                <p>Cota: ${cota1}</p>
            </div>



            <div class="middle">
                <h1>FRI 09 OCT 2019</h1>
                <h2>09:00 AM</h2>
                
                <div class="design">
                    <div class="line"></div>
                    <div>
                        <p class="vs">VS</p>
                    </div>
                    <div class="line"></div>
                </div>

                <button class="btn2">Bet Now !</button>
             </div>

                
            <div class="card fighter2">
                <img src="${f[1].url}">
                <p>Name: ${f[1].name}</p>
                <p>Record: ${f[1].record}</p>
                <p>Age: ${f[1].age}</p>
                <p>Nickname: ${f[1].nickname}</p>
                <p>Cota: ${cota2}</p>
            </div>
        </div>
</div>
</section>
    
    `

    let btn2=document.querySelector(".btn2")

    btn2.addEventListener('click',()=>{
        sfarsit()
    })
}

function sfarsit(){
    let body=document.querySelector("body")

    solutie=pariu(f,cota1,cota2,verdict)

    console.log(solutie)

    body.innerHTML=`
    
    
    <section class="main">
       
    <div class="shadow">

        <div class="title">
            <h1>ArtFight Night</h1>
            <img src="img/logo.jpg">
        </div>


        <div class="cards">
            <div class="card fighter1">
                <p>${verdict}</p>
                <p>By: ${method}</p>
                <img src="${f[0].url}">
                <p>Name: ${f[0].name}</p>
                <p>Record: ${f[0].record}</p>
                <p>Age: ${f[0].age}</p>
                <p>Nickname: ${f[0].nickname}</p>
                <p>Cota: ${cota1}</p>
            </div>



            <div class="middle">
                <h1>FRI 09 OCT 2019</h1>
                <h2>09:00 AM</h2>
                
                <div class="design">
                    <div class="line"></div>
                    <div>
                        <p class="vs">VS</p>
                    </div>
                    <div class="line"></div>
                </div>

                <button class="btn2">Bet Now !</button>
             </div>

                
            <div class="card fighter2">
                <img src="${f[1].url}">
                <p>Name: ${f[1].name}</p>
                <p>Record: ${f[1].record}</p>
                <p>Age: ${f[1].age}</p>
                <p>Nickname: ${f[1].nickname}</p>
                <p>Cota: ${cota2}</p>
            </div>
        </div>

        
        <div class="suma">
        <h1>Suma pariata</h1>
        <p>${solutie.SumaPariata}</p>
    </div>

    <div class="suma">
        <h1>Suma castigata</h1>
        <p>${solutie.SumaCastigata}</p>
    </div>

        <button class="btn3">Back to home</button>
</div>
</section>
    
    `
    let btn3=document.querySelector(".btn3")

    btn3.addEventListener('click',()=>{
        setHome()
    })
}