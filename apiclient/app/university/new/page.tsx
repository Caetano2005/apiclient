"use client"
export default function NewUniversity() {

    async function SaveUniversity(){
        const abreviatura = document.getElementById("abreviatura") as HTMLInputElement;
        const nome = document.getElementById("nome") as HTMLInputElement;
        const endereco = document.getElementById("endereco") as HTMLInputElement;

        const university = {
            abreviatura: abreviatura.value,
            nome: nome.value,
            endereco: endereco.value
        }

        try {
        const response = await fetch("https://serverapi-kappa.vercel.app/api/universities", {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(university)
        } )
        } catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Cadastrar universidade</h1>
            <form onSubmit={SaveUniversity}>
                <input type="text" placeholder="Sigla Universidade" id="sigla"/> 
                <br />
                <input type="text" placeholder="Nome" id="nome"/>
                <br />
                <input type="text" placeholder="Endereco" id="endereco"/>
                <br />
                <button type="submit"> Salvar </button>
            </form>
        </div>
    )
}