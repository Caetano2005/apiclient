"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function DeleteUniversity() {

    const id = useSearchParams().get("id");
    const router = useRouter();


    async function clickDelete() {
        console.log("Universidade Deletada");
        try {
        const response = await fetch(`https://serverapi-kappa.vercel.app/api/universities/${id}`, {
            method: "DELETE",
        })
        router.push("/university");
    }catch (error){
        console.error("Erro ao deletar a universidade", error);
    }
    }
    return (
        <div>
            <h1>Deletar Universidade</h1>
            <button onClick={clickDelete}>Deletar</button>
        </div>
        
    )
}