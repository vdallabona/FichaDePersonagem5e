import Link from "next/link";
import { useParams } from 'next/navigation'

export default function rotas(){

    const caixaAtributo = "bg-white inline-block border-2 mx-1 border-red-700 my-1 border-box";
    const caixaHabilidade = "bg-white px-1 relative border-2 border-red-700 my-1 border-box rounded";
    const atributoInput = "py-2 text-center w-28 hover:bg-slate-200 md:w-auto"
    return(
        <div>
            <div className="top-0 left-0 text-center w-60 h-4">
                <h1 className="text-black bg-red-400">ficha de personagem</h1>
            </div>
            <div className="container mx-auto my-3 text-center bg-slate-300">
                <div className={caixaAtributo}>
                    <h1>Força:</h1>
                    <input className={atributoInput}></input>
                </div>
                <div className={caixaAtributo}>
                    <h1>Destreza:</h1>
                    <input className={atributoInput}></input>
                </div>
                <div className={caixaAtributo}>
                    <h1>Constituição:</h1>
                    <input className={atributoInput}></input>
                </div>
                <div className={caixaAtributo}>
                    <h1>Sabedoria:</h1>
                    <input className={atributoInput}></input>
                </div>
                <div className={caixaAtributo}>
                    <h1>Inteligência:</h1>
                    <input className={atributoInput}></input>
                </div>
                <div className={caixaAtributo}>
                    <h1>Carisma:</h1>
                    <input className={atributoInput}></input>
                </div>
            </div>
            <div className="flex flex-wrap mx-auto bg-slate-300 w-fit">
                <div className="w-56 mx-auto">
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Acrobatics:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Animal Handling:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Arcana:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Athletics:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Deception:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">History:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Insight:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Intimidation:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Investigation:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Medicine:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Nature:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Perception:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Performance:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Persuasion:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Religion:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Sleight of Hand:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Stealth:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                    <div className={caixaHabilidade}>
                        <h1 className="inline-block my-1">Survival:</h1>
                        <div className="inline-block float-right my-1">
                            <input type="checkbox" className="mx-2 z-10 w-5"></input>
                            <input type="checkbox" className="z-20 top-1 left-40 absolute"></input>
                            <h1 className="inline-block mx-1">+5</h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto my-auto p-3">
                    <div className="text-center mx-auto my-auto w-48 py-3 md:py-10">
                        <div className="border-2 mx-auto border-red-700 w-16 bg-white rounded-full">
                            <h1 className="text-xl">AC:</h1>
                            <h1 className="text-lg">14</h1>
                        </div>
                        <div className="mx-auto border-2 border-red-700 w-32 my-1 bg-white rounded-md">
                            <h1 className="text-lg">PV max: 30</h1>
                            <input className="w-20 text-center hover:bg-slate-200"/>
                        </div>
                    </div>
                    <div className="bg-slate-300 mx-auto w-48 my-auto">
                        <p className="text-black text-center text-2xl">Salvaguarda</p>
                        <div className={caixaHabilidade}>
                            <h1 className="inline-block my-1">Força:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"></input>
                                <h1 className="inline-block mx-1">+5</h1>
                            </div>
                        </div>
                        <div className={caixaHabilidade}>
                            <h1 className="inline-block my-1">Destreza:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"></input>
                                <h1 className="inline-block mx-1">+5</h1>
                            </div>
                        </div>
                        <div className={caixaHabilidade}>
                            <h1 className="inline-block my-1">Constituição:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"></input>
                                <h1 className="inline-block mx-1">+5</h1>
                            </div>
                        </div>
                        <div className={caixaHabilidade}>
                            <h1 className="inline-block my-1">Sabedoria:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"></input>
                                <h1 className="inline-block mx-1">+5</h1>
                            </div>
                        </div>
                        <div className={caixaHabilidade}>
                            <h1 className="inline-block my-1">Inteligência:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"></input>
                                <h1 className="inline-block mx-1">+5</h1>
                            </div>
                        </div>
                        <div className={caixaHabilidade}>
                            <h1 className="inline-block my-1">Carisma:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"></input>
                                <h1 className="inline-block mx-1">+5</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/*
            <div className="flex flex-wrap h-56 w-96 bg-slate-500 content-center justify-around">
                <div className="flex flex-wrap container bg-slate-50 h-40 w-60 justify-center content-center">
                    <p className="text-red-700 p-2 m-2">1</p>
                    <p className="text-blue-700 p-2 m-2">2</p>
                    <p className="text-red-700 p-2 m-2">3</p>
                    <p className="text-blue-700 p-2 m-2">4</p>
                </div>
                <div className="flex flex-wrap h-10 w-10 bg-slate-900 content-around justify-around">
                <div className="h-4 w-4 bg-slate-700"/>
                <div className="h-4 w-4 bg-slate-700"/>
                <div className="h-4 w-4 bg-slate-700"/>
                <div className="h-4 w-4 bg-slate-700"/>
                </div>
            </div>
*/}
        </div>
    )
}