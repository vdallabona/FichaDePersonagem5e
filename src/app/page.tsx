'use client'

import Link from "next/link";
import { useParams } from 'next/navigation'
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function rotas(){

    const [forc, setFor] = useState(0)
    const [dex, setDex] = useState(0)
    const [con, setCon] = useState(0)
    const [sab, setSab] = useState(0)
    const [int, setInt] = useState(0)
    const [car, setCar] = useState(0)

    let proef = 3;

    //transforma as strings (forc, dex, etc...) em numbers
    let forcNumb = forc * 1
    let dexNumb = dex * 1
    let conNumb = con * 1
    let sabNumb = sab * 1
    let intNumb = int * 1
    let carNumb = car * 1

    const [habProef, setHabProef] = useState(false);
    const [habExper, setHabExper] = useState(false);
    const handleProef = (event) => {
       setHabProef(event.target.checked)
    }
    const handleExper = (event) => {
        setHabExper(event.target.checked)
     }
     let acrobaciaHabilidade = dexNumb
     if(habExper == true){
        acrobaciaHabilidade = proef * 2 + dexNumb
     }else if(habProef){
        acrobaciaHabilidade = dexNumb + proef
     }else{
        acrobaciaHabilidade = dexNumb
     }


     const [habProefPres, setHabProefPres] = useState(false);
     const [habExperPres, setHabExperPres] = useState(false);
     const handleProefPres = (event) => {
        setHabProefPres(event.target.checked)
     }
     const handleExperPres = (event) => {
         setHabExperPres(event.target.checked)
      }
      let presdigitacaoHabilidade = dexNumb
      if(habExperPres == true){
        presdigitacaoHabilidade = proef * 2 + dexNumb
      }else if(habProefPres){
        presdigitacaoHabilidade = dexNumb + proef
      }else{
        presdigitacaoHabilidade = dexNumb
      }


      const [habProefFurt, setHabProefFurt] = useState(false);
      const [habExperFurt, setHabExperFurt] = useState(false);
      const handleProefFurt = (event) => {
         setHabProefFurt(event.target.checked)
      }
      const handleExperFurt = (event) => {
          setHabExperFurt(event.target.checked)
       }
       let furtHabilidade = dexNumb
       if(habExperFurt == true){
         furtHabilidade = proef * 2 + dexNumb
       }else if(habProefFurt){
         furtHabilidade = dexNumb + proef
       }else{
         furtHabilidade = dexNumb
       }

    return(
        <div className="bg-gradient-radial from-red-300 to-red-900 bg-fixed">
            <div className="top-0 left-0 text-center w-60 h-4">
                <h1 className="text-black bg-lago">ficha de personagem</h1>
            </div>
            <div className="container mx-auto my-3 text-center">
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Força:</h1>
                    <input className="atributoInput" name="atributoFor"
                    required
                    onChange={(e) => setFor(e.target.value)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Destreza:</h1>
                    <input className="atributoInput" name="atributoDex"
                    required
                    onChange={(e) => setDex(e.target.value)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Constituição:</h1>
                    <input className="atributoInput" name="atributoCon"
                    required
                    onChange={(e) => setCon(e.target.value)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Sabedoria:</h1>
                    <input className="atributoInput" name="atributoSab"
                    required
                    onChange={(e) => setSab(e.target.value)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Inteligência:</h1>
                    <input className="atributoInput" name="atributoInt"
                    required
                    onChange={(e) => setInt(e.target.value)}
                    />
                </div>
                <div className="caixaAtributo">
                    <h1 className="md:text-lg">Carisma:</h1>
                    <input className="atributoInput" name="atributoCar"
                    required
                    onChange={(e) => setCar(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mx-auto w-fit">
                <div className="w-56 mx-auto">
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Acrobatics:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefAcro"
                            onChange={handleExper}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpAcro"
                            onChange={handleProef}/>
                            <h1 className="inline-block mx-1">+
                            {acrobaciaHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Animal Handling:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefAds"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpAds"></input>
                            <h1 className="inline-block mx-1">+{sabNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Arcana:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefArc"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpArc"></input>
                            <h1 className="inline-block mx-1">+{intNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Athletics:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefAtl"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpAtl"></input>
                            <h1 className="inline-block mx-1">+{forcNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Deception:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefEng"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpEng"></input>
                            <h1 className="inline-block mx-1">+{carNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">History:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefHist"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpHist"></input>
                            <h1 className="inline-block mx-1">+{intNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Insight:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefIntu"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpIntu"></input>
                            <h1 className="inline-block mx-1">+{sabNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Intimidation:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefInti"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpInti"></input>
                            <h1 className="inline-block mx-1">+{carNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Investigation:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefInv"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpInv"></input>
                            <h1 className="inline-block mx-1">+{intNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Medicine:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefMed"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpMed"></input>
                            <h1 className="inline-block mx-1">+{sabNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Nature:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefNat"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpNat"></input>
                            <h1 className="inline-block mx-1">+{intNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Perception:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefPerc"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpPerc"></input>
                            <h1 className="inline-block mx-1">+{sabNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Performance:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefAtu"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpAtu"></input>
                            <h1 className="inline-block mx-1">+{carNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Persuasion:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefPers"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpPers"></input>
                            <h1 className="inline-block mx-1">+{carNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Religion:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefRel"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpRel"></input>
                            <h1 className="inline-block mx-1">+{intNumb + proef}</h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Sleight of Hand:</h1>
                        <div className="inline-block float-right my-1">
                        <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefPres"
                            onChange={handleExperPres}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpAcro"
                            onChange={handleProefPres}/>
                            <h1 className="inline-block mx-1">+
                            {presdigitacaoHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Stealth:</h1>
                        <div className="inline-block float-right my-1">
                        <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer' name="habProefPres"
                            onChange={handleExperFurt}/>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer' name="habExpAcro"
                            onChange={handleProefFurt}/>
                            <h1 className="inline-block mx-1">+
                            {furtHabilidade}
                            </h1>
                        </div>
                    </div>
                    <div className="caixaHabilidade">
                        <h1 className="inline-block my-1">Survival:</h1>
                        <div className="inline-block float-right my-1">
                            <input type='checkbox' className='mx-2 z-10 w-5 cursor-pointer'name="habProefSobr"></input>
                            <input type='checkbox' className='z-20 top-1 left-40 absolute cursor-pointer'name="habExpSobr"></input>
                            <h1 className="inline-block mx-1">+{sabNumb + proef}</h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-2 my-auto">
                    <div className="shadow-md border-2 mx-auto border-lago w-28 bg-white rounded-full top-0 relative my-4 md:my-10">
                            <h1 className="text-center">Bônus de Proeficiência:</h1>
                            <h1 className="text-center text-2xl">+{proef}</h1>
                    </div>
                    <div className="text-center mx-auto my-auto w-48 py-3 md:py-10">
                        <div className="shadow-md border-2 mx-auto border-lago w-16 bg-white rounded-full">
                            <h1 className="text-xl">CA:</h1>
                            <h1 className="text-lg">14</h1>
                        </div>
                        <div className="shadow-md mx-auto border-2 border-lago w-32 mt-4 bg-white rounded-md divide-y-2 divide-slate-300 divide-dashed">
                            <h1 className="text-xl w-20 inline-block">PV</h1>
                            <h1 className="text-lg w-20 inline-block">max: 30</h1>
                            <input className="outline-none w-20 text-center hover:bg-slate-200" placeholder="PV atual" name="VidaAtual"/>
                        </div>
                    </div>
                    <div className="mx-auto w-48 md:my-10">
                        <p className="text-black text-center text-2xl mt-2 md:mt-5">Salvaguarda</p>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Força:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"  className="cursor-pointer" name="SalvFor"></input>
                                <h1 className="inline-block mx-1">+{forcNumb + proef}</h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Destreza:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"  className="cursor-pointer" name="SalvDes"></input>
                                <h1 className="inline-block mx-1">+{dexNumb + proef}</h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Constituição:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"  className="cursor-pointer" name="SalvCon"></input>
                                <h1 className="inline-block mx-1">+{conNumb + proef}</h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Sabedoria:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"  className="cursor-pointer" name="SalvSab"></input>
                                <h1 className="inline-block mx-1">+{sabNumb + proef}</h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Inteligência:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"  className="cursor-pointer" name="SalvInt"></input>
                                <h1 className="inline-block mx-1">+{intNumb + proef}</h1>
                            </div>
                        </div>
                        <div className="caixaHabilidade">
                            <h1 className="inline-block my-1">Carisma:</h1>
                            <div className="inline-block float-right my-1">
                                <input type="checkbox"  className="cursor-pointer" name="SalvCar"></input>
                                <h1 className="inline-block mx-1">+{carNumb + proef}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <div className="shadow-md bg-white border-2 border-lago m-2 border-box inline-block rounded p-2">
                        <h1 className="md:text-lg text-center">Habilidades de Classe:</h1>
                        <textarea className="bg-blue-50 rounded resize-none" rows="8" cols="40" name="habilidadesDeClasse"/>
                </div>
                <div className="shadow-md bg-white border-2 border-lago m-2 border-box inline-block rounded p-2">
                        <h1 className="md:text-lg text-center">Outras Habilidades:</h1>
                        <textarea className="bg-blue-50 rounded resize-none" rows="8" cols="40" name="outrasHabilidades"/>
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
            <footer className="invisible h-40">Vinícius Liberato Cidral Dallabona</footer>
        </div>
    )
}