const dados_pessoais = {
    nome: document.getElementById("nameUser"),
    data: document.getElementById("date"),
    cpf: document.getElementById("cpf"),
    email: document.getElementById("email"),
    num: document.getElementById("contact"),
    civil: document.getElementById("civil"),
    genero: document.getElementById("gender"),
    endereco: document.getElementById("address"),
    cep: document.getElementById("cep"),
    bairro: document.getElementById("district"),
    cidade: document.getElementById("city"),
    estado: document.getElementById("state"),
    nacionalidade: document.getElementById("nationality"),
    formacao: document.getElementById("education"),
    deficiencia: document.getElementById("deficiency")
}

const dados_profissionais = {
    experiencia: document.getElementById("experience"),
    trabalho: document.getElementById("work"),
    cargA: document.getElementById("position"),
    cargD: document.getElementById("positionD")
}

const button = document.querySelector("button");
const spans = document.querySelectorAll(".span");

class Profissional {
    constructor(nome, data, cpf, email, num, civil, genero, endereco, cep, bairro, cidade, estado, nacionalidade, formacao, deficiencia) {
        this.nome = nome;
        this.data
        this.cpf
        this.email
        this.num
        this.civil
        this.genero
        this.endereco
        this.cep
        this.bairro
        this.cidade
        this.estado
        this.nacionalidade
        this.formacao
        this.deficiencia
    }
}

class Curriculo {
    constructor(experiencia, trabalho, cargA, cargD) {
        this.experiencia
        this.trabalho
        this.cargA
        this.cargD
    }
}

class Curriculo extends Profissional {
    constructor(experiencia, cargo) {
        this.experiencia = experiencia;
        this.cargo = cargo;
    }
}

//parei aqui 
button.addEventListener("click", () => {
    const curriculo = new Curriculo(
        nome.value,
        experiencia.value,

    );

    const array = []

    array.push(curriculo)

    foreach(elemento in array0); {
        spans[0].innerText = elemento.nome;
        spans[1].innerText = elemento.data;
        spans[2].innerText = elemento.cpf;
        spans[3].innerText = elemento.email;
        spans[4].innerText = elemento.num;
        spans[5].innerText = elemento.civil;
        spans[6].innerText = elemento.genero;
        spans[7].innerText = elemento.endereco
        spans[8].innerText = elemento.cep
        spans[9].innerText = elemento.bairro
        spans[10].innerText = elemento.cidade
        spans[11].innerText = elemento.estado
        spans[12].innerText = elemento.nacionalidade
        spans[13].innerText = elemento.formacao
        spans[14].innerText = elemento.deficiencia
    }
});