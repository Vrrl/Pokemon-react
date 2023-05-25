import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import { getSpecificPokemon, listPokemon } from "../../services/pokemon"
import { useLoading } from "../loading"


export interface PokemonData{
    id: number
    name: string
    exp: number
    sprite: string
    hp: number
    attack: number
    defense: number
    spAttack: number
    spDefense: number
    abilities: string[]
    types: string[]
    backgroundColor: string
}

export interface PokemonContextInterface{
    pokemonList: PokemonData[]
    pokemonCount: number
    searchValue: string
    types: Filter[]
    abilities: Filter[]
    handleGetPrevPage(): void
    handleGetNextPage(): void
    handleChangeSearchValue(value: string): void
    handleChangeTypeFilter(name: string): void
    handleChangeAbilityFilter(name: string): void
}

export const pokemonContextDefault: PokemonContextInterface = {
    pokemonList: [],
    pokemonCount: 0,
    searchValue: "",
    types: [],
    abilities: [],
    handleGetPrevPage: () => {},
    handleGetNextPage: () => {},
    handleChangeSearchValue: () => {},
    handleChangeTypeFilter: () => {},
    handleChangeAbilityFilter: () => {}
}

const PokemonContext = createContext<PokemonContextInterface>(pokemonContextDefault)

export function usePokemon(){
    return useContext(PokemonContext)

}

interface ProviderProps{
    children: ReactNode
}

export interface Filter{
    name: string
    selected: boolean
}

export const typeColor : {[key: string]: string} = {
    grass: '#73D677',
    fire: '#B22222',
    water: '#1E90FF',
    poison: '#9932CC',
    flying: '#FFF44F'
}

export const PokemonProvider = ({children}: ProviderProps) => {
    const loading = useLoading()
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([])
    const [page, setPage] = useState<number>(1)
    const [count, setCount] = useState<number>(0)
    const rows = useRef<number>(9)
    const [searchValue, setSearchValue] = useState<string>("")
    const [types, setTypes] = useState<Filter[]>([])
    const [abilities, setAbilities] = useState<Filter[]>([])
    useEffect(() => {
        getPokemonList(page)
    }, [])
    const getPokemonList = async (page: number) => {
        loading.show()
        
        try {
            const generalList = await listPokemon(page, rows.current)
            const pokemons = await Promise.all(generalList.results.map(async (pokemon) => await getSpecificPokemon(pokemon.name)))
            setCount(generalList.count)
            setPokemonList(pokemons)
            const newTypes : Filter[] = []
            const newAbilities : Filter[] = []
            for(const pokemon of pokemons){
                for(const type of pokemon.types){
                    if(newTypes.find(t => t.name === type)) continue
                    newTypes.push({name: type, selected: false})
                }
                for(const ability of pokemon.abilities){
                    if(newAbilities.find(a => a.name === ability)) continue
                    newAbilities.push({name: ability, selected: false})
                }
            } 
            setTypes(newTypes)
            setAbilities(newAbilities)
            
        } catch (error) {
            console.log(error)
        }
        loading.hide()
    }

    const getFilteredList = (): PokemonData[] => {
        const filteredList = pokemonList.filter(pokemonData => {
            let isOk = true
            if(!pokemonData.name.toLowerCase().includes(searchValue.toLowerCase()))
                isOk = false
            if(types.filter(t => t.selected).length > 0 &&
            !pokemonData.types.some(type => types.filter(t => t.selected).map(t => t.name).includes(type)))
                isOk = false
            if(abilities.filter(a => a.selected).length > 0 &&
            !pokemonData.abilities.some(ability => abilities.filter(a => a.selected).map(a => a.name).includes(ability)))
                isOk = false
            return isOk
        })
        return filteredList
    }

    const handleGetPrevPage = () => {
        if(page === 1) return
        getPokemonList(page - 1)
        setPage(prev => prev - 1)
    }

    const handleGetNextPage = () => {
        if((page + 1) * rows.current > count) return
        getPokemonList(page + 1)
        setPage(prev => prev + 1)
    }

    const handleChangeSearchValue = (value: string) => {
        setSearchValue(value)
    }

    const handleChangeTypeFilter = (name: string) => {
        const newTypes = [...types]
        const type = newTypes.find(type => type.name === name)
        if(type) type.selected = !type.selected
        setTypes(newTypes)
    }

    const handleChangeAbilityFilter = (name: string) => {
        const newAbilities = [...abilities]
        const ability = newAbilities.find(ability => ability.name === name)
        if(ability) ability.selected = !ability.selected
        setAbilities(newAbilities)
    }

    return (
        <PokemonContext.Provider value={{
            pokemonList: getFilteredList(), 
            pokemonCount: count, 
            searchValue: searchValue,
            types: types,
            abilities: abilities,
            handleGetPrevPage, 
            handleGetNextPage,
            handleChangeSearchValue,
            handleChangeTypeFilter,
            handleChangeAbilityFilter
        }}>
            {children}
        </PokemonContext.Provider>
    )
}