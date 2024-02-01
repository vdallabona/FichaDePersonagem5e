import Link from "next/link";
import { useParams } from 'next/navigation'

export default function rotas(){
    let numero = 0

    return(
        <div>
            <div class="absolute top-0 left-0">
                <h1 class="text-black bg-red-400">ficha de personagem</h1>
            </div>
            <div class="container bg-black my-6 mx-1 text-center">
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Força:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Destreza:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Constituição:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Sabedoria:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Inteligência:</h1>
                    <input class="py-2 text-center"></input>
                </div>
                <div class="bg-white inline-block
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1>Carisma:</h1>
                    <input class="py-2 text-center"></input>
                </div>
            </div>
            <div class="container bg-black my-4 mx-1">
                <div class="bg-white px-1
                 border-2 border-red-400 my-1 border-box
                ">
                    <h1 class="inline-block">Habilidade:</h1>
                    <input type="checkbox" class="mx-2"></input>
                    <input type="checkbox" class="bg-red"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1 class="inline-block">Habilidade:</h1>
                    <input type="checkbox" class="mx-2"></input>
                    <input type="checkbox" class="bg-red"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1 class="inline-block">Habilidade:</h1>
                    <input type="checkbox" class="mx-2"></input>
                    <input type="checkbox" class="bg-red"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1 class="inline-block">Habilidade:</h1>
                    <input type="checkbox" class="mx-2"></input>
                    <input type="checkbox" class="bg-red"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1 class="inline-block">Habilidade:</h1>
                    <input type="checkbox" class="mx-2"></input>
                    <input type="checkbox" class="bg-red"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
                <div class="bg-white px-1
                 border-2 border-red-400 my-1 border-box
                 ">
                    <h1 class="inline-block">Habilidade:</h1>
                    <input type="checkbox" class="mx-2"></input>
                    <input type="checkbox" class="bg-red"></input>
                    <h1 class="inline-block mx-1">Valor do modificador</h1>
                </div>
            </div>
        </div>
    )
}