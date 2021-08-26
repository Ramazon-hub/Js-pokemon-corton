let changeEl = (klas) =>document.querySelector(klas);
let createEl = (tag) => document.createElement(tag);
let append = (father,child) =>father.appendChild(child);
let klas = (tag,className) =>tag.className = className

let pokemonList = changeEl('.pokemon-list')
let form = changeEl('.form')
let searchInput = changeEl('.search-input')
let selectType = changeEl('.select-type')
let selectSort = changeEl('.select-sort')

function pokemonBox(pokemon){
      let pokemonLi = createEl('li');
      klas(pokemonLi,'pokemon__item');

      let pokemonImg = createEl('img');
      klas(pokemonImg,'pokemon__img');
      pokemonImg.src = pokemon.img

      let pokemonTitle = createEl('h3');
      klas(pokemonTitle,'pokemon__title');
      pokemonTitle.textContent = pokemon.name   

      let pokemonWeight = createEl('span')
      klas(pokemonWeight,'pokemon-weight')
      pokemonWeight.textContent = pokemon.weight

      let pokemonBirth = createEl('span')
      klas(pokemonBirth,'pokemon-birth')
     
      pokemonBirth.textContent = new Date(pokemon.birth_date).getFullYear()
    let  pokemonTypeBox = createEl('ul')
    klas(pokemonTypeBox,'pokemon-type-box')
    
    pokemon.type.forEach(type=>{
        let pokemonType = createEl('li')
        klas(pokemonType,'pokemon-type')
        pokemonType.textContent=type
        append(pokemonTypeBox,pokemonType)
    })

      append(pokemonLi,pokemonImg)
      append(pokemonLi,pokemonTitle)
      append(pokemonLi,pokemonWeight)
      append(pokemonLi,pokemonBirth)
      append(pokemonList,pokemonLi)
      append(pokemonLi,pokemonTypeBox)
     

} 
let ShowPokemons = (array) =>{
    array.forEach(result=>pokemonBox(result))
}
ShowPokemons(pokemons);

let getType = () =>{
       
        let arr = []
        pokemons.forEach(pokemon=>pokemon.type.forEach(type=>{
            if(!arr.includes(type)){
                arr.push(type);
                let selectTypeOption = createEl('option');
                selectTypeOption.textContent = type;
                selectTypeOption.value = type;
                append(selectType,selectTypeOption)
            }           

        }))
       
    }
    getType()

    let sortAz = (a,b) =>{
        if(a.name > b.name){
            return 1
        }
        if(b.name > a.name){
            return -1
        }
    }
    let sortZa = (a,b) =>{
        if(a.name > b.name){
            return -1
        }
        if(b.name > a.name){
            return 1
        }
    }
    let sortWeight = (a,b) =>{
        return   Number(b.weight.split(' ',1)) - Number(a.weight.split(' ',1))
    }
    let sortAge = (a,b) =>{
        return    a.birth_date - b.birth_date
    }
    let sortObj = {
        Az:sortAz,
        Za:sortZa,
        kg:sortWeight,
        age:sortAge,
    }

let filterPokemons =(evt) =>{
    evt.preventDefault();
    pokemonList.innerHTML = ''
    let selectValue = selectType.value;
    let searchValue = searchInput.value.trim();
    let sortValue = selectSort.value

    let find = new RegExp(searchValue,'gi')

    let resultFilter = pokemons.filter(pokemon=>{
       if(selectValue === 'all'){
           return true
       }

        return pokemon.type.includes(selectValue)

    }).filter((pokemon)=>pokemon.name.match(find)).sort(sortObj[sortValue])
    
    ShowPokemons(resultFilter)
}


form.addEventListener('submit',filterPokemons)